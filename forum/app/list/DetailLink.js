"use client";

import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation";

export default function DetailLink() {
  /**
   * 1. 여러페이지 만들려면 [Dynamic Route]
   * 2. 현재 URL이 뭔지 궁금하면 props/useRouter
   * 3. 페이지이동, prefetch 등은 useRouter
   */

  // client 컴포넌트에서만 사용 가능
  let router = useRouter();

  // let 현재URL출력 = usePathname();
  // let 서치파라미터출력 = useSearchParams();
  // let 다이나믹라우트출력 = useParams();
  // console.log(현재URL출력);
  // console.log(서치파라미터출력);
  // console.log(다이나믹라우트출력);

  return (
    <>
      <button
        onClick={() => {
          // useRouter를 이용한 페이지 이동
          router.push("/list");
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          router.back();
        }}
      >
        뒤로
      </button>
      <button
        onClick={() => {
          router.forward();
        }}
      >
        앞으로
      </button>
      <button
        onClick={() => {
          // 변동사항이 있는 곳만 새로고침
          router.refresh();
        }}
      >
        새로고침
      </button>
    </>
  );
}
