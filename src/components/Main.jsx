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
        <Route path={process.env.PUBLIC_URL + '/'} element={<MainDefault />} />
      </Routes>
      <div className='mainDefault'>
        <Routes>
          {/* <Route path="/category/shoes" element={<Shoe />} /> */}
          <Route path={process.env.PUBLIC_URL + '/category/banner'} element={<Banner />} />
          <Route path={process.env.PUBLIC_URL + '/product/ShoeGif'} element={<ShoeGif />} />

          <Route path={process.env.PUBLIC_URL + '/category/ItemList'} element={<ItemList />} />
          <Route path={process.env.PUBLIC_URL + '/category/ItemDetail'} element={<ItemDetail />} />
          <Route path={process.env.PUBLIC_URL + '/category/PurchaseList'} element={<PurchaseList />} />

          <Route path={process.env.PUBLIC_URL + '/join'} element={<Join onJoin={onJoin} />} />
          <Route path={process.env.PUBLIC_URL + '/login'} element={<Login onLoginSubmit={onLoginSubmit} handleLogin={handleLogin} />} />
          <Route path={process.env.PUBLIC_URL + '/myinfo'} element={<MyInfo onLoginSubmit={onLoginSubmit} onDelete={onDelete} isLogin={isLogin} loginInfo={loginInfo} />} />
        </Routes>
      </div>
    </main>
  );
}
