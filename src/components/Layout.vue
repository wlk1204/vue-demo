<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys1" theme="light" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <router-link to="/">
            <home-outlined />
            HomePage
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/help">
            <question-circle-outlined />
            Help
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <user-outlined />
          <router-link to="/me">Me</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
  <a-layout class="middle">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline" style="{ height: '100%', borderRight: 0 }">
        <a-sub-menu key="sub1">
          <template #title> subnav 1 </template>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="content">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { UserOutlined, QuestionCircleOutlined, HomeOutlined } from '@ant-design/icons-vue';

export default {
  name: 'App',
  components: {
    UserOutlined,
    HomeOutlined,
    QuestionCircleOutlined,
  },
  mounted() {
    this.$store.commit('increment');
  },
};
</script>

<style lang="less" scoped>
.header {
  background: #fff;
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(10, 255, 255);
  }
}

.middle {
  height: calc(100vh - 64px);
  .content {
    background: #fff;
    margin: 24px;
    padding: 24px;
    min-height: 280px;
  }
}
</style>
