// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

const store = new Vuex.Store({
  state: {
    currentSettings: {
      selectedTag: "",
      selectedTimeframe: "month"
    },
    currentReport: {}
  },
  mutations: {
    UPDATE_SELECTED_TAG(state, value) {
      state.currentSettings.selectedTag = value;
    },
    UPDATE_SELECTED_TIMEFRAME(state, value) {
      state.currentSettings.selectedTimeframe = value;
    },
    UPDATE_CURRENT_REPORT(state, value) {
      state.currentReport = value;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
});
