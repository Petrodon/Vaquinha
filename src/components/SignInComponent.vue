<template>
  <v-container class="cont">
    <v-layout
      text-center
      wrap
    >
    <v-flex xs3></v-flex>


    <v-flex xs6 class="mb-6">

      <div>
        <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
          <v-card class="px-5">

            <v-icon size="55" class="my-5" color="#F3B61F">{{ icons.mdiCow }}</v-icon>

            <v-text-field label="E-mail" v-model="email" outlined required class="my-5" color="#F3B61F" rounded autofocus></v-text-field>

            <v-text-field label="Senha" v-model="password" type="password" outlined required class="my-5" color="#F3B61F" rounded></v-text-field>

            <v-btn color="#F3B61F" outlined type="submit" class="mb-5">Entrar</v-btn>

            <p class="text-left" @click="onChangeForm"><a>Criar Conta.</a></p>

          </v-card>
        </v-form>
      </div>

    </v-flex>

    <v-flex xs3></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {
    mdiCow
  } from '@mdi/js'
import swal from 'sweetalert'

import { mapState, mapMutations } from 'vuex'
import api from '@/services/api'

export default {

    computed:{
      ...mapState(['tokenUser'])
    },

    data: () => ({
      icons: {
        mdiCow
      },
      email: '',
      password: ''
    }),
    
    methods:{
      ...mapMutations(['SAVE_LOGIN']),

      handleSubmit: async function(){

        const { email, password } = this

        if (!email || ! password) {
          return alert('Preencha todos os campos')
        }

        const that = this

        const session = await api.post('signin', { email, password })
        .then(function(response){
          console.log(response.data);
          swal('Bem vindo', 'Aproveite a plataforma', 'success')
          that.SAVE_LOGIN(response.data)
        })
        .catch(function(error){
          const err = error.response.data.error
          swal(`${err}`, 'Tente novamente', 'error');
          
        })


      },

      onChangeForm: function() {
        this.$router.push("/signup");
      }
    }

}
</script>


<style scoped>

.cont{
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

</style>