import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Shoe from './Shoe';
import MainDefault from './MainDefault';
import Banner from './Banner';
import '../styles/Main.css';
import Login from './Login';
import MyInfo from './MyInfo';
import Join from './Join';

import ItemList from './Itemlist';
import ItemDetail from './ItemDetail';
import PurchaseList from './PurchaseList';
import ShoeGif from './ShoeGif';

export default function Main({ onLoginSubmit, isLogin, loginInfo, onJoin, onDelete, handleLogin }) {
  return (
    <main className='mainContent'>
      <Routes>
        <Route path='/' element={<MainDefault />} />
        <Route path='/tmproject' element={<MainDefault />} />
      </Routes>
      <div className='mainDefault'>
        <Routes>
          {/* <Route path="/category/shoes" element={<Shoe />} /> */}
          <Route path='/category/banner' element={<Banner />} />
          <Route path='/product/ShoeGif' element={<ShoeGif />} />

          <Route path='/category/ItemList' element={<ItemList />} />
          <Route path='/category/ItemDetail' element={<ItemDetail />} />
          <Route path='/category/PurchaseList' element={<PurchaseList />} />

          <Route path='/join' element={<Join onJoin={onJoin} />} />
          <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} handleLogin={handleLogin} />} />
          <Route path='/myinfo' element={<MyInfo onLoginSubmit={onLoginSubmit} onDelete={onDelete} isLogin={isLogin} loginInfo={loginInfo} />} />
        </Routes>
      </div>
    </main>
  );
}
