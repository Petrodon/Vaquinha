<template>
    <v-app>
        <v-container>
            <v-row>
            <!--{{ id }}-->
                <v-col cols="6">
                    <v-img min-width="650" min-height="350" max-width="700" max-height="400" :src="card.src"></v-img>
                    <br>
                    <v-row justify="center">
                        <v-col cols="2">
                            <v-btn id="don" min-width="100" min-height="60" color="success">Doar</v-btn>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col style="text-align: center;" cols="6">
                    <h1 id="tit">{{ card.title }}</h1>
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
                src: ''
            }
        }
    },
    props: {
        id: {
            type: String,
        }
    },
    created: function () {
        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i].id == parseInt(this.id)) {
                this.card.title = this.cards[i].title
                this.card.src = this.cards[i].src
            }
        }
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
