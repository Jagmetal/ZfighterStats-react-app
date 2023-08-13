import characters_json from '../data/20 - characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

function characters(state = characters_json, action) {
    switch(action.type) {
        case ADD_CHARACTER:
            // Use a different variable name, like 'updatedCharacters'
            let updatedCharacters = state.filter(item => item.id !== action.id);
            return updatedCharacters;
        case REMOVE_CHARACTER:
            // Use a different variable name, like 'newCharacters'
            let newCharacters = [...state, createCharacter(action.id)]
            return newCharacters;    
        default:
            return state;
    }
}



export default characters;