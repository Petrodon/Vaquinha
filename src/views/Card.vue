<template>
<v-app>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card>
                            <v-card-title>Plano Standard</v-card-title>
                            <v-card-text><h2 style="color: green;">R$5</h2><br>Nossa eterna gratidão</v-card-text>
                            <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#F3B61F"
                                >
                                    <v-btn>Selecionar esse plano</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col cols="12">
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
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>
