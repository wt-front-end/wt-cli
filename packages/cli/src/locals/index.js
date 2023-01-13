/*
 * @describe: 国际化
 * @Author: superDragon
 * @Date: 2019-08-29 17:48:59
 * @LastEditors: xkloveme
 * @LastEditTime: 2023-01-13 10:00:48
 */
module.exports = function () {
  let lang = process.env.LANG || 'zh_CN';

  if (/zh/g.test(lang)) {
    return require('./zh_CN');
  }

  return require('./zh_CN');
};