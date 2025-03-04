'use client'  // DB 출력문법 작성불가

// 3. 글마다 좋아요 기능을 만들고 싶은데 
// (조건) 유저는 같은 글에 중복해서 좋아요를 누를 수 없어야합니다.
// 그러려면 좋아요누른 사람의 _id같은 것도 기록해둬야하겠군요. 
// 그럼 좋아요 누른 갯수와 좋아요 누른 사람들을 DB에 어디에 어떻게 기록해야 좋을지 한번 생각해봅시다.
// post 각각에, 좋아요 갯수, 해당 게시글에 like 한 사람 각각 저장

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
