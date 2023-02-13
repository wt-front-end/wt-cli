<!--
 * @Date: 2023-02-13
 * @LastEditTime: 2023-02-13 18:18:19
 * @LastEditors: xkloveme
 * @FileDesc:html
 * @FilePath: /watone-cli/app/src/views/html.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="html">
    <Menubar :model="items">
      <template #start>
        <h3>在线编写HTML</h3>
      </template>
      <template #end>
        <Button label="运行" @click="run" icon="i-uil-arrow-right text-3xl" iconPos="right" />
      </template>
    </Menubar>
    <Splitter style="height: 90vh">
      <SplitterPanel v-if="!(!showJs && !showHtml && !showCss)">
        <Splitter layout="vertical">
          <SplitterPanel :size="20" :minSize="5" v-show="showHtml">
            <codemirror v-model="htmlInput" placeholder="请输入html" :style="{ height: '100%', width: '100%' }"
              :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions1" />
          </SplitterPanel>
          <SplitterPanel class="flex align-items-center justify-content-center" :size="10" v-show="showJs">
            <codemirror v-model="javascriptInput" placeholder="请输入javascript" :style="{ height: '100%', width: '100%' }"
              :indent-with-tab="true" :tab-size="2" :extensions="extensions2" />
          </SplitterPanel>
          <SplitterPanel class="flex align-items-center justify-content-center" :size="10" v-show="showCss">
            <codemirror v-model="cssInput" placeholder="请输入css" :style="{ height: '100%', width: '100%' }"
              :indent-with-tab="true" :tab-size="2" :extensions="extensions3" />
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
      <SplitterPanel v-show="showResult">
        <iframe id="iframeResult" frameborder="0" height="100%" width="100%" src="iframe.html"></iframe>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<script setup>
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'
let showHtml = ref(true)
let showJs = ref(true)
let showCss = ref(true)
let showResult = ref(true)
let items = computed(()=>{
  return [{
  label: '布局',
  icon: 'i-uil-google-play',
  items: [
    {
      label: showHtml.value?'HTML 隐藏':'HTML 显示',
      icon: 'i-uil-html5-alt',
      command: (event) => {
        showHtml.value = !showHtml.value
      }
    },
    {
      label: showJs.value?'JS 隐藏':'JS 显示',
      icon: 'i-uil-java-script',
      command: (event) => {
        showJs.value = !showJs.value
      }
    },
    {
      label: showCss.value?'CSS 隐藏':'CSS 显示',
      icon: 'i-uil-css3-simple',
      command: (event) => {
        showCss.value = !showCss.value
      }
    },
    {
      label: showResult.value?'结果 隐藏':'结果 显示',
      icon: 'i-uil-brackets-curly',
      command: (event) => {
        showResult.value = !showResult.value
      }
    }
  ]
}]
})

const extensions1 = [html(), oneDark]
const extensions2 = [javascript(), oneDark]
const extensions3 = [css(), oneDark]
let htmlInput = ref(`<h1>我的第一个HTML页面</h1>
我的第一个段落。`)
let javascriptInput = ref(`console.log(1);`)
let cssInput = ref(`body {
  background: #000;
  color: #fff;
}`)
function run () {
  const iframe = document.getElementById("iframeResult");
  let iframeHtml = iframe.contentWindow.document
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssInput.value;
  const script = document.createElement("script");
  script.innerHTML = javascriptInput.value;
  const head = iframeHtml["head"];
  head.innerHTML = ''
  head.appendChild(style);
  const body = iframeHtml["body"];
  const div = document.createElement("div");
  div.innerHTML = htmlInput.value;
  body.innerHTML = ''
  body.appendChild(div);
  body.appendChild(script);
}
onMounted(() => { });
</script>

<style scoped lang="scss">
.iframe {
  display: block;
  /* iframes are inline by default */
  border: none;
  /* Reset default border */
  height: 100vh;
  /* Viewport-relative units */
  width: 100vw;
}
</style>
