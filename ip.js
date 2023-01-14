
const exec = require('child_process');
const process = require('process');
const networkInterfaces = require('os').networkInterfaces;
function execPromisfy(cmd, options = {}, trimEmptyLine = false) {
  return new Promise(resolve => {
    exec(cmd, { windowsHide: true, ...options }, (error, stdout, stderr) => {
      if (error) console.error('exec error:', `cmd: ${cmd}\n`, error.message || error);
      stdout = stdout.replace(/\r+\n/g, '\n').trim();
      if (trimEmptyLine) stdout = stdout.replace(/\n{2,}/g, '\n');
      resolve({ error, stdout, stderr });
    });
  });
}

async function getNetworkIFacesInfoByWmic() {
  const config = {};
  let stdout = '';

  if (process.platform === 'win32') {
    const keyMap = { MACAddress: 'mac', Description: 'desc' };
    const cmd = `wmic nic get MACAddress,Description /format:list`;
    const info = await execPromisfy(cmd);
    const lines = info.stdout.split('\n').filter(d => d.includes('='));

    stdout = info.stdout;
    if (lines[0]) {
      let item = {};

      for (const line of lines) {
        let [key, value] = line.split('=').map(d => d.trim());
        key = keyMap[key] || key.toLowerCase();

        if (item[key]) {
          if (item.mac) config[item.mac] = item;
          item = {};
        }
        item[key] = value;
      }
      if (item.mac) config[item.mac] = item;
    }

    if (stdout) console.error(`[getNetworkIFacesInfoByWmic]`, stdout, config);
  }

  return { stdout, config };
}


const virtualMacPrefix = new Set([
  '00:05:69', // vmware1
  '00:0c:29', // vmware2
  '00:50:56', // vmware3
  '00:1c:14', // vmware
  '00:1c:42', // parallels1
  '02:00:4c', // Microsoft Loopback Adapter (微软回环网卡)
  '00:03:ff', // microsoft virtual pc
  '00:0f:4b', // virtual iron 4
  '00:16:3e', // red hat xen , oracle vm , xen source, novell xen
  '08:00:27', // virtualbox
]);
function isMac(mac) {
  return /^([\da-f]{1,2}[:-]){5}([\da-f]{1,2})$/i.test(mac);
}
function isZeroMac(mac) {
  return /^(0{1,2}[:-]){5}0{1,2}$/.test(mac);
}
function isVirtualMac(mac) {
  return isMac(mac) && virtualMacPrefix.has(formatMac(mac).slice(0, 8));
}
function formatMac(mac) {
  return String(mac).trim().toLowerCase().replace(/-/g, ':');
}
function getMac(family = 'IPv4') {
  const nif = networkInterfaces();
  for (const list of Object.values(nif)) {
      const item = list.find(d => !d.internal && !isZeroMac(d.mac) && (!d.family ||d.family === family) && !isVirtualMac(d.mac));
      if (item) return item.mac;
 }
 return '';
}
console.log(getNetworkIFacesInfoByWmic())
console.log(getMac())
