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
              onClick={(e) => {
                // * 서버로 데이터 보내는법: fetch (body)
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: item._id,
                // })
                //   .then((r) => r.json())
                //   .then(() => {
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = "none";
                //     }, 1000);
                //   });

                // .then((r) => {
                //   if (r.status == 200) {
                //     return r.json();
                //   } else {
                //     //서버가 에러코드전송시 실행할코드
                //   }
                // })
                // .then((result) => {
                //   //성공시 실행할코드
                //   console.log(result);
                // })
                // .catch((error) => {
                //   //인터넷문제 등으로 실패시 실행할코드
                //   console.log(error);
                // });

                // fetch("/api/test?name=kim&age=20"); // fetch('/api/test?데이터이름=값&다른데이터이름=다른값') // 데이터 전송, query string 형태

                // fetch("/api/abc/kim"); // URL 파라미터 문법
                // fetch("/api/abc/어쩌구"); // URL 파라미터 문법

                // fetch(`/api/post/delete?id=${item._id}`)
                fetch(`/api/abc/${item._id}`)
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
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
