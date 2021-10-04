import {FC} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Main from './views/Main';
import Footer from './common/Footer';

const App: FC = () => {
  return (
    <div className='app pt-2'>
      <BrowserRouter>
        <Route exact={true} component={Main} />
        <Route exact={true} component={Footer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
