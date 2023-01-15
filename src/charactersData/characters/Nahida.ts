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

const Nahida = {
  name: Character.NAHIDA,
  vision: Vision.DENDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.DENDRO.NAGADUS_EMERALD_SLIVER,
      2: Gem.DENDRO.NAGADUS_EMERALD_FRAGMENT,
      3: Gem.DENDRO.NAGADUS_EMERALD_CHUNK,
      4: Gem.DENDRO.NAGADUS_EMERALD_GEMSTONE
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossMaterials.QUELLED_CREEPER,
    specialty: Flower.KALPALATA_LOTUS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_INGENUITY,
      2: Books.GUIDE_TO_INGENUITY,
      3: Books.PHILOSOPHIES_OF_INGENUITY,
    },
    materials: {
      1: Materials.FUNGAL_SPORES,
      2: Materials.LUMINESCENT_POLLEN,
      3: Materials.CRYSTALLINE_CYST_DUST,
    },
    bossMaterial: BossSkillMaterial.PUPPET_STRINGS
  }),
  possible_teams: [
    [Character.NAHIDA, Character.NILOU, Character.KOKOMI, Character.TRAVELER_DENDRO],
    [Character.NAHIDA, Character.KUKI_SHINOBU, Character.XINGQIU, Character.ZHONGLI],
    [Character.NAHIDA, Character.THOMA, Character.XINGQIU, Character.KOKOMI],
    [Character.NAHIDA, Character.RAIDEN, Character.KUKI_SHINOBU, Character.KAEDEHARA_KAZUHA],
    [Character.NAHIDA, Character.FISCHL, Character.KEQING, Character.JEAN],
  ]
}

export default Nahida
