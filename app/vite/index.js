import vue from "@vitejs/plugin-vue";
import createAutoImport from "./auto-import";
import createSetupExtend from "./setup-extend";
import createUnocss from "./unocss";
import createPrimeVue from "./prime-vue";
import Icons from 'unplugin-icons/vite'
export default function createVitePlugins (viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(Icons({ autoInstall: true,  compiler: "vue3" }));
  vitePlugins.push(createUnocss());
  vitePlugins.push(createPrimeVue());
  return vitePlugins;
}
