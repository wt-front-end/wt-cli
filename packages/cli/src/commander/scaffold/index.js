/*
 * @describe: 命令汇总
 * @Author: superDragon
 * @Date: 2019-08-30 11:21:05
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-11 19:28:28
 */
'use strict';
// init 安装脚手架命令
// const init = require('./action');
// build 快捷打包
const shortcutServer = require('./shortcut');
// weather 天气
const weatherServer = require('./weather');
// 搜索
const serachServer = require('./serach');
// http
const httpServer = require('./http');
// 提示文件
const locals = require('../../locals')();

// 定义build命令
exports.build = function(program) {
  program
    .command('build [cmd]')
    .description(locals.BUILD_DESC)
    .alias('b')
    .action((cmd) => shortcutServer({
      cmd: cmd || 'build'
    }));
}
// 定义dev命令
exports.dev = function(program) {
  program
    .command('dev [cmd]')
    .description(locals.DEV_DESC)
    .alias('v')
    .action((cmd) => shortcutServer({
      cmd: cmd || 'dev'
    }));
}
// 定义install命令
exports.install = function(program) {
  program
    .command('install [cmd]')
    .description(locals.BUILD_DESC)
    .alias('i')
    .action((cmd) => shortcutServer({
      cmd: cmd || 'install'
    }));
}
// 定义weather命令
exports.weather = function(program) {
  program
    .command('weather [address]')
    .description(locals.WEATHER_DESC)
    .alias('a')
    .action((address) => weatherServer({
      address: address
    }));
}

// 定义serach命令
exports.serach = function(program) {
  program
    .command('serach [q]')
    .description(locals.SERACH_DESC)
    .alias('s')
    .option('-b, --baidu [type]', locals.BAIDU_DESC)
    .option('-g, --google [type]', locals.GOOGLE_DESC)
    .option('-s, --sougou [type]', locals.SOUGOU_DESC)
    .option('-t, --github [type]', locals.GITHUB_DESC)
    .action((q, type) => serachServer({
      q: q,
      type: type
    }));
}

// 定义www命令
exports.http = function(program) {
  program
    .command('www [path]')
    .description(locals.HTTP_DESC)
    .alias('w')
    .option('-p, --port [port]', locals.HTTP_PORT)
    .option('-o, --open [open]', locals.HTTP_OPEN)
    .option('-d, --dir [dir]', locals.HTTP_URL)
    .action((path, options) => {
        let server = new httpServer({
          port: options.port,
          open: options.open,
          dir: path || options.dir,
        })
        server.start();
    });
}