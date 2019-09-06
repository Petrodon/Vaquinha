import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idUser: '',
        tokenUser: '',
        cards: [
            { id: 1, title: 'Palhaços para Ajudar Doentes', desc: '', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Palha%C3%A7os_da_Ong.jpg' },
            { id: 2, title: 'Salvando Cachorros', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg' },
            { id: 3, title: 'Ajude um brasileiro ir para Harvard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Harvard_University_Widener_Library.jpg/800px-Harvard_University_Widener_Library.jpg' },
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