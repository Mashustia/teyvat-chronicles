import {FC, ReactElement} from 'react'
import {useTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router-dom';

import {lookupLocalStorage, RouteName} from '../../const/consts';
import {IHeaderProps as IProps} from './components/types';
import Button from '../Button';
import LanguageSelector from '../LanguageSelector';
import Burger from '../Navigarion/components/Burger';

const Header: FC<IProps> = (props: IProps): ReactElement => {
  const {t, i18n} = useTranslation(['header', 'language'])
  const {history} = props

  const handleGoBack = () => history.push(RouteName.DEFAULT)

  const goBackButton = () => (
    <Button onClick={handleGoBack} classes='ml-auto'>
      {t('header:go_back')}
    </Button>
  )

  const handleLanguageChange = (lng: string) => i18n.changeLanguage(lng).then(() => window.localStorage.setItem(lookupLocalStorage, lng))

  return (
    <header className='header mb-2'>
      <div className='d-flex flex-nowrap px-2'>
        <Burger classes='me-2' />

        <LanguageSelector
          languages={[...i18n.languages]}
          onSelect={handleLanguageChange}
          activeLanguage={i18n.language}
        />

        <Switch>
          <Route exact path={RouteName.CHARACTER} render={goBackButton}/>
        </Switch>
      </div>
    </header>
  )
}

export default withRouter(Header)
