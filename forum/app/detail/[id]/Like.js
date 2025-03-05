"use client"

import { useEffect, useState } from "react";

// 3. 글마다 좋아요 기능을 만들고 싶은데 
// (조건) 유저는 같은 글에 중복해서 좋아요를 누를 수 없어야합니다.
// 그러려면 좋아요누른 사람의 _id같은 것도 기록해둬야하겠군요. 
// 그럼 좋아요 누른 갯수와 좋아요 누른 사람들을 DB에 어디에 어떻게 기록해야 좋을지 한번 생각해봅시다.
// post 각각에, 좋아요 갯수, 해당 게시글에 like 한 사람 각각 저장

// ✔️ 해당 board의 ID값을 가져와야함
// likeCount, likeUser DB를 가져와야함
// 1. 좋아요 버튼 클릭시
//  0) true, false 갯수 반전
//  1) 되어있을 경우: 좋아요state + 1, 유저state 배열에 id 추가
//  2) 안 되어있을 경우: 좋아요state -1, 유저state 배열에서 id 제거
// 2. 위 두 state를 DB에 저장 필요
// 3. 출력 -> 좋아요 state 렌더링
// 4. 유저 id가 유저state 배열의 유무 구분 필요

export default function Like( {postId, like, userId} ) {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState (like);

  const fetchLikeData = () => {
    fetch(`/api/abc/${postId}`, {
      method: "POST",
      body: {
        likeCount: likeCount,
        userId: userId,
      }
    })
  }

  const onClickLike = () => {
    if (isLike === false) {
      setIsLike(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLike(false);
      setLikeCount(likeCount - 1);
    }
  }

  useEffect(() => {
    fetchLikeData();
  }, [isLike]);

  return (
    <button onClick={() => {
      onClickLike();
    }}>❤️🩶 {likeCount}</button>
  )
};
