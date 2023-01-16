/*
 * @Author: xkloveme
 * @Date: 2023-01-10 15:25:07
 * @LastEditTime: 2023-01-16 18:04:16
 * @LastEditors: xkloveme
 * @Description: npm 换源
 * @FilePath: /watone-cli/packages/cli/src/commander/scaffold/npm.js
 * @Copyright © xkloveme
 */
const shell = require('shelljs');
const execSync = require('mz/child_process').execSync;
const utils = require('../../lib/utils')
const log = require('../../lib/utils/log');
const chalk = require('chalk');
const inquirer = require('inquirer');
const locals = require('../../locals')();

let questions = [
  {
    type: "list",
    name: "registry",
    message: locals.NPM_GUIDE,
    default: 'http://r.cnpmjs.org/',
    choices: [
      { name: 'npm ---- https://registry.npmjs.org/', value: 'https://registry.npmjs.org/' },
      { name: 'cnpm ---- http://r.cnpmjs.org/', value: 'http://r.cnpmjs.org/' },
      { name: 'taobao ---- http://npmmirror.com/', value: 'http://npmmirror.com/' },
      { name: 'nj ---- https://registry.nodejitsu.com/', value: 'https://registry.nodejitsu.com/' },
      { name: 'npmMirror ---- https://skimdb.npmjs.com/registry/', value: 'https://skimdb.npmjs.com/registry/' },
      { name: 'yarn ---- https://skimdb.npmjs.com/registry/', value: 'https://skimdb.npmjs.com/registry/' },
      { name: 'xkloveme ---- https://registry.npmmirror.com/', value: 'https://registry.npmmirror.com/' },
    ]
  },
]
module.exports = async function (cmd) {
  let registryList = [{
    type: "list",
    name: "type", message: locals.NPM_MESSAGE, choices: []
  }]
  let config_url = {
    npm: execSync('npm get registry', { encoding: 'utf8' }).replace(/[\r\n]/g, ""),
    yarn: execSync('yarn config get registry', { encoding: 'utf8' }).replace(/[\r\n]/g, ""),
    pnpm: execSync('pnpm get registry', { encoding: 'utf8' }).replace(/[\r\n]/g, ""),
  }
  if (cmd === 'ls' || cmd === 'list') {
    console.log(chalk.green(`npm   --当前使用--  ${config_url['npm']}`))
    console.log(chalk.green(`yarn  --当前使用--  ${config_url['yarn']}`))
    console.log(chalk.green(`pnpm  --当前使用--  ${config_url['pnpm']}`))
    return
  }
  let set_str = {
    npm: `npm config set registry `,
    yarn: `yarn config set registry `,
    pnpm: `pnpm config set registry `,
  }
  utils.cmdExists('npm') && registryList[0].choices.push({ name: `npm   --当前使用--  ${config_url['npm']}`, value: 'npm' })
  utils.cmdExists('yarn') && registryList[0].choices.push({ name: `yarn  --当前使用--  ${config_url['yarn']}`, value: 'yarn' })
  utils.cmdExists('pnpm') && registryList[0].choices.push({ name: `pnpm  --当前使用--  ${config_url['pnpm']}`, value: 'pnpm' })
  inquirer.prompt(registryList).then(async (re) => {
    let type = re.type
    questions[0].default = config_url[type]
    inquirer.prompt(questions).then(async (res) => {
      shell.exec(set_str[type] + res.registry)
      log.info(locals.NPM_SUCCESS + res.registry);
    })
  })

}