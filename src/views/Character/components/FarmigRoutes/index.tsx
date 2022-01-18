import {FC, Fragment} from 'react';
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
    return routesSelectedByLanguage?.map((link: string, index) => {
      const last = routesSelectedByLanguage?.length === index+1

      return (
        <Fragment key={link}>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='link'
          >{t('common:link_with_counter', {number: index+1})}</a>

          {!last && ', '}
        </Fragment>
      )
    })
  }

  return routesSelectedByLanguage ? (
    <div className='d-flex justify-content-center mt-2'>
      <p className='fw-bold mb-0 me-2 flex-shrink-0'>{t('common:farming_routes')}:</p>
      <div className='text-left'>
        {renderRouteLinks()}
      </div>
    </div>
  ) : null
}

export default FarmingRoutes
