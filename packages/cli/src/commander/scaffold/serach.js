/*
 * @Author: xkloveme
 * @Date: 2023-01-10 16:19:09
 * @LastEditTime: 2023-01-10 16:50:49
 * @LastEditors: xkloveme
 * @Description: bing 搜索
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/serach.js
 * @Copyright © xkloveme
 */

const utils = require('../../lib/utils');
module.exports = async function ({ q, type }) {
  // 检测当前网络环境
  let isNetWorkOk = await utils.isNetworkConnect();
  // 离线提示
  if (!isNetWorkOk) {
    log.error(locals.NETWORK_DISCONNECT);
    log.error(locals.NETWORK_DISCONNECT_SUG);
    return;
  }
  let serachType = Object.keys(type)[Object.keys(type).length - 1]
  switch (serachType) {
    case "baidu":
      utils.openURL(`https://www.baidu.com/s?wd=${q}`);
      break;
    case "sougou":
      utils.openURL(`https://www.sogou.com/sogou?query=${q}`);
      break;
    case "google":
      utils.openURL(`https://www.google.com/search?q=${q}`);
      break;
    default:
      utils.openURL(`https://cn.bing.com/search?q=${q}`);
  }
}