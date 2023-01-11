#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:21:17
 * @LastEditTime: 2023-01-11 22:08:36
 * @LastEditors: xkloveme
 * @Description: 本地服务启动
 * @FilePath: \wt-cli\bin\v-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const shortcutServer = require('../packages/cli/src/commander/scaffold/shortcut');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('dev [cmd]')
  .description(locals.DEV_DESC)
  .alias('v')
  .action((cmd) => shortcutServer({
    cmd: cmd || 'run dev'
  }))
  .parse(process.argv);