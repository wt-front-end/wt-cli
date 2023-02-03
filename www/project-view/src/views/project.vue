<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue'
import List from '../components/List.vue'
let active = ref('all')
</script>

<template>
  <div class="ml-45 mr-5">
    <h2><span class="text-gradient">华通云项目看板</span></h2>
    <p class="instructions">
      <strong>你可以:</strong>切换<code>下面环境</code> 来进行项目筛选&nbsp;&nbsp;&nbsp;&nbsp;
      <strong>也可以:</strong>切换 <code>左侧项目</code>进行筛选
    </p>
    <ul role="list" class="link-card-grid">
      <Card title="测试环境🍀🍀🍀" @click="active = 'pre'" :isactive="active == 'pre'" body="点击切换「测试环境🍀🍀🍀」,测试环境包含预发和测试" />
      <Card title="全部环境" @click="active = 'all'" :isactive="active == 'all'" body="点击切换「全部环境」,这里列举了生成项目的所有可用环境" />
      <Card title="生产环境🔥🔥🔥" @click="active = 'prod'" :isactive="active == 'prod'" body="点击切换「生产环境🔥🔥🔥」,正式上线可用的环境" />
    </ul>
  </div>
  <List :env="active" />
</template>

<style scoped>
:root {
  --astro-gradient: linear-gradient(0deg, #4f39fa, #da62c4);
}

h1 {
  margin: 2rem 0;
}

main {
  margin: auto;
  padding: 0.8em;
}

@media screen and (min-width: 900px) {
  main {
    margin: 0;
    margin-left: 220px;
  }
}

.text-gradient {
  font-weight: 900;
  background-image: var(--astro-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 200%;
  background-position-y: 100%;
  border-radius: 0.4rem;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    background-position-y: 0%;
  }

  50% {
    background-position-y: 80%;
  }
}

.instructions {
  line-height: 1.6;
  margin: 0.5rem 0;
  background: #4f39fa;
  padding: 0.5rem;
  border-radius: 0.4rem;
  color: var(--color-bg);
}

.instructions code {
  font-size: 0.875em;
  border: 0.1em solid var(--color-border);
  border-radius: 4px;
  padding: 0.15em 0.25em;
}

.link-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
  gap: 1rem;
  padding: 0;
}
</style>
