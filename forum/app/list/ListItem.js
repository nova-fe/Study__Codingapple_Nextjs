"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {JSON.parse(result).map((item) => {
        return (
          <div className="list-item" key={item.id}>
            <h4>
              <Link prefetch={false} href={`/detail/${item._id}`}>
                {item.title}
              </Link>
            </h4>
            <Link href={`/edit/${item._id}`}>✏️</Link>
            {/* <span onClick={() => {
              // fetch('/URL', {method: 'HTTP 메서드'})
              fetch('/api/test', {
                method: 'HTTP 메서드',
                // body: 전송할 데이터
                // => object 나 array 를 전달할땐 꼭 JSON.stringify 를 사용해야함
                body: JSON.stringify([1,2,3])
              })
              .then(() => {
                // 서버 응답시 실행
                console.log("fetch 요청 날려줌")
              })
            }}>🗑️</span> */}

            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                alert("삭제버튼 클릭");
                fetch("/api/list", {
                  method: "DELETE",
                  body: item._id,
                }).then(() => {
                  // 서버 응답시 실행
                  alert("삭제완료");
                });
              }}
            >
              🗑️
            </span>
            <p>1월 12일</p>
          </div>
        );
      })}
    </div>
  );
}
