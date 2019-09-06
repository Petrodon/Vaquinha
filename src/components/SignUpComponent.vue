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

            <v-text-field label="Nome" v-model="name" outlined required class="my-2" color="#F3B61F" rounded autofocus></v-text-field>

            <v-text-field label="E-mail" v-model="email" outlined required class="my-2" color="#F3B61F" rounded></v-text-field>

            <v-text-field label="Senha" v-model="password" type="password" outlined class="my-2" required  color="#F3B61F" rounded></v-text-field>
            
            <v-text-field label="Confirmar Senha" v-model="confirmPassword" type="password" outlined class="my-2" required  color="#F3B61F" rounded></v-text-field>


            <v-btn color="#F3B61F" outlined type="submit" class="mb-5">Criar Conta</v-btn>

            <p class="text-left" @click="onChangeForm"><a>Entrar.</a></p>

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
  import api from '@/services/api'

export default {
    data: () => ({
      icons: {
        mdiCow
      },
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    
    methods:{

      handleSubmit: async function(){

        const { name, email, password, confirmPassword } = this

        if (!name || !email || !password || !confirmPassword) {
          return swal('Preencha todos os campos', 'Tente novamente', 'error')
        }

        if (password !== confirmPassword) {
           return swal('Senhas diferentes', 'Tente novamente', 'error')
        }

        const that = this

        const user = await api.post('signup', { name, email, password })
        .then(function(response){
          swal('Cadastrado com sucesso', 'Efetue o login', 'success')
          that.onChangeForm()
        })
        .catch(function(error){
          const err = error.response.data
          swal(`${err}`, 'Tente novamente', 'error');
          
        })

      },

      onChangeForm: function() {
        this.$router.push("/");
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