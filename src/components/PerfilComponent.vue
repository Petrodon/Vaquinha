<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md12 class="mx-1">
        <v-card class="px-5 py-3">
          <v-card-title>
            <v-avatar size="150">
              <v-img :src="this.img" alt="avatar" />
            </v-avatar>
            <v-flex xs-12 md-8>
              <h1 class="font-weight-thin display-2 mb-5 ml-5 text-left">{{getDetailsUser.name}}</h1>
              <h1 class="font-weight-thin display-1 mb-5 ml-5 text-left">{{getDetailsUser.email}}</h1>
            </v-flex>
            <v-flex>
              <v-btn color="red darken-1" @click="onShowModal">Alterar Perfil</v-btn>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 md6 class="mt-5">
        <v-card class="mx-4 px-3 py-3">
          <v-card-title>
            <h1 class="font-weight-thin display-1 mb-5 text-left">
              <v-icon class="mr-2" color="red darken-1">mdi-cash-multiple</v-icon>Seus Projetos
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12 md5 class="mx-5"></v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 class="mt-5">
        <v-card class="mx-4 px-3 py-3">
          <v-card-title>
            <h1 class="font-weight-thin display-1 mb-5 text-left">
              <v-icon class="mr-2" color="red darken-1">mdi-home-city-outline</v-icon>Detalhes
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12 md5 class="mx-5"></v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <ModalImage v-if="show" :closeModal="onCloseModal" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ModalImage from "./ModalImageComponent";
export default {
  components: {
    ModalImage
  },
  computed: {
    ...mapGetters(["getDetailsUser"])
  },
  data: () => ({
    img: null,
    show: false
  }),
  created: function() {
    if (this.getDetailsUser.image.length === 0) {
      this.img = "https://vuetifyjs.com/apple-touch-icon-180x180.png";
    } else {
      const avatar = this.getDetailsUser.image[
        this.getDetailsUser.image.length - 1
      ];
      this.img = `http://localhost:3333/files/${avatar}`;
    }
    console.log(this.getDetailsUser.image);
  },
  methods: {
    onShowModal: function() {
      this.show = true;
    },
    onCloseModal: function() {
      this.show = false;
    }
  }
};
</script>