<template>
  <div>
    <v-app-bar dark app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link id="link" to='/'>Vaquinha</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to='/signin' text>Entrar</v-btn>
      <v-btn to='/signup' light>Criar Conta</v-btn>
      <v-btn text>Contato</v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
  #link {
    text-decoration: none;
    color: white;
  }
</style>
