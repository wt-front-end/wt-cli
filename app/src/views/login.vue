<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-04 21:54:33
 * @LastEditors: xkloveme
 * @FileDesc: 登录页
 * @FilePath: /watone-cli/app/src/views/login.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="main-index logging-in" @click="autofocusInput">
    <div id="app-background">
      <div id="app-background-image" class="background-image" />
    </div>
    <div id="app-pin-wrapper">
      <input autofocus ref="appPinInput" id="app-pin-hidden-input" maxlength="4" type="number" :value="pin"
        @input="handleOnChange" @keyup.enter="enterInput" />
      <div id="app-pin">
        <div class="app-pin-digit" :class="{ 'focused': pin.length === 0 }"><span class="app-pin-digit-value">{{
          pin[0] ||
            ""
        }}</span></div>
        <div class="app-pin-digit" :class="{ 'focused': pin.length === 1 }"><span class="app-pin-digit-value">{{
          pin[1] ||
            ""
        }}</span></div>
        <div class="app-pin-digit" :class="{ 'focused': pin.length === 2 }"><span class="app-pin-digit-value">{{
          pin[2] ||
            ""
        }}</span></div>
        <div class="app-pin-digit" :class="{ 'focused': pin.length === 3 }"><span class="app-pin-digit-value">{{
          pin[3] ||
            ""
        }}</span></div>
      </div>
      <h3 id="app-pin-label">Enter PIN (1234) <span id="app-pin-cancel-text" @click="gotoIndex">Cancel</span></h3>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
let pin = ref('')
function gotoIndex () {
  router.push({ name: "Index" })
}
let appPinInput = ref()
function autofocusInput (e) {
  appPinInput.value && appPinInput.value.focus()
}
function enterInput (e) {
  console.log("🐛 ~ file: login.vue:51 ~ enterInput ~ e", e.target.value.toString());
if(e.target.value.toString()=='1234'){
  router.push({ name: "Home" })
}
}
function handleOnChange (e) {
  if (e.target.value.length <= 4) {
    pin.value = e.target.value.toString();
  } else {
    e.target.value = e.target.value.toString().slice(0, 4)
  }
}
onMounted(() => {autofocusInput()});
</script>

<style scoped lang="scss">

</style>
