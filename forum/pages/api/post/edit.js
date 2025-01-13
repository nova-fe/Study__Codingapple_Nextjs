import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    // 입력폼에 아무것도 입력하지 않은 경우 예외처리
    if (!요청.body.title || !요청.body.content) {
      return 응답.status(500).json("제목과 내용을 입력해주세요.");
    }

    try {
      const db = (await connectDB).db("forum");

      // 글 수정
      //await db.collection(컬렉션명).updateOne({수정할게시물정보}, { $set : {수정할내용} } );
      await db.collection("post").updateOne(
        { _id: new ObjectId(요청.body.id) },
        {
          $set: {
            title: 요청.body.title,
            content: 요청.body.content,
          },
        }
      );

      return 응답.redirect(302, `/detail/${요청.body.id}`); // 성공시 상세 페이지로 이동
    } catch (error) {
      // DB 에러시 실행 코드
      alert(error.message);
    }
  }
}
