import {FC, ReactElement, useRef, useState} from 'react'
import {useTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router-dom';

import {lookupLocalStorage, RouteName} from '../../const/consts';
import {IHeaderProps as IProps} from './components/types';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector';
import Burger from '../Navigarion/components/Burger';
import Sidebar from '../Navigarion/components/Sidebar';
import {useOnClickOutside} from '../../Hooks/useOnClickOutside';

const Header: FC<IProps> = (props: IProps): ReactElement => {
  const {t, i18n} = useTranslation(['header', 'language'])
  const {history} = props

  const [isSidebarShown, toggleIsSidebarShown] = useState(false);
  const sidebarRef = useRef(null);

  useOnClickOutside(sidebarRef, () => toggleIsSidebarShown(false))

  const handleClick = () => toggleIsSidebarShown(!isSidebarShown);

  const handleGoBack = () => history.push(RouteName.DEFAULT)

  const goBackButton = () => (
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
      <li className='d-flex flex-nowrap'>
        <Burger classes='me-2' onClick={handleClick}/>
      </li>

      <li className='p-4'>Персонажи</li>
      <li className='p-4'>Новости</li>
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

        <Switch>
          <Route exact path={RouteName.CHARACTER} render={goBackButton}/>
        </Switch>
      </div>
    </header>
  )
}

export default withRouter(Header)
