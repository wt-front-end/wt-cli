/*
 * @describe: 命令汇总
 * @Author: superDragon
 * @Date: 2019-08-30 11:21:05
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-11 09:47:29
 */
'use strict';

// init 安装脚手架命令
// const init = require('./action');
// weather 天气
const weather = require('./weather');
// 搜索
const serach = require('./serach');
// http
const httpServer = require('./http');
// 提示文件
const locals = require('../../locals')();

module.exports = function (program) {

  // define init command
  // program
  //   .command('init')
  //   .description(locals.INIT_DESC)
  //   .option('-f, --force', locals.INIT_OPTION_FORCE)
  //   .action((cmd,options) => init({
  //     cmd: cmd,
  //     force: options.force
  //   }));

  // 天气
  program
    .command('weather [address]')
    .description(locals.WEATHER_DESC)
    .alias('w')
    .action((address) => weather({
      address: address
    }));
  // 搜索
  program
    .command('serach [q]')
    .description(locals.SERACH_DESC)
    .alias('s')
    .option('-b, --baidu [type]', locals.BAIDU_DESC)
    .option('-g, --google [type]', locals.GOOGLE_DESC)
    .option('-s, --sougou [type]', locals.SOUGOU_DESC)
    .option('-t, --github [type]', locals.GITHUB_DESC)
    .action((q, type) => serach({
      q: q,
      type: type
    }));
  // http服务
  program
    .command('http [path]')
    .description(locals.HTTP_DESC)
    .alias('h')
    .option('-p, --port [port]', locals.HTTP_PORT)
    .option('-o, --open [open]', locals.HTTP_OPEN)
    .option('-d, --dir [dir]', locals.HTTP_URL)
    .action((path,options) => {
      let server = new httpServer({
        port: options.port,
        open: options.port,
        dir: path || options.dir,
      })
      server.start();
    });
};