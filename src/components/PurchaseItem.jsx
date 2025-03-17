import '../styles/purchase.css';
import { useState, useContext } from 'react';
import { DataContext } from '../App';


export default function PurchaseItem ({purchaseDt, prodctId, productName, price, purchaseId, productImage, decision, openModal, openAlert, putSelectedProd}) {

  const {purList} = useContext(DataContext);

  // console.log(purList);
  
  const runModal = () => {
    const selObj = {
        decision: "N",
        price:price,
        productId:prodctId,
        productImage:productImage,
        productName:productName,
        purchaseId:purchaseId
    }

    putSelectedProd(selObj);
    openModal();
  }

  const runAlert = () => {
    const selObj = {
        decision: "N",
        price:price,
        productId:prodctId,
        productImage:productImage,
        productName:productName,
        purchaseId:purchaseId
    }

    putSelectedProd(selObj);
    openAlert();
  }


  // console.log(`decision: ${decision}`);
  let strConfirm = '';
  if (decision == 'Y') {
    strConfirm = '구매확정';
  } else {
    strConfirm = '배송완료';
  }
  console.log('++++++++++');
  console.log(productImage);


  return (

    // <div className="PurchaseItem"  onClick={runModal}>
    // <div className="PurchaseItem"  onClick={()=>{ if(decision=='N') runModal(); else alert('구매 확정 상품입니다.'); }}>
    <div className="PurchaseItem"  onClick={()=>{ if(decision=='N') runModal(); else runAlert(); }}>
      {/* <div>{new Date(purchaseDt).toLocaleDateString()}</div> */}
      <div className="purchase-date">{new Date(purchaseDt).toLocaleString()}</div>
      <img className="PurchaseItem-image" src={`${process.env.PUBLIC_URL}` + productImage} alt="Example" />
      {/* <img className="PurchaseItem-image" src={require(`${productImage}`)} alt="Example" /> */}
      <div>{productName}</div>
      <div>{price} 원</div>
      <div>{strConfirm}</div>
    </div>
  );
}