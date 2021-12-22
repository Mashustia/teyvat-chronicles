import {Character, Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, Books, BossSkillMaterial} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Yanfei = {
  name: Character.YANFEI,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.TREASURE_HOARDER_INSIGNIA,
      2: Materials.SILVER_RAVEN_INSIGNIA,
      3: Materials.GOLDEN_RAVEN_INSIGNIA,
    },
    bossMaterial: BossMaterials.JUVENILE_JADE,
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
    bossMaterial: BossSkillMaterial.BLOODJADE_BRANCH
  }),
  possible_teams: [
    [Character.YANFEI, Character.XINGQIU, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.YANFEI, Character.XINGQIU, Character.SUCROSE, Character.BENNETT],
    [Character.YANFEI, Character.XINGQIU, Character.SUCROSE, Character.KOKOMI],
    [Character.YANFEI, Character.XINGQIU, Character.GANYU, Character.BENNETT],
    [Character.YANFEI, Character.XINGQIU, Character.ZHONGLI, Character.BENNETT],
  ]
}

export default Yanfei
