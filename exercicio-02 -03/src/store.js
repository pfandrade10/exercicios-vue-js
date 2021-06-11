import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => {
      return state.products.map(p => p);
    }
  },
  mutations: {
    addProduct(state, payload){
      state.products.push(payload);
      alert(`${payload.name} cadastrado com sucesso!`);
    }
  },
  actions: {
    addProduct(context, payload){
      context.commit('addProduct', payload);
    }
  }
});