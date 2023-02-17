const os = require('os');
const { Client: SSHClient } = require('ssh2')
const userhome = require('user-home');
var shelljs = require('shelljs')
let shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
if (shelljs.which('zsh')) {
  shell = 'zsh';
}
// let ptyContainers = {};
// let pty ={}
function createTerminal (socket, sshClient, option) {
  console.log("🐛 ~ file: terminal.js:12 ~ createTerminal ~ socket, sshClient,option", socket, sshClient, option);
  sshClient.shell({ term: 'xterm-color' }, (err, stream) => {
    if (err) return socket.emit('output', err.toString())
    // 终端输出
    stream
      .on('data', (data) => {
        socket.emit(option.name + '-output', data.toString())
      })
      .on('close', () => {
        console.info('关闭终端')
        sshClient.end()
      })
    // web端输入
    socket.on(option.name + '-input', key => {
      console.log("🐛 ~ file: terminal.js:25 ~ sshClient.shell ~ key", key);
      if (sshClient._sock.writable === false) return consola.info('终端连接已关闭')
      stream.write(key)
    })
    socket.emit('connect_terminal') // 已连接终端，web端可以执行指令了

    // 监听按键重置终端大小
    socket.on(option.name + '-resize', ({ rows, cols }) => {
      consola.info('更改tty终端行&列: ', { rows, cols })
      stream.setWindow(rows, cols)
    })
  })
}
module.exports = socket => {
  let sshClient = new SSHClient()
  socket.on('create', option => {
    sshClient
      .on('ready', () => {
        createTerminal(socket, sshClient, option)
      })
      .on('error', (err) => {
        console.log('连接终端失败:', err.level)
        socket.emit('connect_fail', err.message)
      })
    // .connect(authInfo)
    // let ptyProcess = pty.spawn(shell, ['--login'], {
    //   name: 'xterm-color',
    //   cols: option.cols || 100,
    //   rows: option.rows || 40,
    //   cwd: option.cwd || userhome,
    //   env: process.env
    // });
    // ptyProcess.onData(data => socket.emit(option.name + '-output', data));
    // socket.on(option.name + '-input', data => ptyProcess.write(data));
    // socket.on(option.name + '-resize', size => {
    //   ptyProcess.resize(size[0], size[1]);
    // });
    // socket.on(option.name + '-exit', size => {
    //   ptyProcess.destroy();
    // });
    // socket.emit(option.name + '-pid', ptyProcess.pid);
    // ptyContainers[option.name] = ptyProcess;
  });
  socket.on('remove', name => {
    socket.removeAllListeners(name + '-input');
    socket.removeAllListeners(name + '-resize');
    socket.removeAllListeners(name + '-exit');
    sshClient.end()
    sshClient.destroy()
    sshClient = null
    // if (name && ptyContainers[name] && ptyContainers[name].pid) {
    //   ptyContainers[name].destroy();
    //   delete ptyContainers[name];
    // }
  });
};
