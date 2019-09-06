<template>
    <v-app>
        <v-container>
            <v-row>
            <!--{{ id }}-->
                <v-col cols="6">
                    <v-img :src="card.src"></v-img>
                    <br>
                    <v-row justify="center">
                        <v-col cols="2">
                            <v-btn id="don" min-width="100" min-height="60" color="success">Doar</v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col style="text-align: center;" cols="6">
                    <h1 id="tit">{{ card.title }}</h1>
                    <br><br><br>
                    <v-col>
                        <v-progress-linear color="green" height="15" rounded="true" :value="card.por"></v-progress-linear>
                    </v-col>
                    <v-col style="text-align: left;">
                        <h1>R${{ card.at }} doados</h1>
                        <span>comprometida com a meta de R${{ card.tot }}</span><br><br>
                    </v-col>
                    <v-row>
                        <v-col cols="6">
                            <h1>{{ card.tdoa }}</h1>
                            <span>doadores</span>
                        </v-col>
                        <v-col cols="6">
                            <h1>{{ card.term }}</h1>
                            <span>dias restantes</span>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <!--<v-btn v-on:click="add(4, 'Salvar os passarinhos', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Pied_kingfisher_%28Ceryle_rudis_leucomelanurus%29_female.jpg')"></v-btn>-->
    </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ... mapState({
            cards: state => state.cards
        })
    },
    data: () => {
        return {
            card: {
                title: '',
                src: '',
                at: 0,
                tot: 0,
                term: 0,
                tdoa: 0
            },
        }
    },
    props: {
        id: {
            type: String,
        }
    },
    created: function () {
        this.card = this.cards[parseInt(this.id)]
    },
    methods: {
        ...mapMutations({
            add: 'add'
        }),
  }
}
</script>

<style scoped>
#tit {
    font-family: "Trebuchet MS";
}

#don {
    font-size: 25px;
}
</style>
