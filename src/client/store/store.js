//Imports
import Vue from 'vue';
import Vuex from 'vuex';

//Custom Imports
import workoutConfig from './modules/workoutConfig';

//Config
Vue.use(Vuex);

//Store
export default new Vuex.Store({
    modules: {
        workoutConfig,
    }
})
