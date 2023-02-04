<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-04 13:04:01
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
    <div id="app-info" class="info"><span class="time">12:02</span><span class="weather"><i class="i-uil-sun"></i><span
          class="weather-temperature-value">75</span><span class="weather-temperature-unit">°C</span></span></div>
    <div id="sign-in-button-wrapper"><button id="sign-in-button" class="user-status-button clear-button"
        type="button"><i class="i-uil-corner-up-right-alt"></i></button></div>
  </div>
</template>

<script setup>
// const { proxy } = getCurrentInstance();
// const props = defineProps({})
const router = useRouter();
function gotoHome () {
  router.push({ name: "Login" })
}
// onMounted(() => {});
</script>

<style scoped lang="scss">

</style>
