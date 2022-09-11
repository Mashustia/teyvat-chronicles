import {makeAutoObservable} from 'mobx'
import {ICharacter} from '../../../charactersData/types';

class CharactersStore {
  characters: ICharacter[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCharacters(newCharacters: ICharacter[]) {
    this.characters = newCharacters
  }

  getCharacters() {
    return this.characters
  }

  getCharacterByName(name: string) {
    return this.characters.find((character: ICharacter) => character.name === name)
  }
}

const charactersStore = new CharactersStore();

export default charactersStore

// export const CharactersStore = () => {
//   return {
//     characters: [] as ICharacter[],
//
//     setCharacters(newCharacters: ICharacter[]) {
//       this.characters = newCharacters
//     },
//
//     getCharacterByName(name: string) {
//       return this.characters.find((character: ICharacter) => character.name === name)
//     }
//   }
// }
//
// export default CharactersStore
//
// export type CharactersStore = ReturnType<typeof CharactersStore>
