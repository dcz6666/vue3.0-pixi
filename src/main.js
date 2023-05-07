// 引入的不再是vue构造函数了，引入的是一个名为createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

import "./assets/css/reset.css";
// 创建应用实例对象-app(类似于之前Vue2中的vm,但app比vm更轻)
createApp(App).mount('#app')
