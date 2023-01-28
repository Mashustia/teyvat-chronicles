import {Character, Vision} from '../../const/consts';
import {
  Flower,
  TravelerAscensionMaterial,
  Materials,
  Books,
  MORA,
  BossSkillMaterial,
  CROWN_OF_INSIGHT,
} from '../materials/materialNames';
import {fillAscensionMaterials} from '../../utils/utils';

const talent = {
  2: [
    {material: Books.TEACHINGS_OF_ADMONITION, count: 3, sorting_index: 2},
    {material: Materials.FUNGAL_SPORES, count: 6, sorting_index: 11},
    {material: MORA, count: 12500, sorting_index: 1}
  ],
  3: [
    {material: Books.GUIDE_TO_INGENUITY, count: 2, sorting_index: 5},
    {material: Materials.LUMINESCENT_POLLEN, count: 3, sorting_index: 11},
    {material: MORA, count: 17500, sorting_index: 1}
  ],
  4: [
    {material: Books.GUIDE_TO_PRAXIS, count: 4, sorting_index: 8},
    {material: Materials.LUMINESCENT_POLLEN, count: 4, sorting_index: 11},
    {material: MORA, count: 25000, sorting_index: 1}
  ],
  5: [
    {material: Books.GUIDE_TO_ADMONITION, count: 6, sorting_index: 3},
    {material: Materials.LUMINESCENT_POLLEN, count: 6, sorting_index: 11},
    {material: MORA, count: 30000, sorting_index: 1}
  ],
  6: [
    {material: Books.GUIDE_TO_INGENUITY, count: 9, sorting_index: 6},
    {material: Materials.LUMINESCENT_POLLEN, count: 9, sorting_index: 11},
    {material: MORA, count: 37500, sorting_index: 1}
  ],
  7: [
    {material: Books.PHILOSOPHIES_OF_PRAXIS, count: 4, sorting_index: 9},
    {material: Materials.CRYSTALLINE_CYST_DUST, count: 4, sorting_index: 11},
    {material: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL, count: 1, sorting_index: 12},
    {material: MORA, count: 120000, sorting_index: 1}
  ],
  8: [
    {material: Books.PHILOSOPHIES_OF_ADMONITION, count: 6, sorting_index: 4},
    {material: Materials.CRYSTALLINE_CYST_DUST, count: 6, sorting_index: 11},
    {material: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL, count: 1, sorting_index: 12},
    {material: MORA, count: 260000, sorting_index: 1}
  ],
  9: [
    {material: Books.PHILOSOPHIES_OF_INGENUITY, count: 12, sorting_index: 7},
    {material: Materials.CRYSTALLINE_CYST_DUST, count: 9, sorting_index: 11},
    {material: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL, count: 2, sorting_index: 12},
    {material: MORA, count: 450000, sorting_index: 1}
  ],
  10: [
    {material: Books.PHILOSOPHIES_OF_PRAXIS, count: 16, sorting_index: 10},
    {material: Materials.CRYSTALLINE_CYST_DUST, count: 12, sorting_index: 11},
    {material: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL, count: 2, sorting_index: 12},
    {material: CROWN_OF_INSIGHT, count: 1},
    {material: MORA, count: 700000, sorting_index: 1}
  ]
}

const TravelerDendro = {
  name: Character.TRAVELER_DENDRO,
  vision: Vision.DENDRO,
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
  talent_materials: {...talent},
  possible_teams: [
    [Character.NAHIDA, Character.TRAVELER_DENDRO, Character.NILOU, Character.KOKOMI],
  ]
}

export default TravelerDendro
