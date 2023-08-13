import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import {createCharacter} from './helpers';


function heroes(state = [], action) {
    switch(action.type) {
        case ADD_CHARACTER:
            let updatedheroes = [...state, createCharacter(action.id)];
            return updatedheroes;
        case REMOVE_CHARACTER:
            let newheroes = state.filter(item => item.id !== action.id);
            return newheroes;            
        default:
            return state;
    }
}

export default heroes;