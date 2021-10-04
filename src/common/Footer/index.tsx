import {FC} from 'react'

import './Footer.css'
import {useTranslation} from 'react-i18next';

const Footer: FC = () => {
  const {t} = useTranslation();
  return (
    <footer className='footer p-2'>
      <div className='d-flex flex-nowrap justify-content-center'>
        <p className='d-block mb-0 me-1'>{t('footer:contacts')} </p>
        <a href='mailto: marshmallowgoon21@gmail.com' className='footer-link'>marshmallowgoon21@gmail.com</a>
      </div>
      <p className='d-flex flex-nowrap justify-content-center mb-0 footer-rights'>{t('footer:rights')}</p>
    </footer>
  )
}

export default Footer
