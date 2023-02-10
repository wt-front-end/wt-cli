<!--
 * @Date: 2023-02-10
 * @LastEditTime: 2023-02-10 16:52:12
 * @LastEditors: xkloveme
 * @FileDesc:new page
 * @FilePath: /watone-cli/app/src/views/chatgpt.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="main">
    <div class="chat-all">
      <div class="chat card">
        <div class="triangle"></div>
        <div class="card2">您好，很高兴能够遇到你！我是人工智能AI,可以跟我聊聊吗？</div>
      </div>
      <div class="chat" :class="item.who == 'me' ? 'card_two' : 'card'" v-for="(item,i) in list" :key="i+1">
        <div :class="item.who == 'me' ? 'triangle_two' : 'triangle'"></div>
        <div class="card2" v-html="item.keyword"></div>
      </div>
    </div>
    <form @submit="onSubmit" class="input-btn">
      <div class="group">
        <input type="text" v-model="input" class="input" placeholder="请输入您的问题" />
        <span class="highlight"></span>
        <span class="bar"></span>
      </div>

      <button type="submit" v-show="!loading" class="cssbuttons-io-button" value="发送">
        发送
        <div class="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"></path>
          </svg>
        </div>
      </button>

      <button disabled="" v-show="loading" type="button" class="cssbuttons-io-button">
        <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"></path>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"></path>
        </svg>
        Loading...
      </button>

    </form>
  </div>
</template>

<script setup>
let input = ref('')
let result = ref('')
let loading = ref(false)
let list = ref([])
async function onSubmit (e) {
  e.preventDefault();
  if(!input.value) return
  loading.value = true
  list.value.push({ keyword: input.value, who: 'me' })
  try {
    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword: input.value }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }
    result.value = data.result
    list.value.push({ keyword: data.result, who: 'ai' })
    input.value = ''
    loading.value = false
  } catch (error) {
    loading.value = false
    // Consider implementing your own error handling logic here
    console.error(error);
  }
}

</script>

<style scoped lang="scss">
.main {
  width: 100vw;
}

.input-btn {
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
  background-color: #455a64;
  display: flex;
}

.chat-all {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 100px;
}

.chat {
  position: relative;
  padding: 10px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  word-break: break-all;
  background-color: skyblue;
  color: #fff;

  .triangle,
  .triangle_two {
    position: absolute;
    top: 15px;
    border-width: 10px;
    border-style: solid;
  }

  .triangle {
    left: -20px;
    border-color: transparent #536976 transparent transparent;
  }

  .triangle_two {
    right: -20px;
    border-color: transparent transparent transparent #a6ffcb;
  }

  .fill,
  .fill_two {
    position: absolute;
    top: 15px;
    border-width: 10px;
    border-style: solid;
  }

  .fill {
    left: -16px;
    border-color: transparent rgb(53, 67, 73) transparent transparent;
  }



  .transition:hover {
    transform: scale(0.98);
  }
}

.card_two {
  background-image: linear-gradient(135deg, #1fa2ff, #12d8fa, #a6ffcb);
  transition: all .3s;
}

.card_two:hover {
  box-shadow: 0px 0px 30px 1px rgba(28, 147, 233, 0.3);
}

.card {
  background-image: linear-gradient(35deg, #536976, #536976, #292e49);
  transition: all .3s;
}

.card2 {
  //  background-color: #1a1a1a57;
  transition: all .2s;
}

.card2:hover {
  transform: scale(0.98);
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

.group {
  position: relative;
  flex: 1;

  .input {
    font-size: 1rem;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    color: #fff;
    border-bottom: 1px solid #cccccc54;
    background: transparent;
  }

  .input:focus {
    outline: none;
  }

  label {
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus~label,
  .input:valid~label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
  }

  .bar {
    position: relative;
    display: block;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus~.bar:before,
  .input:focus~.bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .input:focus~.highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264AE;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
}

.cssbuttons-io-button {
  background: #5264AE;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #5264AE;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #5264AE;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #5264AE;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}
</style>
