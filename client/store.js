import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: localStorage.getItem('code') || '',
    results: 'No results yet...',
    error: false
  },
  mutations: {
    updateCode(state, code) {
      state.code = code;
    },
    updateResults(state, { results, error }) {
      state.results = results;
      state.error = error;
    }
  },
  actions: {
    updateCode({ commit }, code) {
      localStorage.setItem('code', code);
      commit('updateCode', code);
    },
    runCode({ commit, state }) {
      fetch('/run', {
        method: 'POST',
        body: state.code
      })
        .then((res) => {
          res.json().then(({ success, data: results }) => {
            commit('updateResults', { results, error: !success });
          });
        })
    }
  }
});
