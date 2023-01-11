/*
 * @Author: xkloveme
 * @Date: 2023-01-10 17:10:20
 * @LastEditTime: 2023-01-11 13:51:12
 * @LastEditors: xkloveme
 * @Description: 打包快捷指令
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/build.js
 * @Copyright © xkloveme
 */
const execSync = require('mz/child_process').execSync;
const utils = require('../../lib/utils');
module.exports = async function ({ cmd }) {
  if (utils.cmdExists('pnpm')) {
    execSync(`pnpm ${cmd || 'build'}`)
  } else if (utils.cmdExists('yarn')) {
    execSync(`yarn ${cmd || 'build'}`, { encoding: 'utf8' })
  } else {
    execSync(`npm run ${cmd || 'build'}`, { encoding: 'utf8' })
  }
}