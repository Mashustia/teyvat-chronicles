import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Gem,
  Materials, Rocks
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Yelan = {
  name: Character.Yelan,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossMaterials.RUNIC_FANG,
    specialty: Rocks.STARCONCH
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PROSPERITY,
      2: Books.GUIDE_TO_PROSPERITY,
      3: Books.PHILOSOPHIES_OF_PROSPERITY,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.GILDED_SCALE
  }),
  possible_teams: [
    [Character.RAIDEN, Character.Yelan, Character.XIANGLING, Character.BENNETT],
    [Character.KLEE, Character.XINGQIU, Character.Yelan, Character.BENNETT],
    [Character.HU_TAO, Character.Yelan, Character.ZHONGLI, Character.MONA],
    [Character.KAMISATO_AYAKA, Character.Yelan, Character.KAEDEHARA_KAZUHA, Character.DIONA],
  ]
}

export default Yelan