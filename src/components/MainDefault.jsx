import "../styles/MainDefault.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainDefault() {
  const navigate = useNavigate();
  const images = ["/images/01.jpg", "/images/item01.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <main className="mainContent">
      <div className="banner">
        <img
          src={images[currentIndex]}
          className="bannerImage"
          onClick={() => navigate("/category/banner")}
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
          <img src="/images/arrow01.png" alt="arrow" className="arrowIcon" />
        </button>
        <button
          className="arrow right"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
          <img src="/images/arrow02.png" alt="arrow" className="arrowIcon" />
        </button>
      </div>

      {/* ✅ 배너와 이미지 섹션 분리 */}
      <section className="gifSection">
        <div className="imageList">
          <img
            src="/images/img01.gif"
            alt="item1"
            className="imageItem"
            onClick={() => navigate("/product/ShoeGif")}
          />
        </div>
      </section>

      <section className="giffullSection">
        <div className="imageList">
          <img
            src="/images/img02.gif"
            alt="item1"
            className="imagegifItem"
            onClick={() => navigate("/product/ShoeGif")}
          />
        </div>
      </section>

      <section className="imageSection">
        <h3>For Your RunDay</h3>
        <div className="imageList">
          <div
            className="imageContainer"
            onClick={() => navigate("/product/item1")}
          >
            <img src="/images/bimg08.jpg" alt="item1" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
          <div
            className="imageContainer"
            onClick={() => navigate("/product/item2")}
          >
            <img src="/images/bimg06.jpg" alt="item2" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
          <div
            className="imageContainer"
            onClick={() => navigate("/product/item3")}
          >
            <img src="/images/bimg07.jpg" alt="item3" className="imageItem" />
            <span className="hoverText">자세히 보기</span>
          </div>
        </div>
      </section>
    </main>
  );
}
