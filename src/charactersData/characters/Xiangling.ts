import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Flower, Gem, Materials} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Xiangling = {
  name: Character.XIANGLING,
  vision: Vision.PYRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.PYRO.AGNIDUS_AGATE_SLIVER,
      2: Gem.PYRO.AGNIDUS_AGATE_FRAGMENT,
      3: Gem.PYRO.AGNIDUS_AGATE_CHUNK,
      4: Gem.PYRO.AGNIDUS_AGATE_GEMSTONE
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossMaterials.EVERFLAME_SEED,
    specialty: Flower.JUEYUN_CHILI
  }),
  rarity: 4,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_DILIGENCE,
      2: Books.GUIDE_TO_DILIGENCE,
      3: Books.PHILOSOPHIES_OF_DILIGENCE,
    },
    materials: {
      1: Materials.SLIME_CONDENSATE,
      2: Materials.SLIME_SECRETIONS,
      3: Materials.SLIME_CONCENTRATE,
    },
    bossMaterial: BossSkillMaterial.DVALINS_CLAWN
  }),
  possible_teams: [
    [Character.CHONGYUN, Character.XINGQIU, Character.XIANGLING, Character.BENNETT],
    [Character.TARTAGLIA, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KLEE, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.RAIDEN, Character.XIANGLING, Character.XINGQIU, Character.BENNETT],
    [Character.XIANGLING, Character.KAMISATO_AYAKA, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.XIANGLING, Character.YELAN, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.SUCROSE, Character.XIANGLING, Character.KOKOMI, Character.FISCHL],
  ]
}

export default Xiangling
