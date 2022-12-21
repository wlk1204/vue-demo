<template>
  <div>HomePage</div>
  <a-button type="primary">Button</a-button>
  <br />
  <a-switch v-model:checked="checked1" />
  <br />
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      value: '',
    });
    return { ...toRefs(state) };
  },
};
</script>
