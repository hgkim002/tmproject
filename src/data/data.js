const productdata = [
    { id: 0,
      name: "Nike zoomfly",
      price: 200000,
      src: '/tmproject/images/shoes1.jpg',
      description : "줌 플라이 6는 러닝의 모든 순간을 함께합니다.\n 줌 플라이 5보다 가볍고 반응성이 뛰어난 줌X 폼이 걸음을 내디딜 때마다 탁월한 에너지 반환력을 제공하고, 탄소 섬유 플레이트가\n 결승선까지 추진력을 더해줍니다.",
      size : [250, 260, 270, 280]
    },
    { id: 1,
      name: "Nike infinity",
      price: 150000,
      src: '/tmproject/images/shoes2.jpg',
      description : "나이키 리액트 폼보다 13% 더 높은 에너지 반환력을 갖춘 \n나이키 리액트X 폼으로 제작되어 상쾌하고 탄력 있는 발걸음이 유지됩니다.\n 리액트X 폼과 나이키 러닝에서 최고의 핏을 선사하는 플라이니트를 결합해 든든한 갑피의 지지력과 통기성으로 언제 어디로든 러닝을 떠날 수 있습니다.",
      size : [250, 260, 270, 280]
    },
    { id: 2,
      name: "Nike pegasus",
      price: 219000,
      src: '/tmproject/images/shoes3.jpg',
      description : "페가수스 플러스로 차원이 다른 반응성과 쿠셔닝을 느껴보세요.\n 전체적으로 적용된 초경량 줌X 폼이 일상의 러닝에 높은 에너지\n 반환력을 제공하기 때문에 활력 있게 달릴 수 있습니다. \n그리고 신축성 좋은 플라이니트 갑피가 발을 꼭 맞게 감싸 매끄러운 핏을 선사합니다.",
      size : [260, 265, 270, 275, 280]
    },
    { id: 3,
      name: "Nike airforce",
      price: 159000,
      src: '/tmproject/images/shoes4.png',
      description : "원활한 동작 수행을 위해 탄생한 에어 포스 1입니다.\n 댄서의 니즈에 맞게 디자인된 이번 버전은 발 앞부분에 에어 쿠셔닝을 적용해 지지력을 조절할 수 있습니다. 윤곽을 살린 갑피와 두꺼워진 카라가 중족부와 뒤꿈치를 고정해 주며, 더욱 유연한 밑창 덕분에 풋워크를 쉽게 뽐낼 수 있습니다.",
      size : [260, 265, 270, 275, 280]
    },
    { id: 4,
      name: "Nike airmax",
      price: 239000,
      src: '/tmproject/images/shoes5.png',
      description : "에어는 더하고, 부피는 줄였습니다. Dn8은 다이내믹 에어 시스템을 세련된 로우 프로파일 스타일과 결합시킨 아이템입니다.\n 8개의 압축된 에어 튜브가 적용되어 발을 디딜 때마다 반응성을 느낄 수 있습니다. 비현실적인 움직임을 직접 경험해 보세요.",
      size : [260, 265, 270, 275, 280]
    },
    { id: 5,
      name: "Nike calm",
      price: 59000,
      src: '/tmproject/images/shoes6.png',
      description : "어디에서든 차분하고 편안하게 휴식을 취해 보세요.\n 부드러우면서도 지지력이 뛰어난 폼으로 제작되었으며, \n양말을 신었을 때나 신지 않았을 때나 스타일링하기 쉬운 미니멀한 디자인의 슬라이드입니다. 또한 텍스처드 풋베드가 발을 제자리에 고정해 줍니다.",
      size : [260, 265, 270, 275, 280]
    }
  ];

  const productPurchase = [
    {
      decision:"N",
      price: 20000,
      productId:0,
      productImage: "/tmproject/images/shoes1.jpg",
      productName: "nike zoomfly",
      purchaseDt:1741789612614,
      purchaseId:0
    },
    {
      decision: "Y",
      price:150000,
      productId:1,
      productImage:"/tmproject/images/shoes2.jpg",
      productName:"nike infinity",
      purchaseDt:1741790124570,
      purchaseId:1
    },
    {
      decision: "N",
      price:150000,
      productId:1,
      productImage:"/tmproject/images/shoes2.jpg",
      productName:"nike infinity",
      purchaseDt:1741790124670,
      purchaseId:2
    },
    {
      decision: "N",
      price:150000,
      productId:1,
      productImage:"/tmproject/images/shoes2.jpg",
      productName:"nike infinity",
      purchaseDt:1741790524770,
      purchaseId:3
    }
  ];
  

export  {productdata, productPurchase };