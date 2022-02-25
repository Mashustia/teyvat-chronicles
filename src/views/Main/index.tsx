import {FC} from 'react'
import {Route, Routes} from 'react-router-dom';

import {RouteName} from '../../const/consts';
import Layout from '../Layout';
import Character from '../Character';
import News from '../News';
import './Main.css'

const Main: FC = (children) => {
  return (
    <main role='main' className='main mx-auto'>
      <Routes>
        <Route path={RouteName.DEFAULT} element={<Layout/>} />
        <Route path={RouteName.NEWS} element={<News/>} />
        <Route path={RouteName.CHARACTER} element={<Character/>} />

        <Route element={<Layout/>} />
      </Routes>
    </main>
  )
}

export default Main
