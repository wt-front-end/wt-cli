/*
 * @describe: 命令配置
 * @Author: superDragon
 * @Date: 2019-08-29 17:48:31
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-10 16:12:56
 */
'use strict';

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');
const exec = require('mz/child_process').exec;
const execSync = require('mz/child_process').execSync;
const locals = require('../locals')();
const log = require('../lib/utils/log');
const initCommand = require('./scaffold');
// 检查版本更新方法
const checkUpdate = require('../lib/utils/checkUpdate');

let version = process.env.VERSION;
let tableVersion =[
  { name : "wt", version : version },
  { name : "git", version : execSync('git --version', {encoding: 'utf8'}).replace(/\n/g, "")},
  { name : "node", version : execSync('node -v', {encoding: 'utf8'}).replace(/\n/g, "")},
  { name : "npm", version : execSync('npm -v', {encoding: 'utf8'}).replace(/\n/g, "")},
  { name : "yarn", version : execSync('yarn -v', {encoding: 'utf8'}).replace(/\n/g, "")},
  { name : "pnpm", version : execSync('pnpm -v', {encoding: 'utf8'}).replace(/\n/g, "")}
]
let tableInfo = [
  { [locals.DOC]: "说明文档", [locals.LINK]: "" },
  { [locals.DOC]: "前端文档", [locals.LINK]: "https://wt-front-end.github.io/wt-docs/" },
  { [locals.DOC]: "WT-UI-ANTD组件库", [locals.LINK]: "https://wt-front-end.github.io/wt-ui-antd/" },
  { [locals.DOC]: "表格转化工具", [locals.LINK]: "https://www.jixiaokang.com/black-tool/" },
  { [locals.DOC]: "npm地址", [locals.LINK]: "https://www.npmjs.com/package/@watone/wt-cli" },
  { [locals.DOC]: "仓库地址", [locals.LINK]: "http://30.207.88.65:8090/watone/wt-cli" }
]


// 检查最新版本
checkUpdate().then(async () => {
  let logo = chalk.yellow(figlet.textSync('WATONE', { horizontalLayout: 'full' }))
  // 如果后序没有输入命令，执行帮助指令
  if (!process.argv[2] || !process.argv) {
    console.log(logo);
    exec('wt -h').then((res) => {
      console.log(res[0])
    })
  }
  // 获取版本号
  else {
    let argv = process.argv[2];

    if (argv === '-V' || argv === '-v' || argv === '--version') {
      clear();
      console.log(logo);
      log.info('wt version: ', version);
      console.group(locals.SHOW_VERSION);
      console.table(tableVersion);
      console.groupEnd();
      console.group(locals.DOC_LINK);
      console.table(tableInfo, [locals.DOC, locals.LINK]);
      console.groupEnd();
    }
  }
  program.on('--help', function () {
    console.log('')
    console.log('Examples:');
    log.info('  $ wt -v');
    log.info('  $ wt s 天气');
  });

  // 定义命令
  program
    // 设置/获取命令用法str
    .usage('[commands] [options]')
    // 定义顶级命令的参数语法。
    .arguments('<cmd> [env]')
    .option('b, build', locals.BUILD)
    .option('c, clone', locals.CLONE)
    .option('v, dev', locals.SERVER)
    .option('s, serach', locals.SERACH)
    .option('i, ip', locals.IP)
    .option('o, open', locals.OPEN)
    .option('h, http', locals.HTTP)
    .option('w, weather', locals.WEATHER)
    .option('t, time', locals.TIME)
    .option('q, qr', locals.QR)
    .option('-v, --version', locals.SHOW_VERSION)
    // 注册命令的回调
    .action((cmd, env) => {
      if (env) {
        log.error(`\`wt ${cmd} ${env}\` ${locals.NO_COMMAND}`);
      }
      else {
        log.error('`wt ' + cmd + '` ' + locals.NO_COMMAND);
      }
    });

  // init
  initCommand(program);

  program.parse(process.argv);
});
