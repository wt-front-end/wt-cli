/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-12 10:53:42
 * @LastEditors: xkloveme
 * @Description: 获取我的所有ip
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/ip.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const chalk = require('chalk');

module.exports = async function () {
  console.log('您的IP为:' + chalk.blue(utils.getIPAdress()));
}