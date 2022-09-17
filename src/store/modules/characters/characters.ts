import {makeAutoObservable} from 'mobx'
import {TFunction} from 'react-i18next';

import {ICharacter} from '../../../charactersData/types';
import CHARACTERS from '../../../charactersData';
import {ICharacterProps as ICharacterWithSearchKeys} from '../../../views/Characters/components/Character/types';
import {getCharactersWithTranslatedNames} from '../../../utils/utils';

class CharactersStore {
  characters: ICharacter[] = CHARACTERS;
  charactersWithSearchKeys: ICharacterWithSearchKeys[] = [];
  filteredCharacters: ICharacterWithSearchKeys[] = [];

  constructor() {
    makeAutoObservable(this)
  }

  setCharactersForSearch(t: TFunction) {
    this.charactersWithSearchKeys = getCharactersWithTranslatedNames(CHARACTERS, t)
    this.filteredCharacters = getCharactersWithTranslatedNames(CHARACTERS, t)
  }

  searchForCharacters(search: string) {
    this.filteredCharacters = this.charactersWithSearchKeys
      .filter((character: ICharacterWithSearchKeys) => character.search_keys.includes(search))
  }

  resetFilteredCharacters() {
    this.filteredCharacters = this.charactersWithSearchKeys
  }
}

const charactersStore = new CharactersStore();

export default charactersStore
