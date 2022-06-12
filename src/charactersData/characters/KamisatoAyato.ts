import {Character, Vision} from '../../const/consts';
import {Books, BossMaterials, BossSkillMaterial, Flower, Gem, Materials,} from '../materials/materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const KamisatoAyato = {
  name: Character.KAMISATO_AYATO,
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossMaterials.DEW_OF_REPUDIATION,
    specialty: Flower.SAKURA_BLOOM
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_ELEGANCE,
      2: Books.GUIDE_TO_ELEGANCE,
      3: Books.PHILOSOPHIES_OF_ELEGANCE,
    },
    materials: {
      1: Materials.OLD_HANDGUARD,
      2: Materials.KAGEUCHI_HANDGUARD,
      3: Materials.FAMED_HANDGUARD,
    },
    bossMaterial: BossSkillMaterial.MUDRA_OF_THE_MALEFIC_GENERAL
  }),
  possible_teams: [
    [Character.KAMISATO_AYATO, Character.XIANGLING, Character.KAEDEHARA_KAZUHA, Character.BENNETT],
    [Character.KAMISATO_AYATO, Character.XIANGLING, Character.XINGQIU, Character.BENNETT],
    [Character.KAMISATO_AYATO, Character.XIANGLING, Character.JEAN, Character.BENNETT],
    [Character.KAMISATO_AYATO, Character.VENTI, Character.ZHONGLI, Character.BENNETT],
    [Character.KAMISATO_AYATO, Character.KAEDEHARA_KAZUHA, Character.YUN_JIN, Character.KOKOMI],
    [Character.KAMISATO_AYATO, Character.BEIDOU, Character.FISCHL, Character.JEAN],
    [Character.KAMISATO_AYATO, Character.FISCHL, Character.YUN_JIN, Character.ZHONGLI],
    [Character.KAMISATO_AYATO, Character.KAMISATO_AYAKA, Character.GANYU, Character.JEAN],
  ]
}

export default KamisatoAyato
