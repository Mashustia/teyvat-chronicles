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

const Noelle = {
  name: 'Noelle',
  vision: Vision.GEO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.GEO.PRITHIVA_TOPAZ_SLIVER,
      2: Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT,
      3: Gem.GEO.PRITHIVA_TOPAZ_CHUNK,
      4: Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossMaterials.BASALT_PILLAR,
    specialty: Flower.VALBERRY
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_RESISTANCE,
      2: Books.GUIDE_TO_RESISTANCE,
      3: Books.PHILOSOPHIES_OF_RESISTANCE,
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    bossMaterial: BossSkillMaterial.DVALINS_CLAWN,
  }),
  possible_teams: [
    [Character.NOELLE, Character.GOROU, Character.ALBEDO, Character.BENNETT],
    [Character.NOELLE, Character.GOROU, Character.ALBEDO, Character.ZHONGLI],
    [Character.NOELLE, Character.GOROU, Character.ZHONGLI, Character.BENNETT],
    [Character.NOELLE, Character.GOROU, Character.ZHONGLI, Character.YELAN],
    [Character.NOELLE, Character.YUN_JIN, Character.ALBEDO, Character.BENNETT],
    [Character.NOELLE, Character.YUN_JIN, Character.ALBEDO, Character.GOROU],
  ]
}

export default Noelle
