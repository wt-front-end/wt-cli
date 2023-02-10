#!/usr/bin/env node
/*
 * @Author: xkloveme
 * @Date: 2023-01-11 09:21:51
 * @LastEditTime: 2023-02-10 17:03:42
 * @LastEditors: xkloveme
 * @Description: open AI
 * @FilePath: /watone-cli/bin/ai-cli.js
 * @Copyright © xkloveme
 */
const program = require('commander');
const utils = require('../packages/cli/src/lib/utils');
const log = require('../packages/cli/src/lib/utils/log');
const locals = require('../packages/cli/src/locals/index')();
const inquirer = require("inquirer");
const { Configuration, OpenAIApi } = require("openai");
let buffer = Buffer.from('c2stNnhuOHlQTmhzMXJhOENxOHdTR2RUM0JsYmtGSmpsMEhEM3lnWExBcVFReDZwWlBa', 'base64')
const configuration = new Configuration({
  apiKey: buffer.toString(),
});
const openai = new OpenAIApi(configuration);

async function ask(previousAnswer) {
  let keyword = previousAnswer;
  inquirer
    .prompt([
      {
        type: "input",
        name: "keyword",
        message: '我:'
      }
    ])
    .then(async answers => {
      keyword = answers.keyword;
      if (keyword) {
        try {
          const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: keyword,
            max_tokens: 500,
            temperature: 0.6,
          });
          let text = completion.data.choices[0].text;
          console.log(text);
          ask(text);
        } catch (error) {
          // Consider implementing your own error handling logic here
          console.error(error);
        }
      } else {
        console.log("Goodbye!");
      }
    });
}

program
  .command('ai [keyword]')
  .alias('chatgpt')
  .description(locals.AI_DESC)
  .action(async (keyword) => {
    // 检测当前网络环境
    let isNetWorkOk = await utils.isNetworkConnect();
    // 离线提示
    if (!isNetWorkOk) {
      log.error(locals.NETWORK_DISCONNECT);
      log.error(locals.NETWORK_DISCONNECT_SUG);
      return;
    }
    if (keyword) {
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: keyword,
          max_tokens: 500,
          temperature: 0.6,
        });
        let text = completion.data.choices[0].text;
        ask(text);
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
      }
    } else {
      log.error('您并没有输入内容，示例: `ai [您的问题]`');
    }
  })
  .parse(process.argv);
