<!--
 * @Date: 2023-02-04
 * @LastEditTime: 2023-02-04 11:53:54
 * @LastEditors: xkloveme
 * @FileDesc:时间
 * @FilePath: /watone-cli/app/src/components/Time.vue
 * @Copyright © xkloveme
-->
<template>
  <span className="time">{{  now}}</span>
</template>

<script setup>
let now 	= new Date();
onMounted(() => {});
</script>

<style scoped lang="scss"></style>
