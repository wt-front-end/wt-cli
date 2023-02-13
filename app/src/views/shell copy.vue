<!--
 * @Date: 2023-02-12
 * @LastEditTime: 2023-02-13 10:41:25
 * @LastEditors: xkloveme
 * @FileDesc:终端
 * @FilePath: /watone-cli/app/src/views/shell.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="terminal">
    <div v-html="html"></div>
    <Terminal welcomeMessage="Welcome to WatoneCLI" :prompt="prompt" class="dark-demo-terminal"
      aria-label="WatoneCLI Terminal Service">
    </Terminal>
  </div>
</template>

<script setup>
import io from "socket.io-client";
import TerminalService from "primevue/terminalservice";

let socket = io(window.location.origin + "/terminal", { reconnection: true });
let terminalname = 'wt-cli-' + Math.random().toString(36).substr(3)
let prompt = ref('~ #')
let html = ref('<p>nin</p>')
function commandHandler (text) {
  let response;
  let argsIndex = text.indexOf(' ');
  let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;
  html.value = ''
  switch (command) {
    case "date":
      response = 'Today is ' + new Date().toDateString();
      TerminalService.emit('response', response);
      break;

    case "greet":
      response = 'Hola ' + text.substring(argsIndex + 1);
      TerminalService.emit('response', response);
      break;

    case "random":
      response = Math.floor(Math.random() * 100);
      TerminalService.emit('response', response);
      break;

    default:
      socket.emit(terminalname + "-input", text + "\r\n");
  }
}
onMounted(() => {
  socket.emit("create", { name: terminalname })
  TerminalService.on('command', commandHandler);
  socket.on("connect", (data) => {
    console.log(socket.id, '监听客户端连接成功-connect');
  })
  nextTick(() => {
    socket.on(terminalname + "-output", arrayBuffer => {
      if (arrayBuffer.indexOf(':') > 0) {
        prompt.value = arrayBuffer
      } else {
        html.value += arrayBuffer
      }
    })
  })
});
onBeforeUnmount(() => {
  TerminalService.off('command', commandHandler);
})
</script>

<style scoped lang="scss">
p {
  margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
  background-color: #212121;
  color: #08ec45;
  width: 100vw;
  height: 100vh;
  border: 0 solid #000;

  .p-terminal-command {
    color: #80CBC4;
  }

  .p-terminal-prompt {
    color: #FFD54F;
    margin: 0 5px;
  }

  .p-terminal-response {
    color: #9FA8DA;
  }
}
</style>
