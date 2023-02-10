<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-10 12:40:32
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
                    class="i-uil-sun"></i><span class="weather-temperature-value">71</span><span
                    class="weather-temperature-unit">°C</span></span></div>
              <div class="reminder">
                <span class="reminder-text">Extra
                  cool people meeting <span class="reminder-time">10AM</span></span>
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
          </div><a id="youtube-link" class="clear-button" @click="handleRouter('Project')" target="_blank"><span>项目概览</span></a>
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
              <div class="restaurant-card background-image" :style="{ 'background-image': `url(${home13})` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">JSON</span><span
                      class="restaurant-card-desc">最好的JSON 格式化工具</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image" :style="{ 'background-image': `url(${home7})` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">HTML</span><span
                      class="restaurant-card-desc">在线编写HTML</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image" :style="{ 'background-image': `url(${home11})` }">
                <div class="restaurant-card-content">
                  <div class="restaurant-card-content-items"><span class="restaurant-card-title">TIME</span><span
                      class="restaurant-card-desc">时间和时间戳转换</span></div>
                </div>
              </div>
              <div class="restaurant-card background-image" :style="{ 'background-image': `url(${home4})` }">
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
              <div class="tool-card">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home3})` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Translation</span><span
                      class="tool-card-name">翻译</span></div><i class="i-uil-slack-alt text-sky-500"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home10})` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Note</span><span
                      class="tool-card-name">笔记</span></div><i class="i-uil-notes text-red-400"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home9})` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Keyboard</span><span
                      class="tool-card-name">键码</span></div><i class="i-uil-keyboard text-green-300"></i>
                </div>
              </div>
              <div class="tool-card" @click="handleRouter('Chatgpt')">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home1})` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">ChatGPT</span><span
                      class="tool-card-name">AI 人工智能</span></div><i class="i-uil-robot text-indigo-300"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home14})` }">
                </div>
                <div class="tool-card-content">
                  <div class="tool-card-content-header"><span class="tool-card-label">Qrcode</span><span
                      class="tool-card-name">二维码</span></div><i class="i-uil-qrcode-scan text-pink-300"></i>
                </div>
              </div>
              <div class="tool-card">
                <div class="tool-card-background background-image" :style="{ 'background-image': `url(${home8})` }">
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
                <div class="movie-card-background background-image" :style="{ 'background-image': `url(${home12})` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">前端文档</span><span
                      class="movie-card-desc">包含代码编写说明,相关使用方法</span></div>
                  <i class="i-uil-notebooks text-blue-200"></i>
                </div>
              </div>
              <div id="movie-card-2" class="movie-card" @click="gotoUrl('https://www.jixiaokang.com/black-tool/')">
                <div class="movie-card-background background-image" :style="{ 'background-image': `url(${home6})` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">生成表格</span><span
                      class="movie-card-desc">快速生成表格</span></div><i class="i-uil-table text-purple-200"></i>
                </div>
              </div>
              <div id="movie-card-3" class="movie-card" @click="handleProject">
                <div class="movie-card-background background-image" :style="{ 'background-image': `url(${home15})` }">
                </div>
                <div class="movie-card-content">
                  <div class="movie-card-info"><span class="movie-card-title">项目看板</span><span
                      class="movie-card-desc">接入项目发布信息</span></div><i class="i-uil-comparison text-yellow-200"></i>
                </div>
              </div>
              <div id="movie-card-4" class="movie-card"  @click="gotoUrl('https://github.com/wt-front-end/wt-cli')">
                <div class="movie-card-background background-image" :style="{ 'background-image': `url(${home5})` }">
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
import home1 from '../assets/1.webp'
import home3 from '../assets/3.webp'
import home4 from '../assets/4.webp'
import home5 from '../assets/5.webp'
import home6 from '../assets/6.webp'
import home7 from '../assets/7.webp'
import home8 from '../assets/8.webp'
import home9 from '../assets/9.webp'
import home10 from '../assets/10.webp'
import home11 from '../assets/11.webp'
import home12 from '../assets/12.webp'
import home13 from '../assets/13.webp'
import home14 from '../assets/14.webp'
import home15 from '../assets/15.webp'
// const { proxy } = getCurrentInstance();
// const props = defineProps({})
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
onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null;
})
// onMounted(() => {});
</script>

<style scoped lang="scss">

</style>
