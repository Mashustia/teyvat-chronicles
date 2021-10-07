import {FC, Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Main from './views/Main';
import Footer from './common/Footer';
import Header from './common/Header';

const App: FC = () => {
  return (
    <div className='app pt-2'>
      <Suspense fallback='Loading...'>
        <BrowserRouter>
          <Route exact={true} component={Header} />
          <Route exact={true} component={Main} />
          <Route exact={true} component={Footer} />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
