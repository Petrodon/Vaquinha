<template>
  <v-app>
    <v-content class="back">
      <Menu />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.back{
  background-color: #F3B61F 
}
</style>
