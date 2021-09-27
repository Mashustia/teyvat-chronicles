import {ICharacter} from './types';
import {Vision} from '../const/consts';
import Bennett from './characters/Bennett';
import Beidou from './characters/Beidou';
import Mona from './characters/Mona';
import Xiao from './characters/Xiao';
import Noelle from './characters/Noelle';
import Chongyun from './characters/Chongyun';
import Amber from './characters/Amber';
import Diluc from './characters/Diluc';
import Klee from './characters/Klee';
import Ningguang from './characters/Ningguang';
import Zhongli from './characters/Zhongli';
import Lisa from './characters/Lisa';

const Jean = {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: {},
  rarity: 5
}

const Raiden = {
  name: 'Raiden',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 5
}

const Xiangling = {
  name: 'Xiangling',
  vision: Vision.PYRO,
  ascension_materials: {},
  rarity: 4
}

const Xingqiu = {
  name: 'Xingqiu',
  vision: Vision.HYDRO,
  ascension_materials: {},
  rarity: 4
}

const Barbara = {
  name: 'Barbara',
  vision: Vision.HYDRO,
  ascension_materials: {},
  rarity: 4
}

const Diona = {
  name: 'Diona',
  vision: Vision.CRYO,
  ascension_materials: {},
  rarity: 4
}

const Fischl = {
  name: 'Fischl',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 4
}

const Keqing = {
  name: 'Keqing',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 5
}

const CHARACTERS: ICharacter[] = [
  Amber,
  Barbara,
  Bennett,
  Beidou,
  Chongyun,
  Diluc,
  Diona,
  Fischl,
  Jean,
  Klee,
  Keqing,
  Mona,
  Lisa,
  Noelle,
  Ningguang,
  Raiden,
  Xiangling,
  Xingqiu,
  Zhongli,
  Xiao
]

export default CHARACTERS
