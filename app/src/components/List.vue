<template>
  <div class="list-all ml-45 mr-5">
    <div v-for="(item, i) in list" :key="i" class="note" v-show="isEnv(item.name)">
      <div class="tools">
        {{ isWeb(item.name) }}
        {{ item.name }}
        {{ isProduction(item.name) }}
      </div>
      <div :class="item.version ? 'main flex items-center' : 'hidden'">版本号:<span
          class="blue px-2 py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-1">{{
            item.version ||
              ''
          }}</span></div>
      <div :class="getUrlPort(item.url) ? 'main flex' : 'hidden'">
        端口:
        <span class="code">{{ getUrlPort(item.url) }}</span>
      </div>

      <div :class="item.gitlab ? 'main' : 'hidden'">gitLab地址:<br />
        <a :href="item.gitlab" target="_blank" class="blue">{{ item.gitlab }}</a>
      </div>
      <div class="main">地址:<br />
        <a :href="item.url" target="_blank" class="blue">{{ item.url }}</a>
      </div>
      <div :class="item.Branch ? 'main' : 'hidden'">分支:<br /><span class="blue">{{ item.Branch || '' }}</span></div>
      <div :class="item.Hash ? 'main' : 'hidden'">{{ item.gitlab ? 'HASH(点击可访问commit)' : 'HASH' }}:<br />
        <a :href="item.gitlab ? `${item.gitlab}/commit/${item.Hash}` : '#'" target="_blank" class="blue">{{
          item.Hash.slice(0, 10)
        }}</a>
      </div>
      <div :class="item.CommitUser ? 'main flex items-center' : 'hidden'">发布者:<br /><span class="blue">{{
        item.CommitUser
          || ''
      }}</span>
      </div>
      <div :class="item.CommitContent ? 'main' : 'hidden'">发布内容:<br /><span class="blue">{{
        item.CommitContent ||
          ''
      }}</span>
      </div>
      <div class="main ">发布时间:<br /><span class="blue">{{ item.time || '' }}</span></div>
    </div>
  </div>


  <div class="h-screen  shadow-lg w-40 fixed top-0 left-0">
    <div class="bg-white h-full dark:bg-gray-700 overflow-y-auto">
      <div class="flex items-center justify-center pt-2">
        <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
          <defs>
            <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
              <stop stop-color="#FF0057" stop-opacity="0.16" offset="0%">
              </stop>
              <stop stop-color="#FF0057" offset="86.1354%">
              </stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
              fill="#001B38">
            </path>
            <circle fill="url(#linearGradient-1)"
              transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
              cx="147.013244" cy="147.014675" r="78.9933938">
            </circle>
            <circle fill="url(#linearGradient-1)" opacity="0.5"
              transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
              cx="147.013244" cy="147.014675" r="78.9933938">
            </circle>
          </g>
        </svg>
      </div>
      <nav class="mt-2">
        <div>
          <a :class="active == 0 ? 'border-blue-500 text-blue-500 w-full font-thin uppercase  flex items-center p-2 my-1 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4' : 'w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-1 transition-colors duration-200 justify-start hover:text-blue-500'"
            @click="handleClick(0, null)" href="#">
            <span class="mx-1 text-sm font-normal">
              全部
            </span>
          </a>
          <a :class="active == i + 1 ? 'border-blue-500 text-blue-500 w-full font-thin uppercase  flex items-center p-2 my-1 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4' : 'w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-1  transition-colors duration-200 justify-start hover:text-blue-500'"
            @click="handleClick(i + 1, link.list)" href="#" v-for="(link, i) in listAll" :key="i">
            <span class="mx-1 text-sm font-normal">
              {{ link.name }}
            </span>
          </a>
        </div>
      </nav>
    </div>
  </div>


</template>
<script setup>
import { onMounted, defineProps, ref } from 'vue';
const props = defineProps({
  env: {
    type: [String, Number],
    default: 'all'
  },
})
let listAll = [{
  name: '临安web防逃',
  list: ['http://172.18.39.200:33020/version.json', 'http://172.18.39.197:33020/version.json'],
},
{
  name: '临安防逃H5',
  list: ['https://hltm.jw.linan.gov.cn/zzdtest/laft-h5-test/version.json', 'https://hltm.jw.linan.gov.cn/zzd/laft-h5/version.json'],
},
{
  name: '临安大屏',
  list: ['http://172.18.39.200:34020/big/version.json', 'http://172.18.39.200:33020/big/version.json', 'http://172.18.39.197:33020/big/version.json'],
},
{
  name: '嘉善大屏',
  list: ['http://30.207.88.19:31134/version.json', 'https://ywjd.jiashan.gov.cn:8443/datav/version.json'],
},
{
  name: '嘉善浙里办H5',
  list: ["http://30.207.88.19:31132/version.json", 'https://cpdev.watone.com.cn:30000/jsjw-zlb/version.json'],
},
{
  name: '绍兴卫建机构端',
  list: ["http://30.207.88.19:31153/version.json"],
},
{
  name: '绍兴卫建政府端',
  list: ["http://30.207.88.19:31152/version.json"],
},
{
  name: '绍兴卫建大屏',
  list: ["http://30.207.88.19:31154/version.json"],
},
{
  name: '绍兴卫建家长端H5',
  list: ["http://30.207.88.19:31155/version.json"],
},
]
let active = ref(0)
function handleClick (i, list) {
  active.value = i
  if (list) {
    changeList(list)
  } else {
    init()
  }
}
let list = ref([])

function init () {
  listAll.map(item => {
    item.list.map(async it => {
      try {
        const response = await fetch(`/api/getJson?url=${it}`);
        const json = await response.json();
        json?.name && list.value.push(json)
      } catch (error) {
      }
    })
  })
}
onMounted(() => {
  init()
})
function changeList (listLoad) {
  list.value = []
  listLoad.map(async it => {
    const response = await fetch(`/api/getJson?url=${it}`);
    const json = await response.json();
    json?.name && list.value.push(json)
  })
}

function getUrlPort (url) {
  var protocolReg = /^\w+:\/\//;
  if (!protocolReg.test(url)) {
    url = "http://" + url
  }
  return new URL(url).port
};



let isEnv = function (name) {
  let prodEnv = name.includes('pro') || name.includes('production') || name.includes('生产')
  switch (props.env) {
    case 'all':
      return true
      break;
    case 'pre':
      return !prodEnv
      break;
    case 'prod':
      return prodEnv
      break;
    default:
      return true
      break;
  }
}
let isWeb = function (name) {
  return name.includes('手机') ? '📱' : '💻'
}
let isProduction = function (name) {
  return name.includes('pro') || name.includes('production') || name.includes('生产') ?
    '🔥🔥🔥' : '🍀🍀🍀'
}
</script>
<style>
.main {
  color: #000;
  padding: 10px;
  font-size: 0.8rem;
}

.code {
  font-size: 0.875em;
  border: 0.1em solid #ea9bd7;
  border-radius: 4px;
  padding: 0.1rem 0.5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-all {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.note {
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  color: #f5f3f2;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  min-height: 500px;
  width: 380px;
}

.note .tools {
  background: linear-gradient(135deg, #f02fc2, #6094ea);
  color: #fff;
  display: flex;
  padding: 0.5rem;
}

.note .tools button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.note textarea {
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  border: none;
  height: 400px;
  width: 100%;
  padding: 20px;
}


.blue {
  color: #4c83ff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
}

.hidden {
  display: none;
}
</style>