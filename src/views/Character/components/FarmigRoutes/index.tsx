import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {Languages} from '../../../../const/consts';
import {IFarmingRoutes} from './types';

const FarmingRoutes: FC<IFarmingRoutes> = ({route}) => {
  const {t, i18n} = useTranslation(['common'])

  const getRoutes = (): string[] | undefined => {
    if (route?.[i18n.language]?.length > 0) return route?.[i18n.language]

    if (route?.[Languages.EN]?.length > 0) return route?.[Languages.EN]

    return undefined
  }

  const routesSelectedByLanguage = getRoutes()

  const renderRouteLinks = () => {
    return routesSelectedByLanguage?.map((link: string, index) => (
      <div key={link}>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='link'
        >{t('common:link_with_counter', {number: index+1})}</a>
      </div>
    ))
  }

  return routesSelectedByLanguage ? (
    <div className='grid-2 grid-gap-x-lg mt-3'>
      <p className='fw-bold mb-0 text-right'>{t('common:farming_routes')}:</p>
      <div className='text-left'>
        {renderRouteLinks()}
      </div>
    </div>
  ) : null
}

export default FarmingRoutes
