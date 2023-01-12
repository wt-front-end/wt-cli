/*
 * @Author: xkloveme
 * @Date: 2023-01-10 16:19:09
 * @LastEditTime: 2023-01-12 14:50:53
 * @LastEditors: xkloveme
 * @Description: open link
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/open.js
 * @Copyright © xkloveme
 */
const log = require('../../lib/utils/log');
const utils = require('../../lib/utils');
module.exports = async function ({ url }) {
  if (url) {
    if (url.substr(0, 7).toLowerCase() == "http://" || url.substr(0, 8).toLowerCase() == "https://") {
      url = url;
    } else {
      url = "http://" + url;
    }
    utils.openURL(url);
  } else {
    log.error('您并没有输入链接，示例: `watone o [URL链接]`');
  }
}