import characters_json from '../data/20 - characters.json';

export function createCharacter(id) {
    let character = characters_json.find(c => c.id === id);
    return character;
}