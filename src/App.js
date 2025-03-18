import React, { useEffect, useState } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import MainDefault from "./components/MainDefault";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { productdata, productPurchase } from "./data/data.js";

export const DataContext = React.createContext();

function App() {
  const location = useLocation();
  const [prodList, setProdList] = useState(productdata);
  const [purList, setPurList] = useState(productPurchase);

  // const addToPurList = (newItem) => {
  //   console.log(`addToPurList: ${newItem.name}`);
  //   setPurList((purList) => [...purList, newItem]);
  // }

  /* JSY ============================================== */
  // 페이지 새로고침 시 로그인 정보 유지
  const navigate = useNavigate();
  // 로그인 상태:  boolean
  const [isLogin, setIsLogin] = useState(false);
  // 사용자 상세정보:  객체형
  const [loginInfo, setLoginInfo] = useState(""); // {id: , pw: }
  // id, password, name
  const [userId, setUserid] = useState("");
  const [userPw, setUserpw] = useState("");
  const [userName, setUsername] = useState("");
  const [userHp, setUserhp] = useState("");

  // 페이지 새로고침 시 로그인 정보 유지
  useEffect(() => {
    const storedLoginInfo = sessionStorage.getItem("loginInfo");
    if (storedLoginInfo) {
      setIsLogin(true);
      setLoginInfo(JSON.parse(storedLoginInfo));
    }
  }, []);

  // 회원가입 로직 : ID, PW 전달받아 스토리지에 저장(임시)
  const onJoin = (userId, userPw, userName, userHp) => {
    const userData = { id: userId, pw: userPw, name: userName, hp: userHp };
    if (!userId || userId.length < 2) {
      alert("아이디를 입력하세요 (2자 이상)");
    } else if (!userPw || userPw.length < 2) {
      alert("패스워드 입력하세요. (2자 이상)");
    } else {
      // 문제없으면
      // 상태변수(사용자 상세정보) 업데이트: 스토리지에 로그인정보 저장
      localStorage.setItem("loginInfo", JSON.stringify(userData));
      setIsLogin(false);
      setLoginInfo(""); // 로그인시 이부분을 얻어 가지고 있음.
      alert("회원가입 완료. 가입하신 아이디로 로그인하세요.");
      navigate(process.env.PUBLIC_URL + "/login");
    }
  };
  // 회원탈퇴 : 로컬스토리지 모든 정보 초기화
  const onDelete = () => {
    sessionStorage.removeItem("loginInfo");
    localStorage.removeItem("loginInfo");
    setIsLogin(false);
    setLoginInfo("");
    alert("회원 탈퇴 되었습니다.");
    navigate(process.env.PUBLIC_URL + '/');
  };

  // 로그인 : 빈 값으로 로그인시도 또는 비회원 처리 로직
  const handleLogin = (userId, userPw) => {
    try {
      const confirmId = JSON.parse(localStorage.getItem("loginInfo"));
      // alert(`[handleLogin] 입력한 ID: ${userId} , PW: ${userPw}`);
      if (!userId.trim() || !userPw.trim()) {
        // if (typeof userData.id === 'undefined' || userData.id === null || userData.id.trim() === '' || typeof userData.pw === 'undefined' || userData.pw === null || userData.pw.trim() === '') {
        alert("ID, PW 입력하세요.");
        navigate(process.env.PUBLIC_URL + "/login");
      } else if (userId === confirmId.id) {
        onLoginSubmit(userId, userPw);
        // alert(`handleLogin isLogin = ${isLogin}, loginInfo = ${loginInfo}`);
      } else if (!confirmId) {
      }
    } catch (e) {
      alert("회원가입 필요");
      navigate(process.env.PUBLIC_URL + "/join");
      // alert('예외 발생. 메인 페이지로 이동합니다.');
      // navigate('/');
    }
  };

  // 로그인 : ID, PW 검증 로직
  const onLoginSubmit = (userId, userPw) => {
    // 1. 로컬스토리지에서 회원정보 불러옴
    const confirmId = JSON.parse(localStorage.getItem("loginInfo"));
    // alert(`[onLoginSubmit] userId=${userId} userPw=${userPw}`);
    // alert(`[onLoginSubmit] loginInfo: ID=${confirmId.id} PW=${confirmId.pw}`);
    // alert(`[onLoginSubmit] 입력한 confirmId ID: ${confirmId.id} , PW: ${confirmId.pw}`);

    // alert(`[onLoginSubmit] 타입검사 userId=${typeof userId} userPw=${typeof userPw}`);
    // 2. 검증
    // ID, PW 입력에  문제없으면
    if (userId === confirmId.id && userPw === confirmId.pw) {
      // 상태변수(로그인 True/False) 업데이트하고
      setIsLogin(true);
      // alert(`[onLoginSubmit] isLogin=${isLogin} `);
      // console.log(`setIsLogin(true) = ${setIsLogin(true)}`);
      // console.log(`setLoginInfo(userData) = ${setLoginInfo(confirmId)}`);
      sessionStorage.setItem("loginInfo", JSON.stringify(confirmId));
      // alert(`onLoginSubmit 로그인 성공  isLogin = ${isLogin}, loginInfo = ${loginInfo}`);

      navigate(process.env.PUBLIC_URL + '/');
    } else if (userId === confirmId.id && userPw !== confirmId.pw) {
      setIsLogin(false);
      setLoginInfo("");
      alert("로그인 실패");
      navigate(process.env.PUBLIC_URL + "/login");
    }
  };

  // 로그아웃 : 세션스토리지 모든 정보 초기화
  const onLogout = () => {
    sessionStorage.removeItem("loginInfo");
    setIsLogin(false);
    setLoginInfo("");
    alert("로그아웃 되었습니다.");
    navigate(process.env.PUBLIC_URL + '/');
  };

  const onRequestPage = (url) => {
    navigate(process.env.PUBLIC_URL + url);
  };

  /* JSY ============================================== */

  return (
    <div className="App">
      <DataContext.Provider value={{ prodList, purList, setPurList }}>
        <div className="App">
          <Header
            isLogin={isLogin}
            onLogout={onLogout}
            onRequestPage={onRequestPage}
            loginInfo={loginInfo}
            onJoin={onJoin}
          />
          {location.pathname === "/" ? (
            <MainDefault
              onLoginSubmit={onLoginSubmit}
              isLogin={isLogin}
              loginInfo={loginInfo}
              onJoin={onJoin}
              handleLogin={handleLogin}
            />
          ) : (
            <Main
              onLoginSubmit={onLoginSubmit}
              isLogin={isLogin}
              loginInfo={loginInfo}
              onJoin={onJoin}
              onDelete={onDelete}
              handleLogin={handleLogin}
            />
          )}
          <Footer />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
