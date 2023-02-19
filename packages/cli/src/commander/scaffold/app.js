const express = require('express');
const path = require('path');    // 路径获取
const chalk = require('chalk');
const http = require('http');
var bodyParser = require('body-parser');
const utils = require('../../lib/utils');
const createSocketServer = require('../../../socket');
const indexRouter = require('../../../routes');
module.exports = function (Application) {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../../../../client')));
  let port = 9159;
  let server = http.createServer(app);
  server.listen(port, () => {
    let myIP = utils.getIPAdress();
    let myUrl = `http://${myIP}:${port}`
    Application && (myUrl = myUrl + `/#/${Application}`)
    utils.openURL(myUrl);
    utils.generateQrcode(myUrl);
    console.group('项目看板:');
    console.log(chalk.green(Application ? `http://localhost:${port}/#/${Application}` : `http://localhost:${port}`));
    console.log(chalk.green(Application ? `http://127.0.0.1:${port}/#/${Application}` : `http://127.0.0.1:${port}`));
    console.log(chalk.green(`${myUrl}\n`));
    console.groupEnd();
    console.log('Hit CTRL-C to stop the server');
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const newPort = findAvailablePort(port);
      server.listen(newPort);
    }
  });
  app.use(function (req, res, next) {
    res.success = function (data) {
      res.json({
        code: 200,
        msg: '操作成功',
        data: data
      });
    };
    res.fail = function (message) {
      res.json({
        code: -1,
        msg: message
      });
    };
    next();
  });
  createSocketServer(server);
  app.use('/api', indexRouter);

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