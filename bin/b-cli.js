#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:21:51
 * @LastEditTime: 2023-01-11 22:08:49
 * @LastEditors: xkloveme
 * @Description: 打包相关命令
 * @FilePath: \wt-cli\bin\b-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const shortcutServer = require('../packages/cli/src/commander/scaffold/shortcut');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('build [cmd]')
  .description(locals.BUILD_DESC)
  .alias('b')
  .action((cmd) => shortcutServer({
    cmd: cmd || 'run build'
  }))
  .parse(process.argv);
