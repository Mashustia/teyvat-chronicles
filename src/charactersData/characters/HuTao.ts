import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Flower, Gem, Materials} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const HuTao = {
  name: Character.HU_TAO,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.JUVENILE_JADE,
    specialty: Flower.SILK_FLOWER
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.SHARD_OF_A_FOUL_LEGACY
  }),
  possible_teams: [
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.ALBEDO],
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.SUCROSE],
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.YELAN],
    [Character.HU_TAO, Character.XINGQIU, Character.ZHONGLI, Character.GANYU],
  ]
}

export default HuTao
