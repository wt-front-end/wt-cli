<!--
 * @Date: 2023-02-03
 * @LastEditTime: 2023-02-05 15:56:21
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
      <h3 id="app-pin-label">Enter PIN (7053) <span id="app-pin-cancel-text" @click="gotoIndex">Cancel</span></h3>
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
async function enterInput (e) {
  if (e.target.value.toString().length!==4) {
    return
  }
  const response = await fetch(`/api/pwdCheck?pwd=${e.target.value.toString()}`);
  const status = await response.json();
  if(status){
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
onMounted(() => { autofocusInput() });
</script>

<style scoped lang="scss">

</style>
