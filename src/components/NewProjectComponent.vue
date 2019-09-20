<template>
  <form @submit.prevent="handleSubmit">
    <v-container>
      <v-layout>
        <v-flex xs12 md12 class="mx-1">
          <v-card class="px-5 py-3">
            <h1>Novo Projeto</h1>
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nome do Projeto"
                    outlined
                    required
                    color="#F3B61F"
                    rounded
                    autofocus
                    v-model="title"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="description"
                    outlined
                    name="input-7-4"
                    label="Descrição"
                    value
                    color="#F3B61F"
                  ></v-textarea>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="tags"
                    label="HashTags"
                    outlined
                    required
                    color="#F3B61F"
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="images"
                    show-size
                    counter
                    multiple
                    label="Foto do Projeto"
                    outlined
                  ></v-file-input>
                </v-col>

                <v-col cols="12">
                  <v-btn elevation="10" color="success" type="submit">Criar</v-btn>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/services/api";

export default {
  computed: {
    ...mapGetters(["getIsLogged", "getTokenUser"])
  },

  data: () => ({
    id: 0,
    doadores: 0,
    DiaInit: 0,
    VAtual: 0,
    title: 0,
    description: 0,
    plans: {},
    payinfo: {},
    tags: {},
    creator: {},
    images: []
  }),

  created: function() {
    if (!this.getIsLogged) {
      return this.$router.push("/signin");
    }
  },
  
  methods: {
    handleSubmit: async function() {
      const { id, doadores, DiaInit, VAtual, title, description, plans, payinfo, tags, creator, images } = this;
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("tags", tags);
      data.append("images", images[0]);
      const project = await api.post("projects/create", data, {
        headers: { Authorization: "Bearer " + this.getTokenUser }
      });
      this.title = "";
      this.description = "";
      this.tags = "";
      this.images = null;
    }
  }
};
</script>