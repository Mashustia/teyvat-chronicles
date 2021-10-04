import {FC, ReactElement} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {DropdownButton} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {RouteName} from '../../const/consts';
import {IRouteParams} from '../../types/commonTypes';

const Header: FC<RouteComponentProps<IRouteParams>> = ({history, match}): ReactElement => {
  console.log(history, match)
  const {t} = useTranslation()
  const handleGoBack = () => history.push(RouteName.DEFAULT)

  const goBackButton = () => (
    <Button variant='secondary' size='sm' onClick={handleGoBack}>
      {t('header:go_back')}
    </Button>
  )

  return (
    <header className='header mb-3'>
      <div className='d-flex flex-nowrap justify-content-between px-2'>
        <DropdownButton id='dropdown-basic-button' title={t('header:language')} variant='secondary' size='sm'>
          <Dropdown.Item href='#/action-1'>English</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Russian</Dropdown.Item>
        </DropdownButton>

        <Switch>
          <Route exact path={RouteName.CHARACTER} render={goBackButton} />
        </Switch>
      </div>
    </header>
  )
}

export default withRouter(Header)
