
/*
 * @describe: app配置获取
 * @Author: superDragon
 * @Date: 2019-08-30 14:18:24
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-02-05 15:56:07
 */

'use strict';
const path = require('path');
const fs = require('fs-extra');
// 获取项目根目录
const getHome = require('./index').getHome;
module.exports = async function () {
  // 检测更新路径
  let updateAPPconfigPath = path.resolve(getHome(), 'config.json');
  // true如果路径存在false则返回，否则返回。
  if (fs.existsSync(updateAPPconfigPath)) {
    // 读取文件
    let updateAPPconfigInfo = fs.readFileSync(updateAPPconfigPath, 'utf-8');
    return JSON.parse(updateAPPconfigInfo)
  } else {
    let dirname = path.dirname(updateAPPconfigPath);
    const appConfig = {
      "pwd": 7053,
      "address": "hangzhou",
      "update":Date.now()
    };
    fs.existsSync(dirname) && fs.mkdirpSync(dirname);
    fs.writeFileSync(updateAPPconfigPath, JSON.stringify(appConfig));
    return appConfig
  }

};