<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-16 10:41:52
 * @LastEditors: xkloveme
 * @FileDesc:首页
 * @FilePath: /watone-cli/app/src/views/index.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="main-index logged-out" @click="gotoHome">
    <div id="app-background">
      <div id="app-background-image" class="background-image" />
    </div>
    <div id="app-info" class="info"><span class="time">{{ time }}</span><span class="weather"><i
        :class="iconClass"></i><span class="weather-temperature-value">{{ temperature }}</span></span></div>
    <div id="sign-in-button-wrapper"><button id="sign-in-button" class="user-status-button clear-button"
        type="button"><i class="i-uil-corner-up-right-alt"></i></button></div>
  </div>
</template>

<script setup>
import tools from "../utils/common"
const router = useRouter();
async function gotoHome () {
  const response = await fetch(`/api/config`);
  const status = await response.json();
  if (status.needPwd) {
    router.push({ name: "Login" })
  } else {
    router.push({ name: "Home" })
  }
}
let iconClass = ref('')
let temperature =ref('')
async function init(){
   let response = await fetch('http://en.wttr.in?format="%C,%t"');
   const data = await response.json();
   iconClass.value = tools.iconList[data.split(',')?.[0]] || 'i-uil-sun'
   temperature.value = data.split(',')?.[1]
}
init()

function getTime () {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  // 为了确保两位数，使用padStart()方法将数字转换为字符串，并在左边填充0
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  return hours + ':' + minutes;
}
let time = ref('')
let timer = setInterval(() => {
  time.value = getTime()
})
onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null;
})
</script>

<style scoped lang="scss">

</style>
