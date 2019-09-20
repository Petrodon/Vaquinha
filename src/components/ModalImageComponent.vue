<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
          <v-card-title>
            <span class="headline">Novo Time</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-file-input
                    v-model="image"
                    show-size
                    counter
                    multiple
                    label="Foto do Projeto"
                    outlined
                  ></v-file-input>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" text @click="closeModal">Fechar</v-btn>
            <v-btn color="green" text type="submit">Atualizar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import api from "../services/api";
import { mapGetters } from "vuex";
export default {
  props: {
    closeModal: Function
  },
  computed: {
    ...mapGetters(["getIdUser", "getTokenUser"])
  },
  data: () => ({
    image: null,
    dialog: true
  }),
  methods: {
    handleSubmit: async function() {
      const data = new FormData();
      data.append("image", this.image[0]);
      const avatar = await api.post(`avatar/${this.getIdUser}`, data, {
        headers: { Authorization: "Bearer " + this.getTokenUser }
      });
      this.closeModal();
    }
  }
};
</script>
