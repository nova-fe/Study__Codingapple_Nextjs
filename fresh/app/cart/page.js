// 'use client'
// 가장 상단에 use client 를 넣고 만든 파일은 클라이언트 컴포넌트가 됨

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Banner content="삼성카드" />
      <Banner content="현대카드" />
      <Button color="blue" />
    </div>
  )
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

function Button(props) {
  return <button style={{backgroundColor : props.color}}>버튼</button>
}