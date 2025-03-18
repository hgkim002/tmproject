import '../styles/Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header({ isLogin, loginInfo, onLogout, onRequestPage, onJoin }) {
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState('transparent');

  useEffect(() => {
    if (location.pathname === process.env.PUBLIC_URL + '/') {
      setHeaderClass('transparent');
    } else {
      setHeaderClass('whiteBackground');
    }
  }, [location]);
   
  const imgLogo = process.env.PUBLIC_URL + "/images/02.png";
  return (
    <header className={`${headerClass}`}>
      <div className='logo'>
        <NavLink to={process.env.PUBLIC_URL}>
          <img src={imgLogo} alt='Logo' />
        </NavLink>
      </div>

      <nav className='navMenu'>
        <NavLink to={process.env.PUBLIC_URL + '/category/ItemList'} className='navItem'>
          SHOES
        </NavLink>

        <NavLink to={process.env.PUBLIC_URL + '/category/eye'} className='navItem'>
          CLOTHES
        </NavLink>
        <NavLink to={process.env.PUBLIC_URL + '/category/face'} className='navItem'>
          Product
        </NavLink>

        {!isLogin ? (
          <NavLink to={process.env.PUBLIC_URL + '/login'} className='navItem'>
            로그인
          </NavLink>
        ) : (
          <NavLink to={process.env.PUBLIC_URL + '/'} className='navItem' onClick={() => onLogout()}>
            로그아웃
          </NavLink>
        )}
        {isLogin ? (
          <NavLink to={process.env.PUBLIC_URL + '/myinfo'} className='navItem'>
            MyPage
          </NavLink>
        ) : (
          <NavLink to={process.env.PUBLIC_URL + '/login'} className='navItem' onClick={() => alert('로그인이 필요합니다.')}>
            MyPage
          </NavLink>
        )}

        {isLogin ? (
          <NavLink to={process.env.PUBLIC_URL + '/category/PurchaseList'} className='navItem'>
            Purchase list
          </NavLink>
        ) : (
          <NavLink to={process.env.PUBLIC_URL + '/login'} className='navItem' onClick={() => alert('로그인이 필요합니다.')}>
            Purchase list
          </NavLink>
        )}
      </nav>
    </header>
  );
}
