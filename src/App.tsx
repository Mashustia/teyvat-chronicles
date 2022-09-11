import {FC, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './views/Main';
import Footer from './common/Footer';
import Header from './common/Header';
import {RouteName} from './const/consts';
import charactersStore from './store/modules/characters/characters';
import CHARACTERS from './charactersData';

import './App.css';

const App: FC = () => {
  charactersStore.setCharacters(CHARACTERS)

  return (
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
};

export default App;
