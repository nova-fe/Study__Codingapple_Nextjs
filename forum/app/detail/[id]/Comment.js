'use client'

import { useState } from "react"


// 댓글 전송버튼 누르면 DB에 댓글이 저장되는 기능을 만들어봅시다.
// 저장시 comment라는 이름의 collection에 저장

export default function Comment({parentId}) {
  let [comment, setComment] = useState('');

  return (
    <div>
      <div>***** 댓글목록보여줄부분 *****</div>
      <input onChange={(e) => { setComment(e.target.value) }} />
      <button onClick={() => {
        fetch('/api/comment/new', {method: "POST", body: comment });
      }}>댓글전송</button>
  </div>
  )
};
