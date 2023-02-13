<!--
 * @Date: 2023-02-12
 * @LastEditTime: 2023-02-13 11:11:44
 * @LastEditors: xkloveme
 * @FileDesc:终端
 * @FilePath: /watone-cli/app/src/views/shell.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="terminal" id="terminal">
  </div>
</template>

<script setup>
import io from "socket.io-client";
import Terminal from "../utils/Xterm";
let socket = io(window.location.origin + "/terminal", { reconnection: true });
let terminalname = 'wt-cli-' + Math.random().toString(36).substr(3)
function init (cwd = null) {
  let term = new Terminal({
    theme: null,
    fontWeight: 400,
    fontSize: 16,
    fontFamily: 'FuraMono Nerd Font,Cascadia Code,Courier New,monospace',
    rows: 40,
    cols: 100
  });
  let container = document.getElementById('terminal');
  term.open(container);
  term.fit();
  term.focus();
  term.onResize("resize", size => {
    socket.emit(terminalname + "-resize", [size.cols, size.rows]);
  });
  term.onData((data) => {
    socket.emit(terminalname + "-input", data);
  })

  socket.on(terminalname + "-output", arrayBuffer => {
    term.write(arrayBuffer);
  });

  window.addEventListener("resize", () => {
    term.fit();
  });
  socket.emit("create", { name: terminalname, cwd });


}


onMounted(() => {
  init()
  socket.on("connect", () => {
    console.log(socket.id, '监听客户端连接成功-connect');
  })
});
onBeforeUnmount(() => {
  term.destroy();
  socket.emit(terminalname + "-exit");
  socket.close();
})
</script>

<style scoped lang="scss">
.terminal {
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow-y: auto;
}
</style>
