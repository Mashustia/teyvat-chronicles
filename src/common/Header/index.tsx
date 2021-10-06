import {FC, ReactElement} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {useTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router';

import {Languages, RouteName} from '../../const/consts';
import Flags from './components/flags';
import {IHeaderProps as IProps} from './components/types';

const Header: FC<IProps> = (props): ReactElement => {
  const {t, i18n: {language, languages, changeLanguage, resolvedLanguage}} = useTranslation()
  const {history} = props

  const handleGoBack = () => history.push(RouteName.DEFAULT)

  const goBackButton = () => (
    <Button variant='secondary' size='sm' onClick={handleGoBack}>
      {t('header:go_back')}
    </Button>
  )

  // const handleLanguageChange = (lng: string) => (e: MouseEvent<HTMLLinkElement>): Promise<void> => {
  //   console.log(lng)
  //   e.preventDefault()
  //   return changeLanguage(lng).then(() => window.localStorage.setItem(lookupLocalStorage, lng))
  // }

  console.log(languages, language, useTranslation(), resolvedLanguage)
  return (
    <header className='header mb-3'>
      <div className='d-flex flex-nowrap justify-content-between px-2'>
        <Dropdown>
          <Dropdown.Toggle variant='secondary' id='dropdown-basic' size='sm'>
            <Flags language={resolvedLanguage}/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeLanguage(Languages.EN)}>{<Flags language={Languages.EN}/>}</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage(Languages.RU)}>{<Flags language={Languages.RU}/>}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Switch>
          <Route exact path={RouteName.CHARACTER} render={goBackButton}/>
        </Switch>
      </div>
    </header>
  )
}

export default withRouter(Header)
