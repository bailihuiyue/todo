import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default () => {
    const store = new Vuex.Store({
        actions,
        getters,
        mutations,
        state
    })

    return store
}