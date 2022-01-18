import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Gem, Materials, Rocks} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Beidou = {
  name: Character.BEIDOU,
  vision: Vision.ELECTRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER,
      2: Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT,
      3: Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK,
      4: Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossMaterials.LIGHTNING_PRISM,
    specialty: Rocks.NOCTILUCOUS_JADE
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_GOLD,
      2: Books.GUIDE_TO_GOLD,
      3: Books.PHILOSOPHIES_OF_GOLD,
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossSkillMaterial.DVALINS_SIGH
  }),
  possible_teams: [
    [Character.BEIDOU, Character.FISCHL, Character.XINGQIU, Character.SUCROSE],
    [Character.TARTAGLIA, Character.BEIDOU, Character.FISCHL, Character.JEAN],
    [Character.KEQING, Character.BEIDOU, Character.SUCROSE, Character.XINGQIU],
    [Character.EULA, Character.BEIDOU, Character.FISCHL, Character.DIONA],
  ]
}

export default Beidou
