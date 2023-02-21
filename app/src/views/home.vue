<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-21 18:09:48
 * @LastEditors: xkloveme
 * @FileDesc:主页
 * @FilePath: /watone-cli/app/src/views/home.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="main-index logged-in">
    <div id="app-background">
      <div id="app-background-image" class="background-image" />
    </div>
    <div id="app-menu">
      <div id="app-menu-content-wrapper">
        <div id="app-menu-content">
          <div id="app-menu-content-header">
            <div class="app-menu-content-header-section">
              <div id="app-menu-info" class="info"><span class="time">{{ time }}</span><span class="weather"><i
                    :class="iconClass"></i><span class="weather-temperature-value">{{ temperature }}</span></span></div>
              <div class="reminder">
                <span class="reminder-text" v-show="one">{{ one }} <span class="reminder-time">--{{ origin }}</span></span>
              </div>
            </div>
            <div class="app-menu-content-header-section" @click="handleExit"><button id="sign-out-button"
                class="user-status-button clear-button" type="button"><i class="i-uil-exit"></i></button></div>
          </div>
          <div class="scrollable-component" id="quick-nav">
            <div class="quick-nav-item clear-button" @click="goAnchor('weather_id')"><span
                class="quick-nav-item-label">天气</span></div>
            <div class="quick-nav-item clear-button" @click="goAnchor('tools_id')"><span
                class="quick-nav-item-label">工具</span></div>
            <div class="quick-nav-item clear-button" @click="goAnchor('app_id')"><span
                class="quick-nav-item-label">应用</span></div>
            <div class="quick-nav-item clear-button" @click="goAnchor('links_id')"><span
                class="quick-nav-item-label">链接</span></div>
          </div><a id="youtube-link" class="clear-button" @click="handleRouter('Setting')" target="_blank"><i
              class="i-uil-setting"></i><span>设置</span></a>
          <div id="weather-section" class="menu-section">
            <div class="rainbow-container" id="weather_id"><i class="rainbow"></i></div>
            <div class="menu-section-title"><span class="menu-section-title-text">最近的天气如何?</span></div>
            <div class="scrollable-component menu-section-content">
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">66<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon sun"></i><span
                    class="day-name">Mon</span></div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">74<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon cloudy"></i><span
                    class="day-name">Tues</span></div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">66<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon rainy"></i><span
                    class="day-name">Wed</span></div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">75<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon breeze"></i><span
                    class="day-name">Thurs</span>
                </div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">60<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon starry"></i><span
                    class="day-name">Fri</span></div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">60<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon thunder"></i><span
                    class="day-name">Sat</span></div>
              </div>
              <div class="day-card">
                <div class="day-card-content"><span class="day-weather-temperature">76<span
                      class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon snowy"></i><span
                    class="day-name">Sun</span></div>
              </div>
            </div>
          </div>
          <div id="restaurants-section" class="menu-section">
            <div class="menu-section-title" id="tools_id"><i class="i-uil-briefcase-alt"></i><span
                class="menu-section-title-text">Get it tools!</span></div>
            <div class="menu-section-content">
              <div class="restaurant-card background-image" @click="handleRouter('Json')"
                :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBrJam-help9UezO/root/content)` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">JSON</span><span
                      class="restaurant-card-desc">最好的JSON 格式化工具</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image" @click="handleRouter('Html')"
                :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBs-vum1YCsYKacN/root/content)` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">HTML</span><span
                      class="restaurant-card-desc">在线编写HTML</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image"
                :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhByphWP_Xfn9L3um/root/content)` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">TIME</span><span
                      class="restaurant-card-desc">时间和时间戳转换</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image"
                :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhB3f8xOSgYGOKgo2/root/content)` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">UNIT</span><span
                      class="restaurant-card-desc">长度、面积、气压等单位转换</span></div>
                </div>
              </div>
            </div>
          </div>
          <div id="tools-section" class="menu-section">
            <div class="menu-section-title" id="app_id"><i class="i-uil-apps"></i><span
                class="menu-section-title-text">What's Apps?</span></div>
            <div class="menu-section-content">
              <div class="tool-card" @click="handleRouter('Translate')">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCt4b2Mv8Dvl4Chp/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Translation</span><span
                      class="tool-card-name">翻译</span></div><i class="i-uil-slack-alt text-sky-500"></i>
                </div>
              </div>
              <div class="tool-card" @click="handleRouter('Note')">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCcDs4UvuOvnjZyN/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Note</span><span
                      class="tool-card-name">笔记</span></div><i class="i-uil-notes text-red-400"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhChCpZe2N8lBhq5J/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Keyboard</span><span
                      class="tool-card-name">键码</span></div><i class="i-uil-keyboard text-green-300"></i>
                </div>
              </div>
              <div class="tool-card" @click="handleRouter('Chatgpt')">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCn-AXQgChjEAiWy/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">ChatGPT</span><span
                      class="tool-card-name">AI 人工智能</span></div><i class="i-uil-robot text-indigo-300"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCrkDSSirrrja4fb/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Qrcode</span><span
                      class="tool-card-name">二维码</span></div><i class="i-uil-qrcode-scan text-pink-300"></i>
                </div>
              </div>
              <div class="tool-card" @click="handleRouter('Shell')">
                <div class="tool-card-background background-image"
                  :style="{ 'background-image': `url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCa39MbOkUCXstCi/root/content)` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Terminal</span><span
                      class="tool-card-name">终端</span></div><i class="i-uil-brackets-curly text-amber-200"></i>
                </div>
              </div>
            </div>
          </div>
          <div id="movies-section" class="menu-section">
            <div class="menu-section-title" id="links_id"><i class="i-uil-link"></i><span
                class="menu-section-title-text">Link it!</span></div>
            <div class="scrollable-component menu-section-content">
              <div id="movie-card-1" class="movie-card" @click="gotoUrl('https://wt-front-end.github.io/wt-docs/')">
                <div class="movie-card-background background-image"
                  :style="{ 'background-image': `url(https://www.helloimg.com/images/2023/02/15/oFxVdA.webp)` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">前端文档</span><span
                      class="movie-card-desc">包含代码编写说明,相关使用方法</span></div>
                  <i class="i-uil-notebooks text-blue-200"></i>
                </div>
              </div>
              <div id="movie-card-2" class="movie-card" @click="gotoUrl('https://www.jixiaokang.com/black-tool/')">
                <div class="movie-card-background background-image"
                  :style="{ 'background-image': `url(https://www.helloimg.com/images/2023/02/15/oFx7XX.webp)` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">生成表格</span><span
                      class="movie-card-desc">快速生成表格</span></div><i class="i-uil-table text-purple-200"></i>
                </div>
              </div>
              <div id="movie-card-3" class="movie-card" @click="handleProject">
                <div class="movie-card-background background-image"
                  :style="{ 'background-image': `url(https://www.helloimg.com/images/2023/02/15/oFxI8M.webp)` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">项目看板</span><span
                      class="movie-card-desc">接入项目发布信息</span></div><i class="i-uil-comparison text-yellow-200"></i>
                </div>
              </div>
              <div id="movie-card-4" class="movie-card" @click="gotoUrl('https://github.com/wt-front-end/wt-cli')">
                <div class="movie-card-background background-image"
                  :style="{ 'background-image': `url(https://www.helloimg.com/images/2023/02/15/oFxQcY.webp)` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">项目地址</span><span
                      class="movie-card-desc">此项目GitHub地址</span></div><i class="i-uil-github-alt text-green-200"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tools from "../utils/common"
const router = useRouter();
function gotoHome () {
  router.push({ name: "Login" })
}
function handleExit () {
  router.push({ name: "Index" })
}
function handleRouter (name) {
  const routeData = router.resolve({
    name: name
  });
  window.open(routeData.href, '_blank');
}
function goAnchor (id) {
  let anchor = document.getElementById(id);
  anchor.scrollIntoView();
}
function gotoUrl (url) {
  window.open(url, '_blank');
}
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
let iconClass = ref('')
let temperature = ref('')
let one = ref('')
let origin = ref('')
async function init () {
  let response = await fetch('http://en.wttr.in?format="%C,%t"');
  const data = await response.json();
  iconClass.value = tools.iconList[data.split(',')?.[0]] || 'i-uil-sun'
  temperature.value = data.split(',')?.[1]


  let response1 = await fetch('https://api.xygeng.cn/one');
  const data1 = await response1.json();
  one.value = data1.data.content
  origin.value = data1.data.origin
  console.log(data1)
}
init()
onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null;
})
// onMounted(() => {});
</script>

<style scoped lang="scss"></style>
