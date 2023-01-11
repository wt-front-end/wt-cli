#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:20:47
 * @LastEditTime: 2023-01-11 20:03:11
 * @LastEditors: xkloveme
 * @Description: http静态服务
 * @FilePath: \wt-cli\bin\w-cli.js
 * @Copyright © xkloveme
 */

const program = require('commander');
const httpServer = require('../packages/cli/src/commander/scaffold/http');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('www [path]')
  .description(locals.HTTP_DESC)
  .alias('w')
  .option('-p, --port [port]', locals.HTTP_PORT)
  .option('-o, --open [open]', locals.HTTP_OPEN)
  .option('-d, --dir [dir]', locals.HTTP_URL)
  .on("--help", () => {
    console.log("Example");
    console.log(" $ w --port --host");
  })
  .action((path, options) => {
    let server = new httpServer({
      port: options.port,
      open: options.open,
      dir: path || options.dir,
    })
    server.start();
  })
  .parse(process.argv);
