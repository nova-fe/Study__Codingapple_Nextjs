import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// 1. 유저가 GET, POST 요청시 or 특정 페이지 요청시
export async function middleware(request) {
  // 2. 이 코드가 먼저 실행되고

  // console.log(request.nextUrl);
  // console.log(request.cookies); 
  // console.log(request.headers); // cookies, headers 는 Map 자료형
  // // middleware 마지막엔 아래 코드들 추가해야함
  // NextResponse.next();  // 통과
  // NextResponse.redirect();  // 다른페이지로 강제 이동(주소창도 변경)
  // NextResponse.rewrite();  // 다른페이지로 강제 이동(주소창은 놔둠)

  /**
   * 미로그인일 경우 작성페이지 접근 불가, 로그인 페이지로 이동
   */
  // 미로그인 유저 /write 접속시 로그인 페이지로 이동
  // 조건: NEXTAUTH_SECRET 가 있어야함, JWT 쓰는 경우만 이용 (session은 따로 코드를 짜야함)

  // const session = await getToken({req: request});
  // console.log(session); // 미로그인일 경우 null

  // // 작성 페이지로 접속 했을 때
  // if (request.nextUrl.pathname.startsWith('/write')) {
  //   // 로그인이 안 되어있을 경우
  //   if (session == null) {
  //     // 로그인 페이지로 이동 (아닐 경우는 write 페이지로 잘 이동이 됨)
  //     return NextResponse.redirect(new URL('http://localhost:3000/api/auth/signin'), request.url);
  //   }
  // }

  /**
   * 정보 가져오기
   */
  // console.log(request.nextUrl.pathname); // list 페이지로 접속한 경우 /list 라고 나옴

  // if (request.nextUrl.pathname.startsWith('/list')) {
  //   console.log(new Date());  // 접속시간
  //   console.log(request.headers.get('sec-ch-ua-platform')); // 접속 OS
  //   // middleware 마지막엔 꼭 있어야함
  //   return NextResponse.next();
  // }


  /**
   * 쿠키 다루기
   */
  // request.cookies.get('쿠키이름') // 출력
  // request.cookies.has('쿠키이름') // 존재확인
  // request.cookies.delete('쿠키이름')  // 삭제

  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'mode',
  //   value: "dark",
  //   maxAge: 3600,
  //   httpOnly: true,
  // })

  // return response // 쿠키생성

  // Q. 유저가 /register 페이지 방문시 visited=true 라는 쿠키를 생성해주려면 코드를 어떻게 짜야할까요?
  // 같은 이름의 쿠키가 이미 있으면 아무 짓거리도 안해줘야합니다.
  const response = NextResponse.next(); // 기본 응답 객체 생성

  if (request.nextUrl.pathname.startsWith('/register')) {
    console.log("*******************" + response.cookies.get('mode'));
    if(!request.cookies.has('visited')) { // 같은 이름의 쿠키가 없는 경우만 실행
      response.cookies.set({
        name: 'visited',
        value: true,
        maxAge: 3600,
        httpOnly: true,
      })
      return response;
    }
    return NextResponse.next();
  }
};

// 3. 서버 코드를 실행해줌