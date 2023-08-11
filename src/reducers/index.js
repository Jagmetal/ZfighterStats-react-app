import characters_json from '../data/20 - characters.json';
import { combineReducers } from 'redux';
import { ADD_CHARACTER } from '../actions';
import characters from './charactersReducer';
import heroes from './hereoesReducer';


const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;