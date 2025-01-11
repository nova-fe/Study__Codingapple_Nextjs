/**
 * Next.js 에서 URL과 페이지 만드는 법
 * 1. app 폴더 안에 폴더
 * 2. 그 안에 page.js 넣기
 * 3. 그 안에 레이아웃 넣기
 */

// import Image from "next/image";
// import 작명 from '/public/food0.png'

'use client'

import { useState } from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let [수량, 수량변경] = useState(0)
  // let arr = [2,3,4]
  
  // let b = arr.map((a) => {
  //   // return 에 담은걸 array로 담아줌
  //   return 10;
  // })
  // console.log(b); // [10,10,10]

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        상품.map((a, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img" />
              
              {/* <Image src={작명} className="food-img" /> */}
              {/* <Image src="이미지주소" width={500} height={400} className="food-img" /> */}
              <h4>{a} $40</h4>
              <span>{수량} </span>
              <button onClick={()=>{수량변경(수량+1)}}>+</button>
              <button onClick={()=>{수량변경(수량-1)}}>-</button>
            </div>
          )
        })
      }
    </div>
  );
}
