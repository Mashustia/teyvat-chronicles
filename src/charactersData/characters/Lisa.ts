import {Character, Vision} from '../../const/consts';
import {
  BossMaterials,
  Gem,
  Materials,
  Flower,
  Books,
  BossSkillMaterial
} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Lisa = {
  name: Character.LISA,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.LIGHTNING_PRISM,
    specialty: Flower.VALBERRY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_BALLAD,
      2: Books.GUIDE_TO_BALLAD,
      3: Books.PHILOSOPHIES_OF_BALLAD,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.DVALINS_CLAWN
  }),
  possible_teams: [
    [Character.LISA, Character.BEIDOU, Character.VENTI, Character.BENNETT],
    [Character.LISA, Character.XINGQIU, Character.FISCHL, Character.JEAN],
    [Character.LISA, Character.BEIDOU, Character.KUJOU_SARA, Character.JEAN],
    [Character.LISA, Character.XIANGLING, Character.SUCROSE, Character.BENNETT],
    [Character.EULA, Character.LISA, Character.FISCHL, Character.DIONA],
  ]
}

export default Lisa
