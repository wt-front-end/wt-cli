/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-18 09:54:13
 * @LastEditors: xkloveme
 * @Description: 获取我的所有ip
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/ip.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const chalk = require('chalk');
const getMac = require('getmac');
module.exports = async function () {
  let ipall = utils.getIPAdressAll() || []
  ipall.forEach(item => {
    console.log('您的IP为:      ' + chalk.blue(item));
  });
  console.log('您的MAC地址为: ' + chalk.blue(getMac.default()));
}