import {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import {RouteName} from './const/consts';
import Layout from './views/Layout';
import Character from './views/Character';

const App: FC = () => {
  return (
    <div className='App py-3'>
      <BrowserRouter>
        <Switch>
          <Route exact path={RouteName.DEFAULT} component={Layout} />
          <Route exact path={RouteName.CHARACTER} component={Character} />

          <Route component={Layout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
