import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // POST 요청을 했을 때에만 실행
  if (요청.method == "GET") {
    return 응답.status(200).json(result);
  }
}
