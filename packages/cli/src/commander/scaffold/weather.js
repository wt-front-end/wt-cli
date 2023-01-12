/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-12 09:26:05
 * @LastEditors: xkloveme
 * @Description: 天气命令
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/weather.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const log = require('../../lib/utils/log');
const exec = require('mz/child_process').exec;

module.exports = async function ({ address }) {
  // 检测当前网络环境
  let isNetWorkOk = await utils.isNetworkConnect();
  // 离线提示
  if (!isNetWorkOk) {
    log.error(locals.NETWORK_DISCONNECT);
    log.error(locals.NETWORK_DISCONNECT_SUG);
    return;
  }
  let url = address ? `curl wttr.in/${address}` : 'curl wttr.in'
  exec(url).then((res) => {
    console.log(res[0])
  })
}