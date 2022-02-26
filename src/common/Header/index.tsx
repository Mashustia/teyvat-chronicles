import {FC, ReactElement, useRef, useState} from 'react'
import {useTranslation} from 'react-i18next';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';

import {lookupLocalStorage, RouteName} from '../../const/consts';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector';
import Burger from '../Navigarion/components/Burger';
import Sidebar from '../Navigarion/components/Sidebar';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const listItemStyle = 'text-left p-2 ps-3 pointer'

const Header: FC = (): ReactElement => {
  const {t, i18n} = useTranslation(['header', 'language', 'menu'])
  const navigate = useNavigate();

  const [isSidebarShown, toggleIsSidebarShown] = useState(false);
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => toggleIsSidebarShown(false))

  const handleClick = () => toggleIsSidebarShown(!isSidebarShown);

  const handleGoBack = () => navigate(RouteName.DEFAULT)

  const goBackButton = (
    <Button onClick={handleGoBack} classes='ml-auto'>
      {t('header:go_back')}
    </Button>
  )

  const handleLanguageChange = (lng: string) => i18n.changeLanguage(lng).then(() => window.localStorage.setItem(lookupLocalStorage, lng))

  const renderLanguageSelector = (
    <LanguageSelector
      languages={[...i18n.languages]}
      onSelect={handleLanguageChange}
      activeLanguage={i18n.language}
    />
  )

  const renderSidebar = isSidebarShown && (
    <Sidebar innerRef={sidebarRef}>
      <div className='text-left ps-2'>
        <Burger classes='me-2 mb-1' onClick={handleClick}/>
      </div>

      <Link className={listItemStyle} to={RouteName.DEFAULT} onClick={handleClick}>
        {t('menu:characters')}
      </Link>
      <Link className={listItemStyle} to={RouteName.NEWS} onClick={handleClick}>
        {t('menu:news')}
      </Link>
    </Sidebar>
  )

  return (
    <header className='header mb-2'>
      <div className='d-flex flex-nowrap px-2'>
        <div className='relative'>
          <Burger classes='me-2' onClick={handleClick}/>
          {renderSidebar}
        </div>

        {renderLanguageSelector}

        <Routes>
          <Route path={RouteName.NEWS} element={null}/>
          <Route path={RouteName.CHARACTER} element={goBackButton}/>
        </Routes>
      </div>
    </header>
  )
}

export default Header
