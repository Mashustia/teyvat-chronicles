import {FC} from 'react'
import {useTranslation} from 'react-i18next';

import {IMapProps as IProps} from './types';

const Map: FC<IProps> = ({name, map_link}) => {
  const {t} = useTranslation(['materials'])

  return (
    <iframe
      src={`https://genshin-impact-map.appsample.com/location?${map_link}&no_brand=1&no_heading=1`}
      height='155'
      width='260'
      frameBorder='0'
      title={t(`materials:${name}`)}
    />
  )
}

export default Map
