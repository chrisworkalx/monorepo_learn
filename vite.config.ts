import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';

// 注释 @vitejs/plugin-vue 和 @vitejs/plugin-vue-jsx不能同时使用
import Unocss from './config/unocss';

// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // 添加UnoCSS插件
    Unocss()
  ],
  build: {
    rollupOptions,
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'MonorepoLearn',
      fileName: 'monorepo_learn',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    }
  }
});
