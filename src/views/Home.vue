<template>
<v-app>
    <v-img src="https://pereirabueno.com.br/wp-content/uploads/2018/04/crowdfunding.png">
    <v-container fill-height grid-list-md text-xs-center>
        <v-layout justify-center row wrap align-center>
          <v-btn height="70" elevation="10"
            @click="$vuetify.goTo('#projetos', {duration: 1000, offset: -10, easing: 'easeOutQuad'})"
            color="success">
            <h2>Veja os Projetos</h2>
          </v-btn>
        </v-layout>
    </v-container>
    </v-img>

    <v-container mt-7 text-center id="projetos">
        <h1 id="tit">Projetos</h1>
        <v-row>
            <v-col cols="4" v-for="card in cards" :key="card.title">
                <v-card>
                    <v-img
                    :src="card.images[0]"
                    class="white--text"
                    height="200px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                    <v-card-title
                        class="fill-height align-end"
                        v-text="card.title"
                    ></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-btn :to="'/project/' + card._id" text>Ver Projeto</v-btn>
                    <div class="flex-grow-1"></div>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-footer>
        <div class="flex-grow-1"></div>
        <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import api from "@/services/api"

export default {
    computed: {
        ...mapGetters(["getTokenUser"])
    },
    data: () => {
        return {
            cards: [],
            card: {}
        }
    },
    mounted: async function () {
        const projects = await api.get("/projects")
        this.cards = projects.data.docs
    }
}
</script>

<style scoped>
#tit {
    font-size: 70px;
    font-family: "Trebuchet MS";
}
</style>
