#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:21:17
 * @LastEditTime: 2023-01-11 14:51:20
 * @LastEditors: xkloveme
 * @Description: 本地服务启动
 * @FilePath: /watone-cli/bin/v-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const shortcutServer = require('../packages/cli/src/commander/scaffold/shortcut');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('dev [cmd]')
  .description(locals.BUILD_DESC)
  .alias('v')
  .action((cmd) => shortcutServer({
    cmd: cmd || 'dev'
  }))
  .parse(process.argv);