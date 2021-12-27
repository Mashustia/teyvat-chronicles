import {Character, Vision} from '../../const/consts';
import {
  Books,
  BossMaterials,
  BossSkillMaterial,
  Flower,
  Gem,
  Materials
} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Yoimiya = {
  name: Character.YOIMIYA,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossMaterials.SMOLDERING_PEARL,
    specialty: Flower.NAKU_WEED
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_TRANSIENCE,
      2: Books.GUIDE_TO_TRANSIENCE,
      3: Books.PHILOSOPHIES_OF_TRANSIENCE,
    },
    materials: {
      1: Materials.DIVINING_SCROLL,
      2: Materials.SEALED_SCROLL,
      3: Materials.FORBIDDEN_CURSE_SCROLL,
    },
    bossMaterial: BossSkillMaterial.DRAGON_LORDS_CROWN
  }),
  possible_teams: [
    [Character.YOIMIYA, Character.XINGQIU, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.YOIMIYA, Character.XINGQIU, Character.BEIDOU, Character.BENNETT],
    [Character.YOIMIYA, Character.VENTI, Character.MONA, Character.BENNETT],
    [Character.YOIMIYA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.YOIMIYA, Character.BEIDOU, Character.FISCHL, Character.BENNETT],
    [Character.YOIMIYA, Character.BEIDOU, Character.FISCHL, Character.ZHONGLI],
    [Character.YOIMIYA, Character.BEIDOU, Character.FISCHL, Character.JEAN],
  ]
}

export default Yoimiya
