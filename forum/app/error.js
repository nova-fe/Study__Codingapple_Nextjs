// 에러페이지 => page.js 부분만 error.js 로 바꿔줌

"use client"  // 무조건 use client

export default function Error({error, reset}) {
  return (
    <div>
      <h4>에러났어요</h4>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  )
};
