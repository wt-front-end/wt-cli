/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-13 17:39:08
 * @LastEditors: xkloveme
 * @Description: 获取我的所有ip
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/ip.js
 * @Copyright © xkloveme
 */
const utils = require('../../lib/utils')
const chalk = require('chalk');
const networkInterfaces = require('os').networkInterfaces;

const virtualMacPrefix = new Set([
  '00:05:69', // vmware1
  '00:0c:29', // vmware2
  '00:50:56', // vmware3
  '00:1c:14', // vmware
  '00:1c:42', // parallels1
  '02:00:4c', // Microsoft Loopback Adapter (微软回环网卡)
  '00:03:ff', // microsoft virtual pc
  '00:0f:4b', // virtual iron 4
  '00:16:3e', // red hat xen , oracle vm , xen source, novell xen
  '08:00:27', // virtualbox
]);
function isMac (mac) {
  return /^([\da-f]{1,2}[:-]){5}([\da-f]{1,2})$/i.test(mac);
}
function isZeroMac (mac) {
  return /^(0{1,2}[:-]){5}0{1,2}$/.test(mac);
}
function isVirtualMac (mac) {
  return isMac(mac) && virtualMacPrefix.has(formatMac(mac).slice(0, 8));
}
function formatMac (mac) {
  return String(mac).trim().toLowerCase().replace(/-/g, ':');
}
function getMac (family = 'IPv4') {
  const nif = networkInterfaces();
  for (const list of Object.values(nif)) {
    const item = list.find(d => !d.internal && !isZeroMac(d.mac) && (!d.family || d.family === family) && !isVirtualMac(d.mac));
    if (item) return item.mac;
  }
  return '';
}
module.exports = async function () {
  console.log('您的IP为:      ' + chalk.blue(utils.getIPAdress()));
  console.log('您的MAC地址为: ' + chalk.blue(getMac()));
}