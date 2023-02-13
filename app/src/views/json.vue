<!--
 * @Date: 2023-02-13
 * @LastEditTime: 2023-02-13 18:17:57
 * @LastEditors: xkloveme
 * @FileDesc:html
 * @FilePath: /watone-cli/app/src/views/json.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="html">
    <Menubar :model="items">
      <template #start>
        <h3>在线编写JSON</h3>
      </template>
      <template #end>
        <Button label="格式化" @click="run" icon="i-uil-arrow-right text-3xl" iconPos="right" />
      </template>
    </Menubar>
    <div style="height: 92vh;">
      <codemirror v-model="jsonInput" placeholder="请输入json" :style="{ height: '100%', width: '100%' }" :autofocus="true"
        :indent-with-tab="true" :tab-size="2" :extensions="extensions1" />
    </div>
  </div>
</template>

<script setup>
import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark'
let items = []

const extensions1 = [json(), oneDark]
let jsonInput = ref(null)
function run () {
  if(jsonInput.value){
    jsonInput.value = JSON.stringify(JSON.parse(jsonInput.value), null, 4)
  }
}
onMounted(() => { });
</script>

<style scoped lang="scss">

</style>
