import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Gem, Materials, Rocks} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Aloy = {
  name: Character.ALOY,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossMaterials.CRYSTALLINE_BLOOM,
    specialty: Rocks.CRYSTAL_MARROW
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_FREEDOM,
      2: Books.GUIDE_TO_FREEDOM,
      3: Books.PHILOSOPHIES_OF_FREEDOM,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.MOLTEN_MOMENT
  }),
  possible_teams: [
    [Character.KLEE, Character.KAEDEHARA_KAZUHA, Character.ALOY, Character.BENNETT],
    [Character.GANYU, Character.XINGQIU, Character.VENTI, Character.ALOY],
    [Character.KAMISATO_AYAKA, Character.XINGQIU, Character.ALOY, Character.JEAN],
    [Character.HU_TAO, Character.XINGQIU, Character.SUCROSE, Character.ALOY]
  ]
}

export default Aloy
