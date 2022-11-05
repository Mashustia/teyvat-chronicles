import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Flower, Gem, Materials} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const KukiShinobu = {
  name: Character.KUKI_SHINOBU,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossMaterials.RUNIC_FANG,
    specialty: Flower.NAKU_WEED
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.TEARS_OF_THE_CALAMITOUS_GOD
  }),
  possible_teams: [
    [Character.NAHIDA, Character.XINGQIU, Character.KUKI_SHINOBU, Character.KAEDEHARA_KAZUHA],
    [Character.NAHIDA, Character.KAMISATO_AYATO, Character.KUKI_SHINOBU, Character.KAEDEHARA_KAZUHA],
  ]
}

export default KukiShinobu
