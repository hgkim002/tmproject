import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login({ handleLogin }) {
  // onLoginSubmit 안에는는 App으로부터 차례차례 넘겨받은 onLoginSubmit 안에는는 로그인 상태변수 isLogin, userData 있음
  const [userId, setUserId] =
    useState(""); /* App.js의 상태변수와는 별개로, 입력받기 위함 */
  const [userPw, setUserPw] = useState("");

  const navigate = useNavigate();

  const logo = process.env.PUBLIC_URL + "/images/pngwing.com.png";
  const kakao = process.env.PUBLIC_URL + "/images/icons/kakao.png";
  const naver = process.env.PUBLIC_URL + "/images/icons/naver.png";
  const apple = process.env.PUBLIC_URL + "/images/icons/apple.png";
  const hp = process.env.PUBLIC_URL + "/images/icons/hp.png";
  const icons = [kakao, naver, apple, hp];

  return (
    <div className="login-container">
      <img src={logo} alt="로고" />
      <div className="login-content">
        <div className="pageTitle">일반 로그인 | 간편 로그인</div>
        <form
          onSubmit={() => {
            handleLogin(userId, userPw);
          }}
          className="login-info"
        >
          <input
            type="text"
            name="id"
            placeholder="아이디"
            size={20}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            size={20}
            value={userPw}
            onChange={(e) => setUserPw(e.target.value)}
          />
          <input
            type="submit"
            className="loginBtn"
            value="로그인"
            style={{ width: 175 }}
          />
        </form>
        <ul className="icon-list">
          <li>
            <img src={icons[0]} alt="" />
          </li>
          <li>
            <img src={icons[1]} alt="" />
          </li>
          <li>
            <img src={icons[2]} alt="" />
          </li>
          <li>
            <img src={icons[3]} alt="" />
          </li>
        </ul>
        <span>아직 회원이 아니신가요?</span>&nbsp;&nbsp;
        <button className="JoinBtn" onClick={() => navigate("/join")}>
          회원가입
        </button>
      </div>
    </div>
  );
}
