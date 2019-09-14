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
                                <input type="hidden" name="business" value="vendedor@loja.com.br" />
                                <input type="hidden" name="return" value="http://loja.com.br/retorno" />
                                <input type="hidden" name="cancel" value="http://loja.com.br/cancelamento" />
                                <input type="hidden" name="notify_url" value="http://loja.com.br/notificacao" />
                            
                                <!--Internacionalização e localização da página de pagamento-->
                                <input type="hidden" name="charset" value="utf-8" />
                                <input type="hidden" name="lc" value="BR" />
                                <input type="hidden" name="country_code" value="BR" />
                                <input type="hidden" name="currency_code" value="BRL" />
                            
                                <!--Informações sobre o produto e seu valor-->
                                <input type="hidden" name="amount" :value="card.ve" />
                                <input type="hidden" name="item_name" value="Servico" />
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
                        <v-card-text>
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                            Este é um projeto onde palhaços vão em hospitais, casas de repouso e locais 
                            que tratam de enfermos para deixarem essas pessoas felizes para melhorarem mais
                            rápido e menos dolorosamente.
                            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si num tem leite então bota uma pinga aí cumpadi! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

                            Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.

                            Detraxit consequat et quo num tendi nada. Per aumento de cachacis, eu reclamis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.

                            Leite de capivaris, leite de mula manquis sem cabeça. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.

                            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Aenean aliquam molestie leo, vitae iaculis nisl. In elementis mé pra quem é amistosis quis leo.
                        </v-card-text>
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
                                        <v-btn @click="card.ve = plan.val; snackbar = true">Selecionar esse plano</v-btn>
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

export default {
    computed: {
        ... mapState({
            cards: state => state.cards
        })
    },
    data: () => {
        return {
            snackbar: false,
            card: {},
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
