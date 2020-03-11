import {combineReducers} from 'redux'
import {ADICIONAR_UM, MENOS_UM} from '../actions/types.js'

const valoresReducer = (state = {valor: 0}, action) => {

    switch(action.type){
        case ADICIONAR_UM:
            return { ...state, valor: state.valor + 1}
        default:
            return state
        case MENOS_UM:
            return { ...state, valor: state.valor - 1}
    }
}



const rootReducer = combineReducers({
    valores: valoresReducer
})

export default rootReducer