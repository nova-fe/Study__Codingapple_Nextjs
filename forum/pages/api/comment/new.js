import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB.db('forum'));

  if(req.method === "POST") {
    // 입력폼에 아무것도 입력하지 않은 경우 예외처리
    if(!req.body) {
      return res.status(500).json("내용이 없습니다.");
    }

    try {
      // MongoDB에 comment 콜렉션을 만들고 데이터 저장
      await db.collection('comment').insertOne(req.body);
      res.status(200).json('등록성공');
    } catch (error) {
      console.error(error.message);
    }
  }
};
