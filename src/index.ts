// const s: string = 'Hello Typescript';
// console.log(s);
// import { createApp } from 'vue';

// import SButton from './button';
// createApp(SButton).mount('#app');

// import SFCButton from './button/SFCButton.vue';
// createApp(SFCButton).mount('#app');

// import JSXButton from './button/JSXButton';
// createApp(JSXButton).mount('#app');

// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
// createApp这种支持template写法

import SmartyUI from './entry';
// import MyUi from '../myCompUi/my-lib-es.js'; //测试打包的文件
import ViviUI from '@chrisworkalx/vivi-ui'; //上传至npm的组件测试

import App from './App.vue';
createApp(App)
  .use(SmartyUI)
  .use(ViviUI)
  // .use(MyUi)
  .mount('#app');
// createApp({
//   template: `
//     <h1>what are you 弄啥嘞?</h1>
//   `
// })
//   .use(SmartyUI)
//   .mount('#app');
