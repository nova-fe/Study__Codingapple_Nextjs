import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");

  // 글 삭제 - ajax
  if (요청.method === "DELETE") {
    try {
      let result = await db.collection("post").deleteOne({
        _id: new ObjectId(요청.id),
      });
      console.log(result); // { acknowledged: true, deletedCount: 1 }

      응답.status(200).json("삭제완료");
    } catch (error) {
      console.log(error.message);
    }
  }

  // 글 삭제 - query string
  // try {
  //   let result = await db.collection("post").deleteOne({
  //     _id: new ObjectId(요청.query.id),
  //   });
  //   console.log(result); // { acknowledged: true, deletedCount: 1 }
  //   응답.status(200).json("삭제완료");
  // } catch (error) {
  //   console.error(error.message);
  // }


}
