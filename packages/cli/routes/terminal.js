const exec = require('mz/child_process').exec;
const { promisify } = require('util');
const request = require('request');
const promiseExec = promisify(exec);

// cmd 输出
exports.cmd = function(req, res) {
  const { pid } = req.query;
  promiseExec(`lsof -a -p ${pid} -d cwd -Fn | tail -1 | sed 's/.//'`).then(newCwd => {
      const cwd = typeof newCwd === 'string' ? newCwd.trim() : newCwd.stdout.trim();
      res.success(cwd);
  });
}

// 翻译 输出
exports.translate = function(req, res) {
  const { keyword } = req.query;
  let url = `http://fanyi.youdao.com/translate?doctype=json&type=AUTO&i=${encodeURI(keyword)}`
  request(url, function (error, response, data) {
    if (data.errorCode == 0) {
      res.success(data.translateResult[0][0]['tgt']);
    }
  }).json();
}