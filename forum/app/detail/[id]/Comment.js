'use client'

import { useState } from "react"


// 댓글 전송버튼 누르면 DB에 댓글이 저장되는 기능을 만들어봅시다.
// 저장시 comment라는 이름의 collection에 저장
// 어떤 글에 달린 댓글인지 알기 위해 _id 도 함께 저장하면 좋을 것 같음

export default function Comment(props) {
  let [comment, setComment] = useState('');

  const commentData = {
    content: comment,
    parent: props.parentId,
    author: props.author
  }

  console.log(commentData);

  return (
    <div>
      <div>***** 댓글목록보여줄부분 *****</div>
      <input onChange={(e) => { setComment(e.target.value) }} />
      <button onClick={() => {
        fetch('/api/comment/new', { method: "POST",
          headers: {
            'Content-Type' : 'application/json' // 서버에 json 형식으로 데이터 전ㅅㅇ
          },
          body: JSON.stringify(commentData) });
      }}>댓글전송</button>
  </div>
  )
};
