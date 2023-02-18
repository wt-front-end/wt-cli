<!--
 * @Date: 2023-02-13
 * @LastEditTime: 2023-02-18 22:12:14
 * @LastEditors: xkloveme
 * @FileDesc:笔记
 * @FilePath: \wt-cli\app\src\views\note.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="note">
    <div class="content-section implementation dock-demo">
      <Toast />
      <Toast position="top-center" group="tc" />
      <Menubar :model="menubarItems">
        <template #start>
          <i class="pi pi-apple"></i>
        </template>
        <template #end>
          <i class="pi pi-video" />
          <i class="pi pi-wifi" />
          <i class="pi pi-volume-up" />
          <span>Fri 13:07</span>
          <i class="pi pi-search" />
          <i class="pi pi-bars" />
        </template>
      </Menubar>

      <div class="dock-window dock-advanced">
        <!-- 分割线 -->
        <Splitter :style="{ height: '100%', width: '100%' }">
          <SplitterPanel :size="3" :minSize="0" v-show="showTree">
            <div>
              <Button @click="active = 0" class="p-button-sm p-0" aria-label="Finder"
                :class="active == 0 ? 'p-button-raised p-button-text' : 'p-button-text'">
                <i class="i-uil-books"></i>
                <span class="px-1">文件夹</span>
              </Button>
              <Button @click="active = 1" class="p-button-sm p-0" aria-label="Git"
                :class="active == 1 ? 'p-button-raised p-button-text' : 'p-button-text'">
                <i class="i-uil-cloud-database-tree"></i>
                <span class="px-1">Git</span>
              </Button>
            </div>
            <!-- <Tree :value="nodes" /> -->
            <TreeTable :value="nodes" >
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
          </SplitterPanel>
          <SplitterPanel>
            <codemirror v-model="editInput" placeholder="请输入" :style="{ height: '100%', width: '100%' }" :autofocus="true"
              :indent-with-tab="true" :tab-size="2" :extensions="extensions" />
          </SplitterPanel>
        </Splitter>


        <Dock :model="dockItems">
          <template #item="{ item }">
            <a href="#" class="p-dock-link" v-tooltip.top="item.label" @click="onDockItemClick($event, item)">
              <img :alt="item.label" :src="item.icon" style="width: 100%" />
            </a>
          </template>
        </Dock>

        <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
          :style="{ width: '60vw' }" :maximizable="true">
          <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')"
            prompt="primevue $" />
        </Dialog>

        <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
          :style="{ width: '60vw' }" :maximizable="true">
          <Tree :value="nodes" />
        </Dialog>

        <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2"
          containerStyle="width: 400px" :circular="true" :fullScreen="true" :showThumbnails="false"
          :showItemNavigators="true">
          <template #item="slotProps">
            <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.item.alt"
              style="width: 100%" />
          </template>
        </Galleria>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Codemirror } from 'vue-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import PhotoService from './notes/PhotoService';
import TerminalService from "primevue/terminalservice";

let active = ref(0)
let editInput = ref('')
let extensions = [markdown()]
let showTree = ref(true)
let displayFinder = ref(false);
let displayTerminal = ref(false);
let displayPhotos = ref(false);
let photoService = ref(new PhotoService());
let images = ref();
let nodes = ref();
let expandedKeys =ref({})
async function getTree () {
  let response = await fetch('/api/notes/tree');
  const data = await response.json();
  nodes.value = data
  console.log(nodes.value,data,22)
}
let imgErrorPath = ref('https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png');
let dockItems = ref([
  {
    label: 'Finder',
    icon: "https://primefaces.org/cdn/primevue/images/dock/finder.svg",
    command: () => {
      displayFinder.value = true;
    }
  },
  {
    label: 'Terminal',
    icon: "https://primefaces.org/cdn/primevue/images/dock/terminal.svg",
    command: () => {
      displayTerminal.value = true;
    }
  },
  {
    label: 'App Store',
    icon: "https://primefaces.org/cdn/primevue/images/dock/appstore.svg",
    command: () => {
      // toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
    }
  },
  {
    label: 'Safari',
    icon: "https://primefaces.org/cdn/primevue/images/dock/safari.svg",
    command: () => {
      // toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
    }
  },
  {
    label: 'Photos',
    icon: "https://primefaces.org/cdn/primevue/images/dock/photos.svg",
    command: () => {
      displayPhotos.value = true;
    }
  },
  {
    label: 'GitHub',
    icon: "https://primefaces.org/cdn/primevue/images/dock/github.svg",
  },
  {
    label: 'Trash',
    icon: "https://primefaces.org/cdn/primevue/images/dock/trash.png",
    command: () => {
      // toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
    }
  }
]);
let dockBasicItems = ref([
  {
    label: "Finder",
    icon: "https://primefaces.org/cdn/primevue/images/dock/finder.svg"
  },
  {
    label: "App Store",
    icon: "https://primefaces.org/cdn/primevue/images/dock/appstore.svg"
  },
  {
    label: "Photos",
    icon: "https://primefaces.org/cdn/primevue/images/dock/photos.svg"
  },
  {
    label: "Trash",
    icon: "https://primefaces.org/cdn/primevue/images/dock/trash.png"
  }
]);
let menubarItems = ref([
  {
    label: 'Finder',
    class: 'menubar-root'
  },
  {
    label: 'File',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video'
          },

        ]
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      },
      {
        separator: true
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label: 'Edit',
    items: [
      {
        label: 'Left',
        icon: 'pi pi-fw pi-align-left'
      },
      {
        label: 'Right',
        icon: 'pi pi-fw pi-align-right'
      },
      {
        label: 'Center',
        icon: 'pi pi-fw pi-align-center'
      },
      {
        label: 'Justify',
        icon: 'pi pi-fw pi-align-justify'
      },

    ]
  },
  {
    label: 'Users',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus',

      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List'
          }
        ]
      }
    ]
  },
  {
    label: 'Events',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
  },
  {
    label: 'Quit'
  }
]);
let responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
function onDockItemClick (event, item) {
  if (item.command) {
    item.command();
  }
  event.preventDefault();
}
function commandHandler (text) {
  let response;
  let argsIndex = text.indexOf(' ');
  let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

  switch (command) {
    case "date":
      response = 'Today is ' + new Date().toDateString();
      break;

    case "greet":
      response = 'Hola ' + text.substring(argsIndex + 1);
      break;

    case "random":
      response = Math.floor(Math.random() * 100);
      break;

    default:
      response = "Unknown command: " + command;
  }

  TerminalService.emit('response', response);
}


onMounted(() => {
  images.value = photoService.value.getImages();
  getTree()
  TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
  TerminalService.off('command', commandHandler);
})
</script>

<style scoped lang="scss">
::v-deep(.dock-demo) {
  .dock-window {
    width: 100%;
    height: calc(100vh - 42px);
    position: relative;
    background-color: antiquewhite;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  .p-dock {
    z-index: 1000;
  }

  .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;

    .menubar-root {
      font-weight: bold;
      padding: 0 1rem;
    }

    .p-menuitem-link {
      padding: 0.5rem .75rem;
    }

    .p-menubar-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link {
      padding: 0.5rem .75rem;

      >.p-submenu-icon {
        display: none;
      }
    }

    .p-menubar-end {

      span,
      i {
        padding: 0 .75rem;
      }
    }

    .p-submenu-list {
      z-index: 2;
    }
  }
}
</style>
