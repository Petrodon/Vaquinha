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
                  <v-combobox
                    v-model="tags.tipo"
                    :items="items"
                    label="Selecione uma categoria para seu projeto"
                  ></v-combobox>
                </v-col>

                <v-col cols="12">
                  <v-combobox
                    v-model="country"
                    :items="countries"
                    label="Selecione o país"
                  ></v-combobox>
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
    country: '',
    countries: ["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ","DM",'DO',"EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IL","IT","JM","JP","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"],
    items: ['Design e Arte', 'Tecnologia', 'Comida', 'Construção', 'Jogos', 'Social', 'Publicações'],
    VAtual: 0,//
    VFinal: 0,//
    DiaInit: 0,//--------
    doadores: 0,//
    description: '',//
    title: '',//
    plans: [{title: '', desc: '', val: 0}],//----------
    tags: { tipo: '', local: '' },//------/-/-
    images: []//
  }),

  created: function() {
    if (!this.getIsLogged) {
      return this.$router.push("/signin");
    }
  },

  methods: {
    handleSubmit: async function() {
      const { doadores, DiaInit, VAtual, VFinal, title, description, plans, tags, images } = this;
      const data = new FormData();
      data.append("doadores", doadores);
      data.append("DiaInit", DiaInit);
      data.append("VAtual", VAtual);
      data.append("VFinal", VFinal);
      data.append("plans", plans);
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