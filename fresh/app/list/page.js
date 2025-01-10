/**
 * Next.js 에서 URL과 페이지 만드는 법
 * 1. app 폴더 안에 폴더
 * 2. 그 안에 page.js 넣기
 * 3. 그 안에 레이아웃 넣기
 */
export default function List() {
  return (
    <div>
      <h2 className="title">Products</h2>
      <div className="food">
        <h4>상품명 $40</h4>
      </div>
      <div className="food">
        <h4>상품명 $40</h4>
      </div>
    </div>
  );
}
