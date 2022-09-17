import {makeAutoObservable} from 'mobx'
import {ICharacter} from '../../../charactersData/types';
import CHARACTERS from '../../../charactersData';
import {ICharacterProps as ICharacterWithSearchKeys} from '../../../views/Characters/components/Character/types';
import {getCharactersWithTranslatedNames} from '../../../utils/utils';
import {TFunction} from 'react-i18next';

class CharactersStore {
  characters: ICharacter[] = CHARACTERS;
  charactersForSearch: ICharacterWithSearchKeys[] = [];

  constructor() {
    makeAutoObservable(this)
  }

  setCharacters(newCharacters: ICharacter[]) {
    this.characters = newCharacters
  }

  setCharactersForSearch(t: TFunction) {
    this.charactersForSearch = getCharactersWithTranslatedNames(CHARACTERS, t)
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
