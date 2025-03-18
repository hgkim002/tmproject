import "../styles/MainDefault.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainDefault() {
  const image1 = process.env.PUBLIC_URL + "/images/01.jpg";
  const image2 = process.env.PUBLIC_URL + "/images/item01.jpg";
	
  const navigate = useNavigate();
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const arrow01 = process.env.PUBLIC_URL + "/images/arrow01.png";
  const arrow02 = process.env.PUBLIC_URL + "/images/arrow02.png";
  const img01 = process.env.PUBLIC_URL + "/images/img01.gif";
  const img02 = process.env.PUBLIC_URL + "/images/img02.gif";
  const bimg08 = process.env.PUBLIC_URL + "/images/bimg08.jpg";
  const bimg06 = process.env.PUBLIC_URL + "/images/bimg06.jpg";
  const bimg07 = process.env.PUBLIC_URL + "/images/bimg07.jpg";
  
  return (
    <main className="mainContent">
      <div className="banner">
        <img
          src={images[currentIndex]}
          className="bannerImage"
          onClick={() => navigate(process.env.PUBLIC_URL + "/category/banner")}
          alt="banner"
        />
        <div className="bannerText">Just Do It !</div>

        <button
          className="arrow left"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
        >
          <img src={arrow01} alt="arrow" className="arrowIcon" />
        </button>
        <button
          className="arrow right"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
          <img src={arrow02} alt="arrow" className="arrowIcon" />
        </button>
      </div>

      {/* ✅ 배너와 이미지 섹션 분리 */}
      <section className="gifSection">
        <div className="imageList">
          <img
            src={img01}
            alt="item1"
            className="imageItem"
            onClick={() => navigate(process.env.PUBLIC_URL + "/product/ShoeGif")}
          />
        </div>
      </section>

      <section className="giffullSection">
        <div className="imageList">
          <img
            src={img02}
            alt="item1"
            className="imagegifItem"
            onClick={() => navigate(process.env.PUBLIC_URL + "/product/ShoeGif")}
          />
        </div>
      </section>

      <section className="imageSection">
        <h3>For Your RunDay</h3>
        <div className="imageList">
          <div
            className="imageContainer"
            onClick={() => navigate(process.env.PUBLIC_URL + "/product/item1")}
          >
            <img src={bimg08} alt="item1" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
          <div
            className="imageContainer"
            onClick={() => navigate(process.env.PUBLIC_URL + "/product/item2")}
          >
            <img src={bimg06} alt="item2" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
          <div
            className="imageContainer"
            onClick={() => navigate(process.env.PUBLIC_URL + "/product/item3")}
          >
            <img src={bimg07} alt="item3" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
        </div>
      </section>
    </main>
  );
}
