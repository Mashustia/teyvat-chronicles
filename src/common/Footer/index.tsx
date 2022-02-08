import {FC} from 'react'

import {useTranslation} from 'react-i18next';

const Footer: FC = () => {
  const {t} = useTranslation('footer');
  return (
    <footer className='p-2'>
      <div className='d-flex justify-content-center flex-wrap'>
        <p className='d-block mb-0 me-1 mb-2'>{t('footer:contacts')}</p>
        <a href='mailto: marshmallowgoon21@gmail.com' className='link'>marshmallowgoon21@gmail.com</a>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='d-block mb-0'>{t('footer:trademark')}</p>
      </div>
    </footer>
  )
}

export default Footer
