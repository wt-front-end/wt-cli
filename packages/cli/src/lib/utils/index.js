/*
 * @describe: utils tools
 * @Author: superDragon
 * @Date: 2019-08-29 17:51:58
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-14 23:19:37
 */
const dns = require('dns');
const os = require('os');
const request = require('request');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ip = require('ip');
const qrcode = require('qrcode-terminal');
const open = require('open');
const child_process = require('mz/child_process');
/**
 * 检测当前网络环境
 *
 * @return {Boolean} 是否联网
 */
exports.isNetworkConnect = function () {
  return new Promise((reslove) => {
    dns.lookup('so.com', (err) => reslove(!(err && err.code === 'ENOTFOUND')));
  });
}
/**
 * 检测当前网络环境
 *
 * @return {Boolean} 是否是在公司网络联网
 */
exports.isNetworkConnectWatone = function () {
  let optinos = {
    url:`http://30.207.88.65:8090`,
    timeout:500
}
  return new Promise((reslove) => {
    request(optinos, function (error, response, body) {
      if (error) {
        reslove(false)
      } else {
        reslove(true)
      }
    });
  });
}

/**
 * 获取项目根目录
 *
 * @return {string} 目录 Path
 */
exports.getHome = function () {
  let dir = process.env[
    os.platform() === 'win32'
      ? 'APPDATA'
      : 'HOME'
  ] + path.sep + '.wt-cli-project'

  // 如果这个目录不存在，则创建这个目录
  !fs.existsSync(dir) && fs.mkdirSync(dir);

  return dir;
};
/**
 * 打开URL
 *
 * @return {string} 目录 url
 */
exports.openURL = function (url) {
  open(url)
  console.log(chalk.green('链接已经打开,请在浏览器查看:') + '\n' + chalk.yellow(url))
};

/**
 * 获取IP
 *
 * @return {string} IP
 */
exports.getIPAdress = function () {
  return ip.address();
};

/**
 * 检测命令是否存在
 *
 * @return {boolean} 是否存在
 */

exports.cmdExists = function (cmd) {
  try {
    if (os.platform() === 'win32') {
      child_process.execSync(`where ${cmd} > nul 2> nul`)
    } else {
      child_process.execSync(`which ${cmd}`)
    }
    return true
  } catch {
    return false
  }
}

/**
 * 生成二维码
 *
 * @return {string} 存在
 */

exports.generateQrcode = function (keyword) {
  qrcode.generate(keyword, { small: true }, function (qrcode) {
    console.log(chalk.blue('二维码已生成:'));
    console.log(qrcode);
  });
}