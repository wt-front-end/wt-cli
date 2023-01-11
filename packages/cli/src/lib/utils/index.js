/*
 * @describe: utils tools
 * @Author: superDragon
 * @Date: 2019-08-29 17:51:58
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-11 13:26:00
 */
const dns = require('dns');
const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const interfaces = require('os').networkInterfaces();
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
 * 获取项目根目录
 *
 * @return {string} 目录 Path
 */
exports.getHome = function () {
  let dir = process.env[
    os.platform() === 'win32'
      ? 'APPDATA'
      : 'HOME'
  ] + path.sep + '.ht-cli-project'

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
  // 判断平台
  switch (process.platform) {
    // Mac 使用open
    case "darwin":
      child_process.spawn('open', [url]);
      break;
    // Windows使用start
    case "win32":
      child_process.spawn('start', [url]);
      break;
    // Linux等使用xdg-open
    default:
      child_process.spawn('xdg-open', [url]);
  }
  console.log(chalk.green('链接已经打开,请在浏览器查看:') + '\n' + chalk.yellow(url))
};

/**
 * 获取IP
 *
 * @return {string} IP
 */
exports.getIPAdress = function (url) {
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
};

/**
 * 获取IP
 *
 * @return {boolean} 是否存在
 */

exports.cmdExists = function (cmd) {
  try {
    child_process.execSync(
      os.platform() === 'win32'
        ? `cmd /c "(help ${cmd} > nul || exit 0) && where ${cmd} > nul 2> nul"`
        : `command -v ${cmd}`,
    )
    return true
  }
  catch {
    return false
  }
}