import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';


const Page404: FC = (): ReactElement => {
  const {t} = useTranslation(['common'])


  return (
    <div>
      <h1>{t('common:page_404')}</h1>
    </div>
  )
}

export default Page404
