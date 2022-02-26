import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';

import './Page404.css'

const Page404: FC = (): ReactElement => {
  const {t} = useTranslation(['common'])

  return (
    <h1 className='fs-3 mb-0 absolute page-404'>{t('common:page_404')}</h1>
  )
}

export default Page404
