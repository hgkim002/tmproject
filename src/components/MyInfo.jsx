import { useLocation, useNavigate } from "react-router-dom";
import "../styles/MyInfo.css";

export default function MyInfo({
  onLoginSubmit,
  onDelete,
  loginInfo,
  isLogin,
}) {
  const myImage = process.env.PUBLIC_URL + "/images/camera.png";
  const myImage2 = process.env.PUBLIC_URL + "/images/smile.jpg";
  const seller = process.env.PUBLIC_URL + "/images/avatar.png";
  const prodImg1 = process.env.PUBLIC_URL + "/images/shoes1.jpg";

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div>
      <div className="myinfos">
        <div className="infoleft">
          <div className="left-block">
            <div>
              <img src={myImage2} id="profile-img" />
            </div>
            <div>이름 {loginInfo.name}</div>
            <div>ID {loginInfo.id}</div>
            <div>H.P {loginInfo.hp}</div>
            <button>내정보수정</button>&nbsp;&nbsp;
            <button onClick={() => onDelete()}>회원탈퇴</button>
          </div>

          <div className="left-block2">
            <div id="left-title">주문내역</div>
            <div>배송조회</div>
            <div>취소/반품신청</div>
            <div>환불내역</div>
          </div>
          <hr />
          <div className="left-block2">
            <div id="left-title">찜 목록</div>
            <div>찜한 상품</div>
            <div>최근 본 상품</div>
          </div>
          <hr />
          <div className="left-block2">
            <div>MY혜택</div>
            <div>결제수단 추가/변경</div>
            <div>멤버십 가입</div>
          </div>
        </div>

        <div className="inforight">
          <div className="right-block">
            <div className="info-title">기본정보</div>
            <div>
              {/* <img src={proimg1} alt='사용자_사진' /> {!userName ? '사용자 이름' : userName} */}
              사용자 이름 |&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{!loginInfo.name ? "오류" : loginInfo.name} </b>
              &nbsp;&nbsp;&nbsp;
              <button>실명수정</button>
            </div>
            <div>생년월일 | </div>
            <div>
              연락처 |&nbsp;&nbsp;&nbsp;&nbsp;<b>{loginInfo.hp}</b>
            </div>
            <div>
              주소 | <b></b>
            </div>
          </div>

          <div className="right-block">
            <div className="info-title" onClick={() => navigate("/myinfodet")}>
              주문내역
            </div>
            <div className="purchaselist">
              {/* <img src={prodImg1} alt='상품이미지' />
              판매자 | {seller} */}
            </div>
          </div>
          <div className="right-block">
            <div className="info-title">보안</div>
            <div>본인 인증 정보</div>
            <div>이메일 수신 여부</div>
          </div>

          <div className="right-block">
            <div className="info-title">약관동의 정보</div>
            <div>비밀번호</div>
            <div>패스키 관리</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <form action=''>
// <div className='pw'>
//   현재 비밀번호 <input type='password' /> <br />
//   새 비밀번호 <input type='password' /> <br />
//   새 비밀번호 재입력 <input type='password' /> <br />
// </div>
// </form>
