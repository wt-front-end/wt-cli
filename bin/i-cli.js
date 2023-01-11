#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:22:23
 * @LastEditTime: 2023-01-11 14:51:57
 * @LastEditors: xkloveme
 * @Description: 依赖安装命令
 * @FilePath: /watone-cli/bin/i-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const shortcutServer = require('../packages/cli/src/commander/scaffold/shortcut');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('install [cmd]')
  .description(locals.BUILD_DESC)
  .alias('i')
  .action((cmd) => shortcutServer({
    cmd: cmd || 'install'
  }))
  .parse(process.argv);