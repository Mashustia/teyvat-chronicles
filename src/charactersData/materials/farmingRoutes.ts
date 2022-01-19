import {Languages} from '../../const/consts';
import {IFarmingRoute, IFarmingRoutes} from '../types';
import {Flower, Materials, Rocks} from './materialNames';

export const Whopperflower: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/qxc67n/5_efficient_whopperflower_farming_routes/',
    'https://www.reddit.com/r/Genshin_Impact/comments/kyv8q0/in_preparations_for_hu_tao_i_made_an_efficient/'
  ]
}

export const Qingxin: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/1917357/'
  ]
}

export const SangoPearl: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/977597',
    'https://www.hoyolab.com/article/975930'
  ]
}

export const Specter: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/1086974'
  ]
}

export const AmakumoFruit: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/803552',
    'https://www.reddit.com/r/GenshinImpactTips/comments/phnh3y/farm_for_baal_amakumo_fruit_simple_route_map/'
  ]
}

export const SakuraBloom: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/628657',
    'https://www.hoyolab.com/article/620911'
  ]
}

export const NakuWeed: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/676561',
    'https://www.hoyolab.com/article/612586',
    'https://www.hoyolab.com/article/640517'
  ]
}

export const CrystalMarrow: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/676566',
    'https://www.hoyolab.com/article/649715'
  ]
}

export const Nobushi: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/633216',
    'https://www.hoyolab.com/article/623845'
  ]
}

export const farmingRoutes: IFarmingRoutes = {
  [Materials.WHOPPERFLOWER_NECTAR]: {...Whopperflower},
  [Materials.SHIMMERING_NECTAR]: {...Whopperflower},
  [Materials.ENERGY_NECTAR]: {...Whopperflower},
  [Flower.QINGXIN]: {...Qingxin},
  [Rocks.SANGO_PEARL]: {...SangoPearl},
  [Materials.SPECTRAL_HUSK]: {...Specter},
  [Materials.SPECTRAL_HEART]: {...Specter},
  [Materials.SPECTRAL_NUCLEUS]: {...Specter},
  [Flower.AMAKUMO_FRUIT]: {...AmakumoFruit},
  [Flower.SAKURA_BLOOM]: {...SakuraBloom},
  [Flower.NAKU_WEED]: {...NakuWeed},
  [Rocks.CRYSTAL_MARROW]: {...CrystalMarrow},
  [Materials.KAGEUCHI_HANDGUARD]: {...Nobushi},
  [Materials.FAMED_HANDGUARD]: {...Nobushi},
  [Materials.OLD_HANDGUARD]: {...Nobushi},
}
