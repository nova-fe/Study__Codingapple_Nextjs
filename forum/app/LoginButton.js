'use client'

import { signIn } from 'next-auth/react'
// import { useEffect } from 'react'

export default function LoginButton() {
  
  // Next.js 에서의 localStorage 사용법
  // => useEffect를 사용하기 때문에 html이 렌더링 된 이후에 실행되므로 약간 느려질 수 있음
  // => 그래서 쿠키 사용
  // useEffect (() => {
  //   if (typeof window != 'undefined') { // 브라우저인지 확인
  //     localStorage.setItem('모드', 'dark')
  //   }
  // }, [])

  return (
    <button onClick={() => signIn()}>로그인</button>
  )
}