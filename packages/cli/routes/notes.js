const fs = require('fs');
const path = require('path');
const os = require('os');
/**
 * 获取项目根目录
 *
 * @return {string} 目录树
 */

function generateDirectoryTree (dir) {
  const files = fs.readdirSync(dir);
  const tree = {};

  files.forEach(file => {
    // 忽略隐藏文件和文件夹
    if (file.startsWith('.')) {
      return;
    }

    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
      }
      tree[file] = generateDirectoryTree(filePath);
    } else {
      tree[file] = filePath;
    }
  });

  return tree;
}

exports.getTree = function (req, res) {
  let dir = process.env[
    os.platform() === 'win32'
      ? 'APPDATA'
      : 'HOME'
  ] + path.sep + '.wt-cli-project' + path.sep + 'notes'

  // 如果这个目录不存在，则创建这个目录
  !fs.existsSync(dir) && fs.mkdirSync(dir);

  const tree = generateDirectoryTree(dir);
  console.log(JSON.stringify(tree, null, 2));
  return res.status(200).send(tree);
};