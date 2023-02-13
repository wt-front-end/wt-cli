const exec = require('mz/child_process').exec;
const { promisify } = require('util');

const promiseExec = promisify(exec);

// cmd 输出
exports.cmd = function(req, res) {
  const { pid } = req.query;
  promiseExec(`lsof -a -p ${pid} -d cwd -Fn | tail -1 | sed 's/.//'`).then(newCwd => {
      const cwd = typeof newCwd === 'string' ? newCwd.trim() : newCwd.stdout.trim();
      res.success(cwd);
  });
}