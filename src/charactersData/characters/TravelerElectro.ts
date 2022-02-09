import {Character, Vision} from '../../const/consts';
import {
  Flower,
  TravelerAscensionMaterial,
  Materials, Books, MORA, BossSkillMaterial, CROWN_OF_INSIGHT,
} from '../materials/materialNames';
import {fillAscensionMaterials} from '../../utils/utils';

const talent = {
  2: [
    {material: Books.TEACHINGS_OF_TRANSIENCE, count: 3, sorting_index: 2},
    {material: Materials.OLD_HANDGUARD, count: 6, sorting_index: 8},
    {material: MORA, count: 12500, sorting_index: 1}
  ],
  3: [
    {material: Books.GUIDE_TO_ELEGANCE, count: 2, sorting_index: 3},
    {material: Materials.KAGEUCHI_HANDGUARD, count: 3, sorting_index: 8},
    {material: MORA, count: 17500, sorting_index: 1}
  ],
  4: [
    {material: Books.GUIDE_TO_LIGHT, count: 4, sorting_index: 4},
    {material: Materials.KAGEUCHI_HANDGUARD, count: 4, sorting_index: 8},
    {material: MORA, count: 25000, sorting_index: 1}
  ],
  5: [
    {material: Books.GUIDE_TO_TRANSIENCE, count: 6, sorting_index: 2},
    {material: Materials.KAGEUCHI_HANDGUARD, count: 6, sorting_index: 8},
    {material: MORA, count: 30000, sorting_index: 1}
  ],
  6: [
    {material: Books.GUIDE_TO_ELEGANCE, count: 9, sorting_index: 3},
    {material: Materials.KAGEUCHI_HANDGUARD, count: 9, sorting_index: 8},
    {material: MORA, count: 37500, sorting_index: 1}
  ],
  7: [
    {material: Books.PHILOSOPHIES_OF_LIGHT, count: 4, sorting_index: 4},
    {material: Materials.FAMED_HANDGUARD, count: 4, sorting_index: 8},
    {material: BossSkillMaterial.DRAGON_LORDS_CROWN, count: 1, sorting_index: 9},
    {material: MORA, count: 120000, sorting_index: 1}
  ],
  8: [
    {material: Books.PHILOSOPHIES_OF_TRANSIENCE, count: 6, sorting_index: 2},
    {material: Materials.FAMED_HANDGUARD, count: 6, sorting_index: 8},
    {material: BossSkillMaterial.DRAGON_LORDS_CROWN, count: 1, sorting_index: 9},
    {material: MORA, count: 260000, sorting_index: 1}
  ],
  9: [
    {material: Books.PHILOSOPHIES_OF_ELEGANCE, count: 12, sorting_index: 3},
    {material: Materials.FAMED_HANDGUARD, count: 9, sorting_index: 8},
    {material: BossSkillMaterial.DRAGON_LORDS_CROWN, count: 2, sorting_index: 9},
    {material: MORA, count: 450000, sorting_index: 1}
  ],
  10: [
    {material: Books.PHILOSOPHIES_OF_LIGHT, count: 16, sorting_index: 4},
    {material: Materials.FAMED_HANDGUARD, count: 12, sorting_index: 8},
    {material: BossSkillMaterial.DRAGON_LORDS_CROWN, count: 2, sorting_index: 9},
    {material: CROWN_OF_INSIGHT, count: 1},
    {material: MORA, count: 700000, sorting_index: 1}
  ]
}

const TravelerElectro = {
  name: Character.TRAVELER_ELECTRO,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: TravelerAscensionMaterial.BRILLIANT_DIAMOND_SLIVER,
      2: TravelerAscensionMaterial.BRILLIANT_DIAMOND_FRAGMENT,
      3: TravelerAscensionMaterial.BRILLIANT_DIAMOND_CHUNK,
      4: TravelerAscensionMaterial.BRILLIANT_DIAMOND_GEMSTONE
    },
    materials: {
      1: Materials.DAMAGED_MASK,
      2: Materials.STAINED_MASK,
      3: Materials.OMINOUS_MASK,
    },
    specialty: Flower.WINDWHEEL_ASTER
  }),
  rarity: 5,
  talent_materials: {...talent}
}

export default TravelerElectro
