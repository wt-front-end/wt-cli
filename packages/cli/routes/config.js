const request = require('request');
const AppConfig = require('../src/lib/utils/app');

exports.getJson = function (req, res) {
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
}

exports.pwdCheck = function (req, res) {
  if (!req.query?.pwd) {
    return res.status(204);
  }
  AppConfig().then(async (json) => {
    return res.status(200).send(req.query?.pwd == json.pwd);
  })
}

exports.config = function (req, res) {
  AppConfig().then(async (json) => {
    return res.status(200).send(json);
  })
}