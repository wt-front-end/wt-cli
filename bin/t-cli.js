#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:21:51
 * @LastEditTime: 2023-01-13 10:03:22
 * @LastEditors: xkloveme
 * @Description: 翻译
 * @FilePath: /watone-cli/bin/t-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const translationServer = require('../packages/cli/src/commander/scaffold/translation');
const locals = require('../packages/cli/src/locals/index')();

program
  .command('translation [keyword]')
  .description(locals.TRANSLATION_DESC)
  .alias('t')
  .action((keyword) => translationServer({
    keyword,
  }))
  .parse(process.argv);
