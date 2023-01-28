import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Yaoyao = {
  name: Character.YAOYAO,
  vision: Vision.DENDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.DENDRO.NAGADUS_EMERALD_SLIVER,
      2: Gem.DENDRO.NAGADUS_EMERALD_FRAGMENT,
      3: Gem.DENDRO.NAGADUS_EMERALD_CHUNK,
      4: Gem.DENDRO.NAGADUS_EMERALD_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.QUELLED_CREEPER,
    specialty: Flower.JUEYUN_CHILI
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.DAKAS_BELL
  }),
  possible_teams: [
    [Character.KEQING, Character.FISCHL, Character.KAEDEHARA_KAZUHA, Character.YAOYAO],
    [Character.NAHIDA, Character.THOMA, Character.XINGQIU, Character.YAOYAO],
    [Character.NAHIDA, Character.YAOYAO, Character.NILOU, Character.KOKOMI],
  ]
}

export default Yaoyao
