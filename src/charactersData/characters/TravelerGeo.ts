import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossSkillMaterial,
  CROWN_OF_INSIGHT,
  Flower,
  Materials,
  MORA,
  TravelerAscensionMaterial,
} from '../materials/materialNames';
import {fillAscensionMaterials} from '../../utils/utils';

const talent1 = {
  2: [
    {material: Books.TEACHINGS_OF_FREEDOM, count: 3, sorting_index: 2},
    {material: Materials.DIVINING_SCROLL, count: 6, sorting_index: 8},
    {material: MORA, count: 12500, sorting_index: 1}
  ],
  3: [
    {material: Books.GUIDE_TO_RESISTANCE, count: 2, sorting_index: 4},
    {material: Materials.SEALED_SCROLL, count: 3, sorting_index: 8},
    {material: MORA, count: 17500, sorting_index: 1}
  ],
  4: [
    {material: Books.GUIDE_TO_BALLAD, count: 4, sorting_index: 5},
    {material: Materials.SEALED_SCROLL, count: 4, sorting_index: 8},
    {material: MORA, count: 25000, sorting_index: 1}
  ],
  5: [
    {material: Books.GUIDE_TO_FREEDOM, count: 6, sorting_index: 2},
    {material: Materials.SEALED_SCROLL, count: 6, sorting_index: 8},
    {material: MORA, count: 30000, sorting_index: 1}
  ],
  6: [
    {material: Books.GUIDE_TO_RESISTANCE, count: 9, sorting_index: 4},
    {material: Materials.SEALED_SCROLL, count: 9, sorting_index: 8},
    {material: MORA, count: 37500, sorting_index: 1}
  ],
  7: [
    {material: Books.PHILOSOPHIES_OF_BALLAD, count: 4, sorting_index: 5},
    {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 4, sorting_index: 8},
    {material: BossSkillMaterial.DVALINS_SIGH, count: 1, sorting_index: 10},
    {material: MORA, count: 120000, sorting_index: 1}
  ],
  8: [
    {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6, sorting_index: 2},
    {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 6, sorting_index: 8},
    {material: BossSkillMaterial.DVALINS_SIGH, count: 1, sorting_index: 10},
    {material: MORA, count: 260000, sorting_index: 1}
  ],
  9: [
    {material: Books.PHILOSOPHIES_OF_RESISTANCE, count: 12, sorting_index: 4},
    {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 9, sorting_index: 8},
    {material: BossSkillMaterial.DVALINS_SIGH, count: 2, sorting_index: 10},
    {material: MORA, count: 450000, sorting_index: 1}
  ],
  10: [
    {material: Books.PHILOSOPHIES_OF_BALLAD, count: 16, sorting_index: 5},
    {material: Materials.FORBIDDEN_CURSE_SCROLL, count: 12, sorting_index: 8},
    {material: BossSkillMaterial.DVALINS_SIGH, count: 2, sorting_index: 10},
    {material: CROWN_OF_INSIGHT, count: 1},
    {material: MORA, count: 700000, sorting_index: 1}
  ]
}

const talent2_3 = {
  2: [
    {material: Books.TEACHINGS_OF_PROSPERITY, count: 3, sorting_index: 3},
    {material: Materials.FIRM_ARROWHEAD, count: 6, sorting_index: 9},
    {material: MORA, count: 12500, sorting_index: 1}
  ],
  3: [
    {material: Books.GUIDE_TO_DILIGENCE, count: 2, sorting_index: 6},
    {material: Materials.SHARP_ARROWHEAD, count: 3, sorting_index: 9},
    {material: MORA, count: 17500, sorting_index: 1}
  ],
  4: [
    {material: Books.GUIDE_TO_GOLD, count: 4, sorting_index: 7},
    {material: Materials.SHARP_ARROWHEAD, count: 4, sorting_index: 9},
    {material: MORA, count: 25000, sorting_index: 1}
  ],
  5: [
    {material: Books.GUIDE_TO_PROSPERITY, count: 6, sorting_index: 3},
    {material: Materials.SHARP_ARROWHEAD, count: 6, sorting_index: 9},
    {material: MORA, count: 30000, sorting_index: 1}
  ],
  6: [
    {material: Books.GUIDE_TO_DILIGENCE, count: 9, sorting_index: 6},
    {material: Materials.SHARP_ARROWHEAD, count: 9, sorting_index: 9},
    {material: MORA, count: 37500, sorting_index: 1}
  ],
  7: [
    {material: Books.PHILOSOPHIES_OF_GOLD, count: 4, sorting_index: 7},
    {material: Materials.WEATHERED_ARROWHEAD, count: 4, sorting_index: 9},
    {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1, sorting_index: 10},
    {material: MORA, count: 120000, sorting_index: 1}
  ],
  8: [
    {material: Books.PHILOSOPHIES_OF_PROSPERITY, count: 6, sorting_index: 3},
    {material: Materials.WEATHERED_ARROWHEAD, count: 6, sorting_index: 9},
    {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 1, sorting_index: 10},
    {material: MORA, count: 260000, sorting_index: 1}
  ],
  9: [
    {material: Books.PHILOSOPHIES_OF_DILIGENCE, count: 12, sorting_index: 6},
    {material: Materials.WEATHERED_ARROWHEAD, count: 9, sorting_index: 9},
    {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2, sorting_index: 10},
    {material: MORA, count: 450000}
  ],
  10: [
    {material: Books.PHILOSOPHIES_OF_GOLD, count: 16, sorting_index: 7},
    {material: Materials.WEATHERED_ARROWHEAD, count: 12, sorting_index: 9},
    {material: BossSkillMaterial.TAIL_OF_BOREAS, count: 2, sorting_index: 10},
    {material: CROWN_OF_INSIGHT, count: 1},
    {material: MORA, count: 700000, sorting_index: 1}
  ]
}

const TravelerGeo = {
  name: Character.TRAVELER_GEO,
  vision: Vision.GEO,
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
  attack: { ...talent1 },
  elemental_skill: { ...talent2_3 },
  elemental_burst: { ...talent2_3 },
  possible_teams: [
    [Character.TRAVELER_GEO, Character.ZHONGLI, Character.ALBEDO, Character.BENNETT],
    [Character.TRAVELER_GEO, Character.ZHONGLI, Character.GOROU, Character.BENNETT],
    [Character.TRAVELER_GEO, Character.ZHONGLI, Character.ALBEDO, Character.GOROU],
    [Character.TRAVELER_GEO, Character.ZHONGLI, Character.ALBEDO, Character.YELAN],
    [Character.TRAVELER_GEO, Character.ZHONGLI, Character.ALBEDO, Character.NINGGUANG],
  ]
}

export default TravelerGeo
