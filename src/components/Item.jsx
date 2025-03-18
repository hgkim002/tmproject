import "../styles/item.css";
import { useNavigate, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Item({ id, name, price, src, description }) {

  const [choicedId, setChoicedId] = useState();
  const navigate = useNavigate();

  function goDetail() {
    const choiceData = {
      id: id,
      name: name,
      price: price,
      src: src,
      description: description
    }
    

    // navigate 호출 시 state에 데이터 전달
    navigate(process.env.PUBLIC_URL + '/category/ItemDetail', { state: choiceData });
  };

  // onClick={goDetail}

  return (
    // <div className="itemContainer">
      <div className="itembox" >
        {/* <div onClick={()=>{setChoicedId(id)}}> */}
        
        {/* <div onClick={()=>{ navigate(`/category/ItemDetail?id=${id}`); }}> */}
        <div onClick={ goDetail }>
          {/* <Link to={`/category/ItemDetail${id}`}> */}
            <img src={ `${process.env.PUBLIC_URL}` + src} className="itembox-imglist"/>
          {/* </Link> */}
          <h4>{name}</h4>
          <p>₩ {price.toLocaleString()}</p>
        </div>
      {/* </div> */}
    </div>

  );
}
