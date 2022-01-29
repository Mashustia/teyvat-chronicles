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

export const TreasureHoarder = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/lk89ld/85_treasure_hoarders_route_in_4_minutes_guide/',
    'https://www.hoyolab.com/article/1854372'
  ]
}

export const SeaGanoderma = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/qufq4g/sea_ganoderma_simple_route_map_up_to_146_sea/',
    'https://www.reddit.com/r/Genshin_Impact/comments/nxi7lx/sea_ganoderma_route_in_5_minutes_simple_route_map/'
  ]
}

export const DamagedMask = {
  [Languages.EN]: [
    'https://fragstrat.com/genshin-impact/damaged-mask',
    'https://www.reddit.com/r/GenshinImpactTips/comments/l4li17/how_to_get_hilichurl_masks_arrowheads_scrolls_in/'
  ]
}

export const GlazeLily = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/lourqh/farm_for_ningguang_ascension_material_3_minutes/'
  ]
}

export const DandelionSeed = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/qvwt7d/dandelion_seeds_simple_route_maps_farm_for_eula/'
  ]
}

export const Slime = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/l74oq6/slime_farming_route_genshin_impact_slime/',
    'https://www.reddit.com/r/GenshinImpactTips/comments/nklo77/slimes_farming_route_simple_route_map_guide/'
  ]
}

export const WindwheelAster = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/oi22v7/farm_for_your_new_bennett_windwheel_aster_simple/'
  ]
}

export const CorLapis = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/1979305',
    'https://www.hoyolab.com/article/1958371'
  ]
}

export const CallaLily = {
  [Languages.EN]: [
    'https://genshinpedia.ru/liliya-kalla/'
  ]
}

export const Violetgrass = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/lfa6fl/violetgrass_farming_route_around_63_violetgrass/'
  ]
}

export const SealedScroll = {
  [Languages.EN]: [
    'https://fragstrat.com/genshin-impact/samachurls-locations'
  ]
}

export const Valberry = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/m0jyji/72_valberry_farming_route_genshin_impact_rosaria/'
  ]
}

export const SergeantsInsignia = {
  [Languages.EN]: [
    'https://fragstrat.com/genshin-impact/fatui-locations'
  ]
}

export const Dendrobium = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/796862',
    'https://www.hoyolab.com/article/799091'
  ]
}

export const NoctilucousJade = {
  [Languages.EN]: [
    'https://www.hoyolab.com/article/2034248'
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
  [Materials.TREASURE_HOARDER_INSIGNIA]: {...TreasureHoarder},
  [Materials.SILVER_RAVEN_INSIGNIA]: {...TreasureHoarder},
  [Materials.GOLDEN_RAVEN_INSIGNIA]: {...TreasureHoarder},
  [Flower.SEA_GANODERMA]: {...SeaGanoderma},
  [Materials.DAMAGED_MASK]: {...DamagedMask},
  [Flower.GLAZE_LILY]: {...GlazeLily},
  [Flower.DANDELION_SEED]: {...DandelionSeed},
  [Materials.SLIME_SECRETIONS]: {...Slime},
  [Materials.SLIME_CONDENSATE]: {...Slime},
  [Materials.SLIME_CONCENTRATE]: {...Slime},
  [Flower.WINDWHEEL_ASTER]: {...WindwheelAster},
  [Rocks.COR_LAPIS]: {...CorLapis},
  [Flower.CALLA_LILY]: {...CallaLily},
  [Flower.VIOLETGRASS]: {...Violetgrass},
  [Materials.DIVINING_SCROLL]: {...SealedScroll},
  [Materials.SEALED_SCROLL]: {...SealedScroll},
  [Materials.FORBIDDEN_CURSE_SCROLL]: {...SealedScroll},
  [Flower.VALBERRY]: {...Valberry},
  [Materials.RECRUITS_INSIGNIA]: {...SergeantsInsignia},
  [Materials.SERGEANTS_INSIGNIA]: {...SergeantsInsignia},
  [Materials.LIEUTENANTS_INSIGNIA]: {...SergeantsInsignia},
  [Flower.DENDROBIUM]: {...Dendrobium},
  [Rocks.NOCTILUCOUS_JADE]: {...NoctilucousJade},
}
