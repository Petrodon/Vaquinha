<template>
  <Perfil />
</template>

<script>
import { mapGetters } from 'vuex'
import Perfil from "@/components/PerfilComponent.vue";
export default {
  components: {
    Perfil
  },
  computed:{
    ...mapGetters(['getIsLogged'])
  },
  created: function(){
    if (!this.getIsLogged) {
      this.$router.push('/signin')
    }
  }
  
};
</script>