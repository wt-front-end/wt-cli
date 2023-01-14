/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-14 22:15:21
 * @LastEditors: xkloveme
 * @Description: 初始化项目
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/init.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const chalk = require('chalk');
const log = require('../../lib/utils/log');
const locals = require('../../locals')();
module.exports = async function (conf) {
  // 检测当前网络环境
  let isNetWorkOk = await utils.isNetworkConnect();

  // 离线提示
  if (!isNetWorkOk) {
    log.error(locals.NETWORK_DISCONNECT);
    log.error(locals.NETWORK_DISCONNECT_SUG);
    return;
  }
  let isNetworkConnectWatone = await utils.isNetworkConnectWatone()
  if (!isNetworkConnectWatone) {
    log.warn(locals.NETWORK_DISCONNECTWATONE_SUG);
  }else{
    log.info(locals.NETWORK_DISCONNECTWATONE_SUCCESS);
  }
  log.info(locals.GREETING_GUIDE + '\n');
  console.log(conf)

  // console.log('您的IP为:' + chalk.blue(utils.getIPAdress()));
}