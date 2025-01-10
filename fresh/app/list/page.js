/**
 * Next.js 에서 URL과 페이지 만드는 법
 * 1. app 폴더 안에 폴더
 * 2. 그 안에 page.js 넣기
 * 3. 그 안에 레이아웃 넣기
 */
export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let arr = [2,3,4]
  
  let b = arr.map((a) => {
    // return 에 담은걸 array로 담아줌
    return 10;
  })
  console.log(b); // [10,10,10]

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        상품.map((a, i) => {
          return (
            <div className="food">
              <h4>{a} $40</h4>
            </div>
          )
        })
      }
    </div>
  );
}
