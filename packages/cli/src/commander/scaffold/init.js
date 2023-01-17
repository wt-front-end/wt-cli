/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-17 13:51:46
 * @LastEditors: xkloveme
 * @Description: 初始化项目
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/init.js
 * @Copyright © xkloveme
 */
const fs = require('fs')    // 文件读写
const path = require('path')    // 路径获取
const exec = require('mz/child_process').exec;
const shell = require('shelljs');
const ora = require('ora');
const ejs = require('ejs');
const utils = require('../../lib/utils');
const chalk = require('chalk');
const log = require('../../lib/utils/log');
const locals = require('../../locals')();
const inquirer = require('inquirer');


const questions = [
  {
    type: "list",
    name: "project",
    message: locals.GREETING_GUIDE,
    choices: ["1.vite4-vue3-ruoyi-web 基于嘉善vite 若依版本", "2.vite-uni-app-vue3 手机端全平台模版", "3.electron-vite-vue 客户端模版,含有热更新,增量更新", "4.vite-tailwind-dataV 大屏模版"],
    filter: function (val) {
      return val.split(".")[0];
    }
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名称(\'\')'
  },
  {
    type: 'input',
    name: 'version',
    default: '1.0.0',
    message: '请输入项目版本号(1.0.0)'
  },
  {
    type: 'input',
    name: 'description',
    message: '请输入项目备注(\'\')'
  },
  {
    type: 'confirm',
    name: 'yes',
    message: '是否确认以上信息并开始下载模版?',
  }
];
let urlObjList = {
  1: {
    gitlab: 'git@30.207.88.65:cli-templates/ruoyi-vue3.git',
    github: 'https://github.com/wt-front-end/vite4-vue3-ruoyi-web.git',
  },
  2: {
    gitlab: 'git@30.207.88.65:cli-templates/vite-uni-app-vue3.git',
    github: 'https://github.com/wt-front-end/vite-uni-app-vue3.git',
  },
  3: {
    gitlab: 'git@30.207.88.65:cli-templates/electron-vite-vue.git',
    github: 'https://github.com/wt-front-end/electron-vite-vue',
  },
  4: {
    gitlab: 'git@30.207.88.65:cli-templates/vite-tailwind-dataV.git',
    github: 'https://github.com/wt-front-end/vite-tailwind-dataV.git',
  }
}
/**
 * 获取当前用户的 git 账号信息
 *
 * @return {Promise} promise 对象
 */
async function getGitInfo () {
  let author;
  let email;

  try {
    // 尝试从 git 配置中获取
    author = await exec('git config --get user.name');
    email = await exec('git config --get user.email');
  }
  catch (e) {
  }
  author = author && author[0] && author[0].toString().trim();
  email = email && email[0] && email[0].toString().trim();
  return { author, email };
}
module.exports = async function (conf) {
  // 检测当前网络环境
  let isNetWorkOk = await utils.isNetworkConnect();

  // 离线提示
  if (!isNetWorkOk) {
    log.error(locals.NETWORK_DISCONNECT);
    log.error(locals.NETWORK_DISCONNECT_SUG);
    return;
  }
  let isNetworkConnectWatone = await utils.isNetworkConnectWatone()
  if (!isNetworkConnectWatone) {
    log.warn(locals.NETWORK_DISCONNECTWATONE_SUG);
  } else {
    log.info(locals.NETWORK_DISCONNECTWATONE_SUCCESS);
  }
  log.info(locals.GREETING_GUIDE + '\n');
  // 第一步选择模版
  // 第二步输入项目信息
  // 第三部下载代码
  inquirer.prompt(questions).then(async (res) => {
    if (res.yes) {
      let userInfo = await getGitInfo()
      let pwd = shell.pwd()
      let spinner = ora(locals.LOADING_EXPORT_PROJECT + `,项目路径：${pwd}/${res.name}/ ...`);
      let url = urlObjList[res.project][isNetworkConnectWatone ? 'gitlab' : 'gitee']
      spinner.start();
      conf.force && shell.exec(`rm -rf ${pwd}/${res.name}`);
      shell.exec(`
        git clone ${url} ${res.name} --depth 1
        cd ${res.name}
        rm -rf .git
        git init
      `, (code, stdout, stderr) => {
        if (code === 0) {
          const destDir = process.cwd()
          let fileDestDir = path.join(`${destDir}/${res.name}`, 'package.json')
          // 修改package文件
          ejs.renderFile(fileDestDir, {
            project: res.project,
            name: res.name,
            version: res.version,
            description: res.description,
            author: userInfo.author,
            email: userInfo.email
          }, (err, result) => {
            if (err) console.error(err)
            fs.writeFileSync(fileDestDir, result)
          })
        } else {
          console.error(`EXEC ERROR${code}`)
        }
      })
      spinner.stop();
    } else {
      return log.info('您已退出下载模版' + '\n')
    }
  }).catch((err) => {
    console.error('报错！', err);
  });

}