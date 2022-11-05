import {Character, Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, Books, BossSkillMaterial} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Keqing = {
  name: Character.KEQING,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.LIGHTNING_PRISM,
    specialty: Rocks.COR_LAPIS
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_PROSPERITY,
      2: Books.GUIDE_TO_PROSPERITY,
      3: Books.PHILOSOPHIES_OF_PROSPERITY,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.RING_OF_BOREAS
  }),
  possible_teams: [
    [Character.KEQING, Character.FISCHL, Character.NAHIDA, Character.JEAN],
    [Character.KEQING, Character.FISCHL, Character.TRAVELER_DENDRO, Character.KAEDEHARA_KAZUHA],
    [Character.KEQING, Character.FISCHL, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KEQING, Character.BEIDOU, Character.SUCROSE, Character.XINGQIU],
    [Character.KEQING, Character.FISCHL, Character.YELAN, Character.ZHONGLI],
  ]
}

export default Keqing
