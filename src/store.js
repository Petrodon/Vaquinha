import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idUser: '',
        tokenUser: '',
        isLogged: false
        /*cards: [
            //No term deverá ser registrado quando que o projeto foi colocado para pedir ajuda e pegar 
            //a hora na página do projeto para calcular o tempo para terminar
            { id: 0, ve: 3, tdoa: 5, term: 40, tot: 90, por: 33, at: 30, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Palhaços para Ajudar Doentes', desc: '', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Palha%C3%A7os_da_Ong.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Social', local: 'São Paulo - SP' } },
            { id: 1, ve: 20, tdoa: 12, term: 100, tot: 200, por: 50, at: 100, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Salvando Cachorros', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Animais', local: 'Rio de Janeiro - RJ' } },
            { id: 2, ve: 10, tdoa: 70, term: 20, tot: 50, por: 10, at: 5, payinfo: {email: 'palh@ajuda12345.com', return: '', cancel: '', notify: ''}, title: 'Ajude um brasileiro ir para Harvard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Harvard_University_Widener_Library.jpg/800px-Harvard_University_Widener_Library.jpg', plans: [{id: 0, title: 'Standard', desc: 'Sincera gratidão', val: 5}, {id: 1, title: 'Premium', desc: 'Standard + camiseta', val: 15}], tags: { tipo: 'Educacional', local: 'Porto Alegre - SC' } },
        ],*/
    },

    getters: {
        getIsLogged: state => {
            return state.isLogged;
        },

        getDetailsUser: state => {
            return state.detailsUser;
        },

        getTokenUser: state => {
            return state.tokenUser;
        },

        getIdUser: state => {
            return state.idUser
        }
    },

    mutations: {
        SAVE_LOGIN: (state, data) => {
            state.idUser = data.user._id;
            state.tokenUser = data.token;
            state.detailsUser = {
                email: data.user.email,
                name: data.user.name,
                image: data.user.image
            };
            state.isLogged = true;
        },

        LOGOFF: state => {
            state.idUser = "";
            state.tokenUser = "";
            state.isLogged = false;
        },
    },
    actions: {}
})
