import {FC} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import {Section} from './const/consts';
import Layout from './views/Layout';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={Section.CHARACTER} component={Layout} />

          <Route component={Layout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
