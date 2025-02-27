import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  // 유저가 보낸 데이터:
  // 요청.body

  let session = await getServerSession(요청, 응답, authOptions); // 현재 로그인한 유저의 정보 출력
  console.log(session.user.email);

  if(session) {
    요청.body.author = session.user.email;  // 데이터에 author 추가
  }

  if (요청.method == "POST") {
    // 입력폼에 아무것도 입력하지 않은 경우 예외처리
    if (!요청.body.title || !요청.body.content) {
      return 응답.status(500).json("제목과 내용을 입력해주세요.");
    }

    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(요청.body); // MongoDB 에 데이터 저장
      return 응답.redirect(302, "/list"); // 성공시 목록 페이지로 이동
    } catch (error) {
      // DB 에러시 실행 코드
      alert(error.message);
    }
  }
}
