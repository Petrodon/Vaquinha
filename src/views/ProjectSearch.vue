<template>
    <v-app>
        <v-container text-center>
            <v-row justify="center">
                <v-col cols="12" sm="9">
                    <v-text-field
                        label="Pesquise projetos"
                        single-line
                        solo
                        v-model="inpv"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn @click="procurar()">Pesquisar</v-btn>
                </v-col>
            </v-row>

            <v-row>
            <v-col cols="4" v-for="card in pcards" :key="card.title">
                <v-card>
                    <v-img
                    :src="card.src"
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
                    <v-btn :to="'/project/' + card.id" text>Ver Projeto</v-btn>
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
    </v-app>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    data: () => {
        return {
            inpv: '',
            pcards: [],
            cards: [],
            card: {}
        }
    },
    mounted: async function () {
        const projects = await api.get("/projects")
        this.cards = projects.data.docs
    },
    methods: {
        procurar () {
            this.pcards = []
            for (var i=0; i < this.cards.length; i++) {
                if (this.cards[i].title.toLowerCase().indexOf(this.inpv) != -1) {
                    this.pcards.push(this.cards[i])
                }
            }
        }
    },
}
</script>
