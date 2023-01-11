/*
 * @Author: xkloveme
 * @Date: 2023-01-10 17:10:20
 * @LastEditTime: 2023-01-11 14:48:49
 * @LastEditors: xkloveme
 * @Description: 快捷指令
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/shortcut.js
 * @Copyright © xkloveme
 */
const execSync = require('child_process').execSync;
const utils = require('../../lib/utils');
module.exports = async function ({ cmd }) {
  let command;
  try {
    if (utils.cmdExists('pnpm')) {
      command = `pnpm ${cmd}`;
    } else if (utils.cmdExists('yarn')) {
      command = `yarn ${cmd}`;
    } else if (utils.cmdExists('npm')) {
      command = `npm run ${cmd}`;
    } else {
      throw new Error("pnpm, yarn, npm 命令其中之一都没有被发现.")
    }
    console.log(execSync(command, { encoding: 'utf8' }));
  } catch (error) {
    console.error(error);
  }
}