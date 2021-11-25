import {FC, ReactElement} from 'react'
import {Dropdown} from 'react-bootstrap'
import {useTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router-dom';

import {lookupLocalStorage, RouteName} from '../../const/consts';
import Flags from './components/flags';
import {IHeaderProps as IProps} from './components/types';
import Button from '../Button';

const Header: FC<IProps> = (props: IProps): ReactElement => {
  const {t, i18n} = useTranslation(['header', 'language'])
  const {history} = props

  const handleGoBack = () => history.push(RouteName.DEFAULT)

  const goBackButton = () => (
    <Button onClick={handleGoBack}>
      {t('header:go_back')}
    </Button>
  )

  const handleLanguageChange = (lng: string) => () => i18n.changeLanguage(lng).then(() => window.localStorage.setItem(lookupLocalStorage, lng))

  return (
    <header className='header mb-2'>
      <div className='d-flex flex-nowrap justify-content-between px-2'>
        <Dropdown>
          <Dropdown.Toggle variant='secondary' id='dropdown-basic' size='sm'>
            <Flags language={i18n.language}/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {i18n.languages.map((lng: string) => (
              <Dropdown.Item
                key={lng}
                onClick={handleLanguageChange(lng)}
              >
                {<Flags language={lng}/>}
              </Dropdown.Item>
            ))}

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
