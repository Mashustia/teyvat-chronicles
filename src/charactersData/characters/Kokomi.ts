import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, Books, BossSkillMaterial} from '../materialNames';
import {fillAscensionMaterials, fillTalentMaterials} from '../../utils/utils';

const Kokomi = {
  name: 'Kokomi',
  vision: Vision.HYDRO,
  ascension_materials: fillAscensionMaterials({
    gems: {
      1: Gem.HYDRO.VARUNADA_LAZURITE_SLIVER,
      2: Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT,
      3: Gem.HYDRO.VARUNADA_LAZURITE_CHUNK,
      4: Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossMaterials.DEW_OF_REPUDIATION,
    specialty: Rocks.SANGO_PEARL
  }),
  rarity: 5,
  talent_materials: fillTalentMaterials({
    books: {
      1: Books.TEACHINGS_OF_TRANSIENCE,
      2: Books.GUIDE_TO_TRANSIENCE,
      3: Books.PHILOSOPHIES_OF_TRANSIENCE,
    },
    materials: {
      1: Materials.SPECTRAL_HUSK,
      2: Materials.SPECTRAL_HEART,
      3: Materials.SPECTRAL_NUCLEUS,
    },
    bossMaterial: BossSkillMaterial.HELLFIRE_BUTTERFLY
  })
}

export default Kokomi
