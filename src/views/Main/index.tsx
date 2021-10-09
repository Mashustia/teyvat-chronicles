import {FC} from 'react'
import {Route, Switch} from 'react-router-dom';

import {RouteName} from '../../const/consts';
import Layout from '../Layout';
import Character from '../Character';
import './Main.css'

const Main: FC = (children) => {
  return (
    <main role='main' className='main'>
      <Switch>
        <Route exact path={RouteName.DEFAULT} component={Layout} />
        <Route exact path={RouteName.CHARACTER} component={Character} />

        <Route component={Layout} />
      </Switch>
    </main>
  )
}

export default Main
