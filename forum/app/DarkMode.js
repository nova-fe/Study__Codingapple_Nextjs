// 1. 지금 다크모드면 버튼이 '☀️' 글자로 바뀌고
// 지금 라이트모드면 버튼이 '🌙' 글자로 바뀌는 기능도 만들어봅시다. 

// 2. 지금 쿠키 꺼내는 코드를 매우 자주 사용하고 있군요. 
// state에 저장해서 쓰거나
// 부모 컴포넌트에 있는 쿠키를 props로 보내거나 그런 방법도 생각해봅시다. 

"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

export default function DarkMode() {
  const router = useRouter();
  const 쿠키값 = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0];
  const [modeCookie, setModeCookie] = useState(쿠키값);

  useEffect (() => {
    if (쿠키값 === '') { // mode 라는 이름의 쿠키가 없으면 쿠키값 설정
      document.cookie = `mode=${modeCookie}; max-age= ${(3600 * 24 * 400)}`;
      setModeCookie('light');
    }
  }, []);

  return (
    <span onClick={() => {
      const newMode = modeCookie === 'light' ? 'dark' : 'light';
      document.cookie = `mode=${newMode}; max-age= ${(3600 * 24 * 400)}`;
      setModeCookie(newMode);
      // 새로고침
      router.refresh();
    }}>
      {쿠키값 === 'dark' ? '☀️' : '🌙'}
    </span>
  )
};
