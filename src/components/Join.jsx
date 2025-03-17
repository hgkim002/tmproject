import { useState } from "react";
import "../styles/Join.css";

export default function Join({ onJoin }) {
  // 로직
  // 조건: 로그인X / 이미 회원인지 검증 /
  const [userId, setUserid] = useState("");
  const [userPw, setUserpw] = useState("");
  const [userName, setUsername] = useState("");
  const [userHp, setUserhp] = useState("");
  const [isOver14, setIsOver14] = useState(false);

  const logo = process.env.PUBLIC_URL + "/images/pngwing.com.png";
console.log('Join.js');
  return (
    <div className="join-container">
      <div className="join">
        <form
          className="join-form"
          onSubmit={(e) => {
            e.preventDefault();
            onJoin(userId, userPw, userName, userHp);
          }}
        >
          <img src={logo} alt="logo" />
          <div className="user-info">
            <p>회원 정보를 입력해 주세요.</p>
            <input
              type="text"
              value={userId}
              placeholder="아이디(4자 이상)"
              onChange={(e) => setUserid(e.target.value)}
            />
            <input
              type="text"
              value={userPw}
              placeholder="비밀번호(영문 대문자, 특수문자 각 1개씩 포함)"
              onChange={(e) => setUserpw(e.target.value)}
            />
            <input
              type="text"
              value={userName}
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              value={userHp}
              placeholder="연락처"
              onChange={(e) => setUserhp(e.target.value)}
            />

            <input type="submit" className="joinBtn" value="회원가입" />
          </div>
          <hr />
          <div className="agree">
            <div className="tos">
              {/* <label>
                <input type='checkbox' />
                <b>모두 확인하였으며, 이에 동의합니다.</b>
              </label> */}
              <label>
                <input
                  type="checkbox"
                  checked={isOver14}
                  onChange={() => setIsOver14(!isOver14)}
                  required
                />
                [필수] 만 14세 이상입니다.
              </label>
              {/* <label>
                <input type='checkbox' />
                [필수] 이용거래약관 동의
              </label>
              <label>
                <input type='checkbox' />
                [필수] 개인정보수집 동의
              </label>
              <label>
                <input type='checkbox' />
                [필수] 개인정보 제3자 제공 동의
              </label>
              <label>
                <input type='checkbox' />
                [선택] 광고성 정보 수신 동의
              </label> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
