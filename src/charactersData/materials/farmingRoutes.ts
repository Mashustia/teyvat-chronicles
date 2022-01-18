import {Languages} from '../../const/consts';
import {IFarmingRoute, IFarmingRoutes} from '../types';
import {Materials} from './materialNames';

export const Whopperflower: IFarmingRoute = {
  [Languages.EN]: [
    'https://www.reddit.com/r/Genshin_Impact/comments/qxc67n/5_efficient_whopperflower_farming_routes/',
    'https://www.reddit.com/r/Genshin_Impact/comments/kyv8q0/in_preparations_for_hu_tao_i_made_an_efficient/'
  ]
}

export const farmingRoutes: IFarmingRoutes = {
  [Materials.WHOPPERFLOWER_NECTAR]: {...Whopperflower},
  [Materials.SHIMMERING_NECTAR]: {...Whopperflower},
  [Materials.ENERGY_NECTAR]: {...Whopperflower},
}
