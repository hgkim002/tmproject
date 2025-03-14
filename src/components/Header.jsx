import '../styles/Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header({ isLogin, loginInfo, onLogout, onRequestPage, onJoin }) {
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState('transparent');

  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderClass('transparent');
    } else {
      setHeaderClass('whiteBackground');
    }
  }, [location]);

  return (
    <header className={`${headerClass}`}>
      <div className='logo'>
        <NavLink to='/'>
          <img src='/images/02.png' alt='Logo' />
        </NavLink>
      </div>

      <nav className='navMenu'>
        <NavLink to='/category/ItemList' className='navItem'>
          SHOES
        </NavLink>

        <NavLink to='/category/eye' className='navItem'>
          456
        </NavLink>
        <NavLink to='/category/face' className='navItem'>
          Product
        </NavLink>

        {!isLogin ? (
          <NavLink to='/login' className='navItem'>
            로그인
          </NavLink>
        ) : (
          <NavLink to='/' className='navItem' onClick={() => onLogout()}>
            로그아웃
          </NavLink>
        )}
        {isLogin ? (
          <NavLink to='/myinfo' className='navItem'>
            MyPage
          </NavLink>
        ) : (
          <NavLink to='/login' className='navItem' onClick={() => alert('로그인이 필요합니다.')}>
            MyPage
          </NavLink>
        )}

        {isLogin ? (
          <NavLink to='/category/PurchaseList' className='navItem'>
            Purchase list
          </NavLink>
        ) : (
          <NavLink to='/login' className='navItem' onClick={() => alert('로그인이 필요합니다.')}>
            Purchase list
          </NavLink>
        )}
      </nav>
    </header>
  );
}
