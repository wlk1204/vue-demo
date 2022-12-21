import { createApp } from 'vue/dist/vue.esm-bundler';
import { Layout, Menu, Button, Switch, Skeleton, Input } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './vuex';
import 'ant-design-vue/dist/antd.less';

const app = createApp(App);

app.use(Layout);
app.use(Menu);
app.use(Button);
app.use(Switch);
app.use(Skeleton);
app.use(Input);

app.use(router);
app.use(store);

app.mount('#app');
