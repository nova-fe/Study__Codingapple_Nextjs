'use client'  // DB 출력문법 작성불가

import { useEffect, useState } from "react"

export default function Comment(props) {
  let [comment, setComment] = useState('');
  let [commentData, setCommentData] = useState([]);

  const fetchCommentData = () => {
    fetch(`/api/comment/list?id=${props.parentId}`)
    .then(res => res.json())
    .then((res) => {
      setCommentData(res);
    });
  }

  useEffect(() => {
    fetchCommentData();
  }, []);

  return (
    <div>
      <div>***** 댓글목록 *****</div>
      {
        commentData && commentData.map((data, i) => {
          return (
            <div key={i}>
              <div>작성자: {data.author}</div>
              {data.content}
            </div>
          )
        })
      }
      <br />
      <div>***** 댓글작성 *****</div>
      <input onChange={(e) => { setComment(e.target.value) }} />
      <br />
      <button onClick={() => {
        fetch('/api/comment/new', { 
          method: "POST",
          body: JSON.stringify({comment: comment, _id: props.parentId}) // 객체 형태이기 때문에 JSON.stringify 사용
        }).then((res) => {
          if(res.status == 200) {
            fetchCommentData();
          }
        });
      }}>댓글전송</button>
  </div>
  )
};
