const express = require('express');
const path = require('path');    // 路径获取
const request = require('request');
const chalk = require('chalk');
const utils = require('../../lib/utils');
const app = express();
app.use(express.static(path.join(process.cwd(), 'www/project-view/dist')));
module.exports = async function () {
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'www/project-view/dist', 'index.html'));
  });

  // 接口
  app.get('/api/getJson', function (req, res) {
    if (!req.query?.url) {
      return res.status(204).send('url不能为空');
    }
    let optinos = {
      url: req.query?.url + '?time=' + Math.random().toString(36).substr(3),
      timeout: 500
    }
    request(optinos, function (error, response, data) {
      if (!error && response.statusCode == 200) {
        res.status(200).json(JSON.parse(data));
      } else {
        res.status(500).json(error);
      }
    });
  });
  let port = 9159
  const server = app.listen(port, () => {
    let myIP = utils.getIPAdress()
    utils.openURL(`http://${myIP}:${port}`)
    utils.generateQrcode(`http://${myIP}:${port}`)
    console.group('项目看板:');
    console.log(chalk.green(`http://localhost:${port}`));
    console.log(chalk.green(`http://127.0.0.1:${port}`));
    console.log(chalk.green(`http://${myIP}:${port}\n`));
    console.groupEnd();
    console.log('Hit CTRL-C to stop the server');
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const newPort = findAvailablePort(port);
      app.listen(newPort);
    }
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