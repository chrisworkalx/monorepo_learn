import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from '../config/unocss';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    Unocss()
  ]
});
