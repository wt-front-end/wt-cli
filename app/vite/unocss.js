import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import tools from "../src/utils/common"
export default function createUnocss () {
  let arr = []
  for (const item in tools.iconList) {
    arr = arr.concat(tools.iconList[item])
  }
  return Unocss({
    safelist: arr,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons()],
  });
}