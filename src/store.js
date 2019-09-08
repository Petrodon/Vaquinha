import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idUser: '',
        tokenUser: '',
        cards: [
            //No term deverá ser registrado quando que o projeto foi colocado para pedir ajuda e pegar 
            //a hora na página do projeto para calcular o tempo para terminar
            { id: 0, tdoa: 5, term: 40, tot: 90, por: 33, at: 30, title: 'Palhaços para Ajudar Doentes', desc: '', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Palha%C3%A7os_da_Ong.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Social', local: 'São Paulo - SP' } },
            { id: 1, tdoa: 12, term: 100, tot: 200, por: 50, at: 100, title: 'Salvando Cachorros', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Animais', local: 'Rio de Janeiro - RJ' } },
            { id: 2, tdoa: 70, term: 20, tot: 50, por: 10, at: 5, title: 'Ajude um brasileiro ir para Harvard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Harvard_University_Widener_Library.jpg/800px-Harvard_University_Widener_Library.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Educacional', local: 'Porto Alegre - SC' } },
        ],
    },
    mutations: {

        SAVE_LOGIN: (state, data) => {
            state.idUser = data.user._id
            state.tokenUser = data.token
        },

        add(state, iden, tit, sorc) {
            state.cards.push({ id: iden, title: tit, src: sorc })
        }

    },
    actions: {

    }
})