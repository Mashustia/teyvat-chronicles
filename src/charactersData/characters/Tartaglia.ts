import {Character, Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, Books, BossSkillMaterial} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Tartaglia = {
  name: Character.TARTAGLIA,
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
    bossMaterial: BossMaterials.CLEANSING_HEART,
    specialty: Rocks.STARCONCH
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.RECRUITS_INSIGNIA,
      2: Materials.SERGEANTS_INSIGNIA,
      3: Materials.LIEUTENANTS_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY
  }),
  possible_teams: [
    [Character.TARTAGLIA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.TARTAGLIA, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.TARTAGLIA, Character.XIANGLING, Character.GANYU, Character.BENNETT],
    [Character.TARTAGLIA, Character.FISCHL, Character.BEIDOU, Character.JEAN],
  ]
}

export default Tartaglia
