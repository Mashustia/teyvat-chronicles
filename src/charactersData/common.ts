import {ILevel} from './types';

export const HEROS_WIT_EXP = 20000
export const ADVENTURERS_EXPERIENCE_EXP = 5000
export const WANDERERS_ADVICE_EXP = 1000

// checked until 50
export const characterExperience = {
  '1': {
    exp_needed: 0,
    number_of_heros_wit: 0,
    mora: 0
  },
  '20': {
    exp_needed: 120175,
    number_of_heros_wit: 7,
    mora: 28000
  },
  '40': {
    exp_needed: 578325,
    number_of_heros_wit: 29,
    mora: 116000
  },
  '50': {
    exp_needed: 579100,
    number_of_heros_wit: 29,
    mora: 116000
  },
  '60': {
    exp_needed: 854125,
    number_of_heros_wit: 43,
    mora: 170825
  },
  '70': {
    exp_needed: 1195925,
    number_of_heros_wit: 60,
    mora: 239185
  },
  '80': {
    exp_needed: 1611875,
    number_of_heros_wit: 81,
    mora: 322375
  },
  '90': {
    exp_needed: 3423125,
    number_of_heros_wit: 172,
    mora: 684625
  }
}

export const fiveStarWeaponExperience = {
  '1-20': {
    exp_needed: 121550,
    number_of_mystic_ores: 13,
    mora: 12155
  },
  '20-40': {
    exp_needed: 622800,
    number_of_mystic_ores: 63,
    mora: 62280
  },
  '40-50': {
    exp_needed: 628150,
    number_of_mystic_ores: 63,
    mora: 62815
  },
  '50-60': {
    exp_needed: 927657,
    number_of_mystic_ores: 93,
    mora: 92768
  },
  '60-70': {
    exp_needed: 1299125,
    number_of_mystic_ores: 130,
    mora: 129913
  },
  '70-80': {
    exp_needed: 1750375,
    number_of_mystic_ores: 176,
    mora: 175038
  },
  '80-90': {
    exp_needed: 3714775,
    number_of_mystic_ores: 372,
    mora: 371478
  }
}

export const fiveStarWeaponAscension = {
  20: {
    mora: 10000,
    ascension_material: 5,
    common_material_1: 5,
    common_material_2: 3
  },
  40: {
    mora: 20000,
    ascension_material: 5,
    common_material_1: 18,
    common_material_2: 12
  },
  50: {
    mora: 30000,
    ascension_material: 9,
    common_material_1: 9,
    common_material_2: 9
  },
  60: {
    mora: 45000,
    ascension_material: 5,
    common_material_1: 18,
    common_material_2: 14
  },
  70: {
    mora: 55000,
    ascension_material: 9,
    common_material_1: 14,
    common_material_2: 9
  },
  80: {
    mora: 65000,
    ascension_material: 6,
    common_material_1: 27,
    common_material_2: 18
  }
}

export const fourStarWeaponExperience = {
  '1-20': {
    exp_needed: 81000,
    number_of_mystic_ores: 9,
    mora: 8100
  },
  '20-40': {
    exp_needed: 415125,
    number_of_mystic_ores: 42,
    mora: 41513
  },
  '40-50': {
    exp_needed: 418725,
    number_of_mystic_ores: 42,
    mora: 41873
  },
  '50-60': {
    exp_needed: 618400,
    number_of_mystic_ores: 62,
    mora: 61840
  },
  '60-70': {
    exp_needed: 866050,
    number_of_mystic_ores: 87,
    mora: 86605
  },
  '70-80': {
    exp_needed: 1166875,
    number_of_mystic_ores: 117,
    mora: 116688
  },
  '80-90': {
    exp_needed: 2476475,
    number_of_mystic_ores: 248,
    mora: 247648
  }
}

export const fourStarWeaponAscension = {
  20: {
    mora: 5000,
    ascension_material: 3,
    common_material_1: 3,
    common_material_2: 2
  },
  40: {
    mora: 15000,
    ascension_material: 3,
    common_material_1: 12,
    common_material_2: 8
  },
  50: {
    mora: 20000,
    ascension_material: 6,
    common_material_1: 6,
    common_material_2: 6
  },
  60: {
    mora: 30000,
    ascension_material: 3,
    common_material_1: 12,
    common_material_2: 9
  },
  70: {
    mora: 35000,
    ascension_material: 9,
    common_material_1: 9,
    common_material_2: 6
  },
  80: {
    mora: 45000,
    ascension_material: 4,
    common_material_1: 18,
    common_material_2: 12
  }
}

export const fiveStarArtifactExp = {
  '1-20': {
    exp: 270475,
    mora: 270475
  }
}

export const fourStarArtifactExp = {
  '1-16': {
    exp: 122675,
    mora: 122675
  }
}

export const Levels: ILevel[] = [
  {
    lvl: 1,
    isAscended: false
  },
  {
    lvl: 20,
    isAscended: false
  },
  {
    lvl: 20,
    isAscended: true
  },
  {
    lvl: 40,
    isAscended: false
  },
  {
    lvl: 40,
    isAscended: true
  },
  {
    lvl: 50,
    isAscended: false
  },
  {
    lvl: 50,
    isAscended: true
  },
  {
    lvl: 60,
    isAscended: false
  },
  {
    lvl: 60,
    isAscended: true
  },
  {
    lvl: 70,
    isAscended: false
  },
  {
    lvl: 70,
    isAscended: true
  },
  {
    lvl: 80,
    isAscended: false
  },
  {
    lvl: 80,
    isAscended: true
  },
  {
    lvl: 90,
    isAscended: false
  }
]
