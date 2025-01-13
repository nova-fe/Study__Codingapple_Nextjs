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
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                alert("삭제버튼 클릭");
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: item._id,
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      //서버가 에러코드전송시 실행할코드
                    }
                  })
                  .then((result) => {
                    //성공시 실행할코드
                    console.log(result);
                  })
                  .catch((error) => {
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error);
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
