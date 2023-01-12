/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-12 10:08:37
 * @LastEditors: xkloveme
 * @Description: QR code 生成
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/qrcode.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const log = require('../../lib/utils/log');

module.exports = async function ({ keyword }) {
  if(keyword){
    utils.generateQrcode(keyword)
  }else{
    log.error('您并没有输入内容，示例: `watone q [二维码内容]`');
  }
}