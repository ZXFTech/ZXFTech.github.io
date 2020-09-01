import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { pageState, PageState } from "./PageState";

import mutations from "./mutation";

Vue.use(Vuex);

const store: StoreOptions<PageState> = {
  state: pageState,
  mutations,
  actions: {},
  modules: {},
};

export default new Vuex.Store(store);
