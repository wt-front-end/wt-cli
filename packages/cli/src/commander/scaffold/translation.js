/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-12 10:43:26
 * @LastEditors: xkloveme
 * @Description: 翻译服务
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/translation.js
 * @Copyright © xkloveme
 */
const chalk = require('chalk');
const log = require('../../lib/utils/log');
const request = require('request');

module.exports = async function ({ keyword }) {
  if (keyword) {
    let url = `http://fanyi.youdao.com/translate?doctype=json&type=AUTO&i=${encodeURI(keyword)}`
    request(url, function (error, response, data) {
      if (data.errorCode == 0) {
        console.log('翻译后的内容:'+chalk.blue(data.translateResult[0][0]['tgt']));
      }
    }).json();
  } else {
    log.error('您并没有输入内容，示例: `watone t [翻译内容]`');
  }
}