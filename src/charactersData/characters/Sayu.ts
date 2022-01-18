import {Character, Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, Books, BossSkillMaterial} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Sayu = {
  name: Character.SAYU,
  vision: Vision.ANEMO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER,
      2: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT,
      3: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK,
      4: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossMaterials.MARIONETTE_CORE,
    specialty: Rocks.CRYSTAL_MARROW
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_LIGHT,
      2: Books.GUIDE_TO_LIGHT,
      3: Books.PHILOSOPHIES_OF_LIGHT,
    },
    materials: {
      1: Materials.WHOPPERFLOWER_NECTAR,
      2: Materials.SHIMMERING_NECTAR,
      3: Materials.ENERGY_NECTAR,
    },
    bossMaterial: BossSkillMaterial.GILDED_SCALE
  }),
  possible_teams: [
    [Character.DILUC, Character.XINGQIU, Character.ZHONGLI, Character.SAYU],
    [Character.YOIMIYA, Character.XINGQIU, Character.ZHONGLI, Character.SAYU],
    [Character.KAMISATO_AYAKA, Character.XINGQIU, Character.ROSARIA, Character.SAYU],
    [Character.KLEE, Character.XINGQIU, Character.THOMA, Character.SAYU],
    [Character.KAEYA, Character.CHONGYUN, Character.XINGQIU, Character.SAYU],
  ]
}

export default Sayu
