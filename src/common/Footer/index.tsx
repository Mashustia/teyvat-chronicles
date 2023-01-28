import {FC} from 'react'

import {useTranslation} from 'react-i18next';

const Footer: FC = () => {
  const {t} = useTranslation('footer');

  return (
    <footer className='p-2'>
      <div className='d-flex justify-content-center flex-wrap'>
        <p className='d-block mb-0 me-1 mb-2'>{t('footer:contacts')}</p>
        <a href='mailto: teyvatchroniclesapp@gmail.com' className='link'>teyvatchroniclesapp@gmail.com</a>
      </div>
      <div className='d-flex justify-content-center flex-wrap'>
        <a href='https://github.com/Mashustia/teyvat-chronicles' className='link' target='_blank' rel='noreferrer'>
          {t('footer:github')}
        </a>
      </div>
      <div className='d-flex justify-content-center flex-column'>
        <p className='d-block mb-0'>{t('footer:trademark_1')}</p>
        <p className='d-block mb-0'>{t('footer:trademark_2')}</p>
      </div>
    </footer>
  )
}

export default Footer
