import {Character, Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, BossSkillMaterial, Books} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Chongyun = {
  name: Character.CHONGYUN,
  vision: Vision.CRYO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.CRYO.SHIVADA_JADE_SLIVER,
      2: Gem.CRYO.SHIVADA_JADE_FRAGMENT,
      3: Gem.CRYO.SHIVADA_JADE_CHUNK,
      4: Gem.CRYO.SHIVADA_JADE_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.HOARFROST_CORE,
    specialty: Rocks.COR_LAPIS
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.DVALINS_SIGH
  }),
  possible_teams: [
    [Character.CHONGYUN, Character.XINGQIU, Character.XIANGLING, Character.BENNETT],
    [Character.KAEYA, Character.CHONGYUN, Character.XINGQIU, Character.DIONA],
    [Character.DILUC, Character.CHONGYUN, Character.SUCROSE, Character.BENNETT],
  ]
}

export default Chongyun
