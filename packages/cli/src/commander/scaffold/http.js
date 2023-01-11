/*
 * @Author: xkloveme
 * @Date: 2023-01-10 17:10:20
 * @LastEditTime: 2023-01-11 20:16:33
 * @LastEditors: xkloveme
 * @Description: http静态服务
 * @FilePath: \wt-cli\packages\cli\src\commander\scaffold\http.js
 * @Copyright © xkloveme
 */
const http = require('http');
const fs = require('mz/fs');
const mime = require('mime');
const chalk = require('chalk');
const path = require('path');
const url = require('url');
const ejs = require('ejs');
const utils = require('../../lib/utils');
let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP 静态文件服务</title>
    <link rel="shortcut icon" href="#"/>
</head>
<style>
body{
  background-color: #e8e8e8;
}
h1{
  text-align: center;
}
ul {
  width:60%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

li {
  background: rgba(217, 217, 217, 0.58);
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  font-weight: bolder;
  display:flex;
  align-items: center;
  justify-content: space-between;
}

li:hover{
  border: 1px solid black;
  transform: scale(1.02);
}
li:active {
  transform: scale(0.97) rotateZ(1.03deg);
}

.text-desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px;
}
.file-size{
  white-space: nowrap;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #00b4ff;
}

.folder {
  transform: scale(var(--ggs,1))
 }

 .folder,
 .folder::after {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: 22px;
  height: 16px;
  border: 2px solid;
  border-radius: 3px
 }

 .folder::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 4px;
  border-bottom: 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: -5px
 }

.file-document {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  transform: scale(var(--ggs,1));
  width: 14px;
  height: 16px;
  border: 2px solid transparent;
  border-right: 0;
  border-top: 0;
  box-shadow: 0 0 0 2px;
  border-radius: 1px;
  border-top-right-radius: 4px;
  overflow: hidden
 }

 .file-document::after,
 .file-document::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute
 }

 .file-document::before {
  background: currentColor;
  box-shadow:
  0 4px 0,
  -6px -4px 0;
  left: 0;
  width: 10px;
  height: 2px;
  top: 8px
 }

 .file-document::after {
  width: 6px;
  height: 6px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  right: -1px;
  top: -1px
 }
</style>
<body>
    <div>
    <h1>HTTP 静态文件服务</h1>
        <ul>
            <% data.forEach(function(dir){ %>
              <a href="<%= dir.href %>"><li>
              <div class="text-desc" title="<%=dir.content%>">
              <i class="<%=dir.className%>"></i>
              <%= dir.content %></div>
              <div class="file-size"><%= dir.size %></div></li></a>
            <% }); %>
          </ul>
    </div>
</body>
</html>`;
let myIP = utils.getIPAdress()
const baseConfig = {
  port: 5282,
  host: '0.0.0.0',
  open: true,
  dir: process.cwd()
}
// 转化文件大小,单位：byte
function formatFileSize (size) {
  let units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return size.toFixed(2) + ' ' + units[i];
}
class Server {
  constructor({ port, host, dir , open}) {
    this.port = port || baseConfig.port;
    this.host = host || baseConfig.host;
    this.dir = dir || baseConfig.dir;
    this.open = open || baseConfig.open;
    this.template = template;
  }
  start () {
    let server = http.createServer(this.sendRequest.bind(this));
    const onError = (e) => {
      if (e.code === 'EADDRINUSE') {
        console.log(`Port ${this.port} is in use, trying another one...`);
        server.listen(++this.port);
      } else {
        console.log('其他错误：', e);
      }
    };
    server.on('error', onError)
    server.listen(this.port, this.host, () => {
      server.removeListener('error', onError);
      this.open && utils.openURL(`http://${myIP}:${this.port}`)
      console.log('\n服务路径: ' + chalk.yellow(`${this.dir}\n`));
      console.group('服务链接:');
      console.log(chalk.green(`http://localhost:${this.port}`));
      console.log(chalk.green(`http://127.0.0.1:${this.port}`));
      console.log(chalk.green(`http://${myIP}:${this.port}\n`));
      console.groupEnd();
      console.log('Hit CTRL-C to stop the server');
    })

  }
  async sendRequest (req, res) {
    try {
      let { pathname } = url.parse(req.url);
      pathname = decodeURIComponent(pathname); // pathname有可能是中文，把base64解析成中文
      let currentPath = path.join(this.dir, pathname);
      let stats = await fs.stat(currentPath);
      if (stats.isDirectory()) {
        let dirs = await fs.readdir(currentPath);
        let statsPromises = dirs.map((dir) => {
          return fs.stat(path.join(currentPath, dir));
        });
        let statItem = await Promise.all(statsPromises);
        let datas = dirs.map((dir, index) => {
          let isfile = statItem[index].isFile();
          let size = isfile ? formatFileSize(statItem[index].size) : '';
          // let dirEncode = decodeURIComponent(dir);
          // let contentType = mime.getType(path.join(currentPath, dir));
          return {
            href: path.join(pathname, dir),
            content: dir,
            className: isfile ? 'file-document' : 'folder',
            size
          }
        })
        let str = ejs.render(this.template, { data: datas });
        res.setHeader('Content-type', 'text/html;charset=utf-8');
        res.end(str);
      } else {
        this.responseData(req, res, currentPath);
      }
    } catch (e) {
      console.log(e);
      this.sendError(req, res);
    }
  }
  responseData (req, res, currentPath) {
    res.setHeader('Content-type', mime.getType(currentPath) + '; charset=utf8');
    fs.createReadStream(currentPath).pipe(res);
  }
  sendError (req, res) {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

module.exports = Server;
