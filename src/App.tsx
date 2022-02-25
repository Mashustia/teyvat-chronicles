import {FC, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Main from './views/Main';
import Footer from './common/Footer';
import Header from './common/Header';
import {RouteName} from './const/consts';

const App: FC = () => {
  return (
    <div className='app pt-2'>
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
};

export default App;
