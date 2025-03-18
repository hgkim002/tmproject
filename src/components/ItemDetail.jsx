import { useContext, useRef, useState } from "react";
import { DataContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";

export default function ItemDetail() {
  // const {prodList} = useContext(DataContext);
  // const { purList, addToPurList } = useContext(DataContext);
  const { purList, setPurList, prodList } = useContext(DataContext);
  const location = useLocation();
  // location.state로 전달된 데이터 접근

  // || {}의 의미는 "location.state가 undefined이거나 falsy(거짓 같은 값)일 경우 빈 객체 {}를 대신 사용하라"는 뜻
  // const { id, name, price, src } = location.state || {};
  const { id, name, price, src, description } = location.state;

  // 상품 ID로 데이터 필터링
  const currentProduct = prodList.find(
    (prodList) => prodList.id === location.state.id
  );

  console.log(id, name, price, src, description);
  const idRef = useRef(purList.length);

  // const addToPurList = (newItem) => {
  //   console.log(`addToPurList: ${newItem.name}`);
  //   setPurList((purList) => [...purList, newItem]);
  // }
  const buyProduct = () => {
    const purInfo = {
      purchaseId: idRef.current,
      purchaseDt: new Date().getTime(),
      productId: id,
      productName: name,
      productImage: src,
      price: price,
      decision: "N",
    };
    // console.log('+++++++++++++++');
    // console.log(purInfo);

    // addToPurList(purInfo);

    idRef.current += 1; // 추가 후 증가 시켜줌
    setPurList((purList) => [...purList, purInfo]);

    // alert('구매 완료되었습니다.'); // -> react-modal

    openAlert();
    // console.log(purList);
  };

  // 모달 알림 구현...
  const navigate = useNavigate();
  Modal.setAppElement("#root");
  const [alertOpen, setAlertOpen] = useState(false);
  const closeAlert = () => {
    setAlertOpen(false);
    navigate(process.env.PUBLIC_URL + '/');
  };
  const openAlert = () => setAlertOpen(true);

  return (
    <div className="itembox">
      <div className="itemlist-child">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}` + src}
            className="itembox-imgdetail"
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <h4>{name}</h4>
          <br />
          <h4>₩ {price.toLocaleString()}</h4>
          <br />
          <select
            style={{
              width: 80,
              height: 30,
              textAlign: "center",
              border: "2px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {currentProduct.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          <br />
          <br />
          <div className="description">
            <p>{currentProduct.description}</p>
          </div>
          <button className="itembox-button" onClick={buyProduct}>
            구매
          </button>
        </div>
      </div>

      {/* 모달 알림창 */}
      <Modal
        isOpen={alertOpen}
        onRequestClose={closeAlert} // 모달 외부 클릭 시 닫힘
        style={{
          overlay: {
            overflow: "hidden", // 오버레이 스크롤 방지
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경. 0 은 투명하지 않음.
          },
          content: {
            width: "300px", // 모달의 너비
            height: "83px", // 모달의 높이
            margin: "auto", // 화면 중앙 정렬
            padding: "20px", // 내부 여백
            borderRadius: "10px", // 둥근 모서리
          },
        }}
      >
        <div>
          <div>
            {/* <div >상품명: {selectedProd.productName}</div> */}
            {/* <div >₩ {selectedProd.price}</div> */}
            <div>구매 완료되었습니다.</div>
          </div>
          <br></br>
          <button className="itembox-button" onClick={closeAlert}>
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
  // })
}

// export default ItemDetail;
