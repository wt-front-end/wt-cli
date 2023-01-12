/*
 * @describe: 检测是否需要更新版本
 * @Author: superDragon
 * @Date: 2019-08-30 14:18:24
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-12 14:12:41
 */

'use strict';

const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');
const semver = require('semver');
const log = require('./log');
const locals = require('../../locals')();
let curVersion = process.env.VERSION;
// 获取项目根目录
const getHome = require('./index').getHome;

const TIME_RANGE = 24 * 60 * 60 * 1000;
const NPM_REGISTRY = 'https://registry.npmjs.org/@watone/wt-cli';


function requestPackageInfo () {
  axios.get(NPM_REGISTRY)
    .then(res => {
      // npm 上的版本号
      let lastVersion = res.data['dist-tags'].latest;
      if (semver.gt(lastVersion, curVersion)) {
        log.info(log.chalk.bold.yellow(locals.UPDATE_TIPS));
      }
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports = async function () {
  // 检测更新路径
  let updateCheckerInfoPath = path.resolve(getHome(), '.updateChecker.txt');
  // true如果路径存在false则返回，否则返回。
  if (fs.existsSync(updateCheckerInfoPath)) {
    // 读取文件
    let updateCheckerInfo = fs.readFileSync(updateCheckerInfoPath, 'utf-8');
    if (Date.now() - (+updateCheckerInfo) >= TIME_RANGE) {
      await requestPackageInfo();
      fs.writeFileSync(updateCheckerInfoPath, Date.now() + '');
    }
  }
  else {
    let dirname = path.dirname(updateCheckerInfoPath);
    fs.existsSync(dirname) && fs.mkdirpSync(dirname);
    fs.writeFileSync(updateCheckerInfoPath, Date.now() + '');

    await requestPackageInfo();
  }

};