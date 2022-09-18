import {FC, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// The order of App.css import is important
import './App.css';

import Main from './views/Main';
import Footer from './common/Footer';
import Header from './common/Header';
import {RouteName} from './const/consts';

const App: FC = () => (
  <div className='app pt-2' data-testid='app'>
    <Suspense fallback='Loading...'>
      <BrowserRouter>
        <Routes>
          <Route path={RouteName.ALL} element={<Header/>}/>
        </Routes>
        <Routes>
          <Route path={RouteName.ALL} element={<Main/>}/>
        </Routes>
        <Routes>
          <Route path={RouteName.ALL} element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </div>
);

export default App;
