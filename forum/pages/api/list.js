import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  if (요청.method === "GET") {
    return 응답.status(200).json(result);
  }

  // 글 삭제
  if (요청.method === "DELETE") {
    try {
      // await db.collection("post").deleteOne({ _id: new ObjectId(id) });
      await db.collection("post").deleteOne({
        _id: new ObjectId(요청.body),
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}
