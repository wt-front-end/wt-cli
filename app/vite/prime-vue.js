import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
export default function createElementPlus () {
  return Components({
    resolvers: [
      PrimeVueResolver(),
    ],
    dts: false
  });
}
