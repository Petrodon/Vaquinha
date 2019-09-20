<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-img :src="card.src"></v-img>
                    <v-row justify="end">
                        <v-col cols="3">
                            <v-avatar size="25">
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/compass.png">
                            </v-avatar>
                            {{ card.tags.tipo }}
                        </v-col>
                        <v-col cols="4">
                            <v-avatar size="25">
                                <img src="https://img.icons8.com/material/24/000000/marker--v1.png">
                            </v-avatar>
                            {{ card.tags.local }}
                        </v-col>
                    </v-row>
                    <br>
                    <v-row justify="center">
                        <v-col cols="2">
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                                <input type="hidden" name="cmd" value="_xclick" />

                                <!--Vendedor e URL de retorno, cancelamento e notificação-->
                                <input type="hidden" name="business" :value="card.payinfo.email" />
                                <input type="hidden" name="return" :value="card.payinfo.return" />
                                <input type="hidden" name="cancel" :value="card.payinfo.cancel" />
                                <input type="hidden" name="notify_url" :value="card.payinfo.notify" />
                            
                                <!--Internacionalização e localização da página de pagamento-->
                                <input type="hidden" name="charset" value="utf-8" />
                                <input type="hidden" name="lc" value="BR" />
                                <input type="hidden" name="country_code" value="BR" />
                                <input type="hidden" name="currency_code" value="BRL" />

                                <!--Informações sobre o produto e seu valor-->
                                <input type="hidden" name="amount" :value="ve" />
                                <input type="hidden" name="item_name" value="Doação" />
                                <input type="hidden" name="quantity" value="1" />

                                <v-btn type="submit" id="don" min-width="100" min-height="60" color="success">Doar</v-btn>
                            </form>
                        </v-col>
                    </v-row>
                </v-col>

                <v-col style="text-align: center;" cols="6">
                    <h1 id="tit">{{ card.title }}</h1>
                    <br><br><br>
                    <v-col>
                        <v-progress-linear color="green" height="15" :value="card.por"></v-progress-linear>
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
        <br><br><br>
        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-card>
                        <v-card-title>Descrição</v-card-title><br>
                        <v-card-text>{{ card.description }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-col v-bind:key="plan.id" v-for="plan in card.plans">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card>
                                <v-card-title>Plano {{ plan.title }}</v-card-title>
                                <v-card-text><h2 style="color: green;">R${{ plan.val }}</h2><br>{{ plan.desc }}</v-card-text>
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="#F3B61F"
                                    >
                                        <v-btn @click="ve = plan.val; snackbar = true">Selecionar esse plano</v-btn>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                    <v-snackbar v-model="snackbar">
                        Plano escolhido
                        <v-btn
                            color="blue"
                            text
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>
                    </v-snackbar>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import api from "@/services/api"
import axios from 'axios'

export default {
    data: () => {
        return {
            snackbar: false,
            ve: 0,
            card: {},
            cards: []
        }
    },
    props: {
        id: {
            type: String,
        }
    },
    mounted: function () {
        const projects = api.get("/projects")
        this.card = projects.data.docs[this.id]
        this.card.por = this.card.at/this.card.tot*100
    },
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
