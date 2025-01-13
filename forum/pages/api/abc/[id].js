// URL 파라미터 문법
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  console.log(요청.query); // URL 파라미터 문법으로 불러온 값 // {'어쩌구' : 'kim'}

  // * 글 삭제 - URL 파라미터
  try {
    let result = await db.collection("post").deleteOne({
      _id: new ObjectId(요청.query.id),
    });
    console.log(result); // { acknowledged: true, deletedCount: 1 }
    응답.status(200).json("삭제완료");
  } catch (error) {
    console.error(error.message);
  }
}
