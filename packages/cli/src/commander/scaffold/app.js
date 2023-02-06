const express = require('express');
const path = require('path');    // 路径获取
const request = require('request');
const chalk = require('chalk');
const utils = require('../../lib/utils');
const AppConfig = require('../../lib/utils/app');
module.exports = function () {
  const app = express();
  app.use(express.static(path.join(__dirname, '../../../../../app/dist')));
  let port = 9159;
  const server = app.listen(port, () => {
    let myIP = utils.getIPAdress();
    utils.openURL(`http://${myIP}:${port}`);
    utils.generateQrcode(`http://${myIP}:${port}`);
    console.group('项目看板:');
    console.log(chalk.green(`http://localhost:${port}`));
    console.log(chalk.green(`http://127.0.0.1:${port}`));
    console.log(chalk.green(`http://${myIP}:${port}\n`));
    console.groupEnd();
    console.log('Hit CTRL-C to stop the server');
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const newPort = findAvailablePort(port);
      server.listen(newPort);
    }
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'app/dist', 'index.html'));
  });

  // 接口
  app.get('/api/getJson', function (req, res) {
    if (!req.query?.url) {
      return res.status(204).send('url不能为空');
    }
    let options = {
      url: req.query?.url,
      timeout: 500
    }
    request(options, function (error, response, data) {
      if (!error && response.statusCode == 200) {
        res.status(200).json(JSON.parse(data));
      } else {
        res.status(500).json(error);
      }
    });
  });
  // 获取app 配置密码校验
  app.get('/api/pwdCheck', function (req, res) {
    if (!req.query?.pwd) {
      return res.status(204);
    }
    AppConfig().then(async (json) => {
      console.log(req.query?.pwd,json.pwd)
      return res.status(200).send(req.query?.pwd==json.pwd);
    })
  });

  function findAvailablePort (startPort) {
    let currentPort = startPort;
    while (currentPort < 65535) {
      currentPort++;
      try {
        server.close();
        return currentPort;
      } catch (err) {
        if (err.code !== 'EADDRINUSE') {
          throw err;
        }
      }
    }
    throw new Error(`No available port found starting at ${startPort}`);
  }
}