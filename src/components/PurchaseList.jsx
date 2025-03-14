import PurchaseItem from './PurchaseItem';
import { useContext, useState } from 'react';
import { DataContext } from '../App';
import Modal from 'react-modal';

// import { useLocation } from "react-router-dom";

export default function PurchaseList () {

  const {purList, setPurList} = useContext(DataContext);

  // purList 에서, purchaseId 기준으로 문자 형식으로 변환한 후 역순으로 정렬
  // const sortedProductPurchase = purList.sort((a, b) => {
  //   const idA = a.purchaseId.toString();
  //   const idB = b.purchaseId.toString();
  //   return idB.localeCompare(idA);
  // });

  // purchaseId를 숫자 형식으로 변환한 후 역순으로 정렬
  let sortedProductPurchase = [];
  if (Array.isArray(purList)) {   // purList가 정의되고 배열인지 확인
    // purchaseId를 숫자 형식으로 변환한 후 역순으로 정렬
    sortedProductPurchase = purList.sort((a, b) => b.purchaseId - a.purchaseId);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  // 모달 닫기 함수
  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const closeAlert = () => setAlertOpen(false);
  const openAlert = () => setAlertOpen(true);

  const [selectedProd, setSelectedProd] = useState({});

  const putSelectedProd = (selObj) => {
    setSelectedProd(selObj);
    // console.log(`setSelectedProd: ${selObj.productName}`);
  }

  // 구매결정 로직
  const setDecision = () =>{
    const obj = sortedProductPurchase.find((prod)=> selectedProd.purchaseId === prod.purchaseId);
    onUpdate(obj.purchaseId, 'Y'); // purchaseId 는 Y(구매결정 하겠다)
  };

  // 데이터에 구매결정 반영
  const onUpdate = (updateId, value) => {
    setPurList(purList.map((it)=> it.purchaseId===updateId ?
                          {...it, decision: value} : it ));
  }; //onUpdate

  ///////////////////////////////// 페이지 /////////////////////////////////
  // const itemsPerPage = 10; // 한 페이지에 보여줄 데이터 개수
  // const [currentPage, setCurrentPage] = useState(1);
  // // 현재 페이지에 보여줄 데이터 계산
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = sortedProductPurchase.slice(indexOfFirstItem, indexOfLastItem);

  // // 총 페이지 수 계산
  // const totalPages = Math.ceil(sortedProductPurchase.length / itemsPerPage);

  // // 페이지 변경 함수
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  ///////////////////////////////////////////////////////////////////////////

  Modal.setAppElement("#root");
  return (
    <div className="PurchaseList">  
      <div className="PurchaseList-title">구 매 리 스 트</div>
      <hr className="PurchaseList-hr"></hr>
      <div className="PurchaseItem-header">
        <div >거래일시</div>
        <div >상품</div>
        <div >가격</div>
        <div >상태</div>
      </div>
      <hr className="PurchaseList-hr"></hr>
      <div className="PurchaseList-itemListContainer">
        { sortedProductPurchase.map((it)=> <PurchaseItem key={it.purchaseId} {...it} openModal={openModal} openAlert={openAlert} putSelectedProd={putSelectedProd}  />) }
      </div>

      
      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal} // 모달 외부 클릭 시 닫힘
        style={{
          overlay: {
            overflow: "hidden", // 오버레이 스크롤 방지
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
          },      
          content: {
            width: "300px", // 모달의 너비
            height: "400px", // 모달의 높이
            margin: "auto", // 화면 중앙 정렬
            padding: "20px", // 내부 여백
            borderRadius: "10px", // 둥근 모서리
          },
        }}
      >
        <div>
          <div >
            <div >상품명: {selectedProd.productName}</div>
            <div >₩ {selectedProd.price}</div>
          </div>

          <img className="PurchaseList-image" src={selectedProd.productImage} alt="Example" />
          <div className="purchase-item-buttons">

            <button className="purchase-item-button"
            onClick={() => {
              // console.log(`구매확정: ${selectedProd.productName}`);
              setDecision();
              closeModal();
            }}
            >구매확정</button>

            <button className="purchase-item-button" onClick={closeModal}>닫기</button>
          </div>
          </div>
      </Modal>
      

      <Modal isOpen={alertOpen}
        onRequestClose={closeAlert} // 모달 외부 클릭 시 닫힘
        style={{
          overlay: {
            overflow: "hidden", // 오버레이 스크롤 방지
            backgroundColor: "rgba(0, 0, 0, 0)", // 반투명 배경. 0 은 투명하지 않음.
          },      
          content: {
            width: "300px", // 모달의 너비
            height: "90px", // 모달의 높이
            margin: "auto", // 화면 중앙 정렬
            padding: "20px", // 내부 여백
            borderRadius: "10px", // 둥근 모서리
          },
        }}
      >
        <div>
          <div >
            <div >상품명: {selectedProd.productName}</div>
            {/* <div >₩ {selectedProd.price}</div> */}
            <div>해당 상품은 이미 구매확정 된 상품 입니다.</div>
          </div>
          <br></br>
          <div className="purchase-item-buttons">
            <button className="purchase-item-button" onClick={closeAlert }>닫기</button>
          </div>
          </div>
      </Modal>


      {/* <br></br>
      
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === number ? "lightblue" : "white",
            }}
          >
            {number}
          </button>
        ))}
      </div> */}

    </div>
    
  );
}