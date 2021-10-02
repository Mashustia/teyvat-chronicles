import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial, CROWN_OF_INSIGHT} from '../materialNames';

const Tartaglia = {
  name: 'Tartaglia',
  vision: Vision.HYDRO,
  ascension_materials: {
    20: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_SLIVER, count: 1 },
      { material: Rocks.STARCONCH, count: 3 },
      { material: Materials.RECRUITS_INSIGNIA, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 2 },
      { material: Rocks.STARCONCH, count: 10 },
      { material: Materials.RECRUITS_INSIGNIA, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_FRAGMENT, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 4 },
      { material: Rocks.STARCONCH, count: 20 },
      { material: Materials.SERGEANTS_INSIGNIA, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 3 },
      { material: BossMaterials.CLEANSING_HEART, count: 8 },
      { material: Rocks.STARCONCH, count: 30 },
      { material: Materials.SERGEANTS_INSIGNIA, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_CHUNK, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 12 },
      { material: Rocks.STARCONCH, count: 45 },
      { material: Materials.LIEUTENANTS_INSIGNIA, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.HYDRO.VARUNADA_TOPAZ_GEMSTONE, count: 6 },
      { material: BossMaterials.CLEANSING_HEART, count: 20 },
      { material: Rocks.STARCONCH, count: 60 },
      { material: Materials.LIEUTENANTS_INSIGNIA, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 5,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_FREEDOM, count: 3},
      {material: Materials.RECRUITS_INSIGNIA, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_FREEDOM, count: 2},
      {material: Materials.SERGEANTS_INSIGNIA, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_FREEDOM, count: 4},
      {material: Materials.SERGEANTS_INSIGNIA, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_FREEDOM, count: 6},
      {material: Materials.SERGEANTS_INSIGNIA, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_FREEDOM, count: 9},
      {material: Materials.SERGEANTS_INSIGNIA, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 4},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 4},
      {material: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 6},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 6},
      {material: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 12},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 9},
      {material: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_FREEDOM, count: 16},
      {material: Materials.LIEUTENANTS_INSIGNIA, count: 12},
      {material: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Tartaglia
