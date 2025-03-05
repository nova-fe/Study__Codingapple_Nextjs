// URL 파라미터 문법
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  console.log(요청.body); // body로 가져온 값
  console.log(요청.query); // URL 파라미터 문법으로 불러온 값 // {'어쩌구' : 'kim'}

  // * 글 삭제 - URL 파라미터
  if (요청.method === "DELETE") {
    console.log("삭제!!!!!")
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

  if (요청.method == "POST") {
    try {
      const result = await db.collection("post").findOne({
        _id: new ObjectId(요청.query)
      });
      console.log(요청.likeCount);

      // $pull: 배열에서 특정 값을 제거
      // $push: 배열에서 특정 값을 추가
      // $set: 배열에서 특정 값을 업데이트
      await db
      .collection("post")
      .updateOne({_id: new ObjectId(요청.query)}, {
        $set: {
          likeCount: 요청.body.likeCount,
          likeUserId: ['test1', 'test2'],
        }})
      // console.log(요청.query.postId); // URL 파라미터 문법으로 불러온 값 // {'어쩌구' : 'kim'}

      // await db.collection("post").findOne({
      //   _id: new ObjectId(요청.query.postId)
      // })
      응답.status(200).json("좋아요 수정 완료");
    } catch (error) {
      console.log("수정 에러"+ error.message);
    }
  }
}
