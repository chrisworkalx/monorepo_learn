// const s: string = 'Hello Typescript';
// console.log(s);
// import { createApp } from 'vue';

// import SButton from './button';
// createApp(SButton).mount('#app');

// import SFCButton from './button/SFCButton.vue';
// createApp(SFCButton).mount('#app');

// import JSXButton from './button/JSXButton';
// createApp(JSXButton).mount('#app');

import { createApp } from 'vue';

import SmartyUI from './entry';
import App from './App.vue';
createApp(App).use(SmartyUI).use(SmartyUI).mount('#app');
