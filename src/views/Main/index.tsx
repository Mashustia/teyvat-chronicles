import {FC} from 'react'
import {Route, Switch} from 'react-router-dom';

import './Main.css'
import {RouteName} from '../../const/consts';
import Layout from '../Layout';
import Character from '../Character';

const Main: FC = (children) => {
  return (
    <main role='main'>
      <Switch>
        <Route exact path={RouteName.DEFAULT} component={Layout} />
        <Route exact path={RouteName.CHARACTER} component={Character} />

        <Route component={Layout} />
      </Switch>
    </main>
  )
}

export default Main
