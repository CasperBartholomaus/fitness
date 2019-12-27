//State
const state = {
    muscle: '',
    focus: '',
};

//Mutations
const mutations = {
    setMuscle(state, payload) {
        state.muscle = payload.id;
    },
    setFocus(state, payload) {
        state.focus = payload.id;
    }
};

//Getters
const getters = {
    getMuscle: state => state.muscle,
    getFocus: state => state.focus
};

//Actions
const actions = {
    setMuscle: ({ commit, payload }) => commit('setMuscle', payload),
    setFocus: ({ commit, payload }) => commit('setFocus', payload),
};

export default {
    state,
    mutations,
    getters,
    actions,
}