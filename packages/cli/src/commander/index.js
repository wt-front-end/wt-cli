#!/usr/bin/env node
/*
 * @describe: 命令配置
 * @Author: superDragon
 * @Date: 2019-08-29 17:48:31
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-14 22:20:00
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
const utils = require('../lib/utils');
const { init, build, weather, serach, http, dev, install, qrcode, translation, ip, open } = require('./scaffold');
// 检查版本更新方法
const checkUpdate = require('../lib/utils/checkUpdate');

let version = process.env.VERSION;
let tableVersion = [
  { name: "watone", version: version },
  { name: "node", version: execSync('node -v', { encoding: 'utf8' }).replace(/[\r\n]/g, "") },
  { name: "npm", version: execSync('npm -v', { encoding: 'utf8' }).replace(/[\r\n]/g, "") },
]
utils.cmdExists('git') && tableVersion.push({ name: "git", version: execSync('git --version', { encoding: 'utf8' }).replace(/[\r\n]/g, "") })
utils.cmdExists('yarn') && tableVersion.push({ name: "yarn", version: execSync('yarn -v', { encoding: 'utf8' }).replace(/[\r\n]/g, "") })
utils.cmdExists('pnpm') && tableVersion.push({ name: "pnpm", version: execSync('pnpm -v', { encoding: 'utf8' }).replace(/[\r\n]/g, "") })
let tableInfo = [
  { [locals.DOC]: "说明文档", [locals.LINK]: "https://wt-front-end.github.io/wt-docs/wt-cli.html" },
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
    exec('watone -h').then((res) => {
      console.log(res[0])
    })
  }
  // 获取版本号
  else {
    let argv = process.argv[2];

    if (argv === '-V' || argv === '-v' || argv === '--version') {
      clear();
      console.log(logo);
      log.info(locals.WELECOME);
      log.info('watone version: ', version);
      console.log(chalk.blue(locals.HELP_DESC));
      console.group(locals.SHOW_VERSION);
      console.table(tableVersion);
      console.groupEnd();
      console.group(locals.DOC_LINK);
      console.table(tableInfo, [locals.DOC, locals.LINK]);
    }
  }
  program.on('--help', function () {
    console.group('Examples:');
    log.info('获取版本信息  $ watone -v');
    log.info('搜索内容  $ watone s 杭州到北京多远');
    log.info('当前天气  $ watone a');
    log.info('启动http服务  $ watone w 或者 $ w');
    log.info('生成二维码  $ watone qrcode 我的二维码 或者 $ watone q 我的二维码');
  });

  // 定义命令
  program
    // 设置/获取命令用法str
    .usage('[commands] [options]')
    // 定义顶级命令的参数语法。
    .arguments('[cmd]')
    .option('b, build', locals.BUILD)
    .option('c, clone', locals.CLONE)
    .option('v, dev', locals.SERVER)
    .option('s, serach', locals.SERACH)
    .option('ip', locals.IP)
    .option('o, open', locals.OPEN)
    .option('h, http', locals.HTTP)
    .option('w, weather', locals.WEATHER)
    .option('t, time', locals.TIME)
    .option('q, qr', locals.QRCODE_DESC)
    .option('-v, --version', locals.SHOW_VERSION)
    // 注册命令的回调
    .action((cmd) => {
      if (cmd) {
        log.error(`\`wt ${cmd}\` ${locals.NO_COMMAND}`);
      }
    });

  // 命令
  init(program);
  build(program);
  weather(program);
  serach(program);
  http(program);
  dev(program);
  install(program);
  qrcode(program);
  translation(program);
  ip(program);
  open(program);


  program.parse(process.argv);
});
