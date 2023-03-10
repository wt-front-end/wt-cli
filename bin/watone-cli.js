#!/usr/bin/env node
/*
 * @describe: 主入口
 * @Author: superDragon
 * @Date: 2019-08-30 10:56:06
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-11 19:10:30
 */
process.env.NODE_PATH = __dirname + '/../node_modules/'
process.env.NODE_ENV = 'development';
process.env.VERSION = require('../package.json').version;
require('../packages/cli/src/commander/index');