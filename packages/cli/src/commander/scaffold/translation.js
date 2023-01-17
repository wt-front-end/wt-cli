/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-17 15:41:55
 * @LastEditors: xkloveme
 * @Description: 翻译服务
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/translation.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils');
const chalk = require('chalk');
const log = require('../../lib/utils/log');
const request = require('request');
const locals = require('../../locals')();
module.exports = async function ({ keyword }) {
  // 检测当前网络环境
  let isNetWorkOk = await utils.isNetworkConnect();
  // 离线提示
  if (!isNetWorkOk) {
    log.error(locals.NETWORK_DISCONNECT);
    log.error(locals.NETWORK_DISCONNECT_SUG);
    return;
  }
  if (keyword) {
    let url = `http://fanyi.youdao.com/translate?doctype=json&type=AUTO&i=${encodeURI(keyword)}`
    request(url, function (error, response, data) {
      if (data.errorCode == 0) {
        console.log('翻译后的内容:' + chalk.blue(data.translateResult[0][0]['tgt']));
      }
    }).json();
  } else {
    log.error('您并没有输入内容，示例: `watone t [翻译内容]`');
  }
}