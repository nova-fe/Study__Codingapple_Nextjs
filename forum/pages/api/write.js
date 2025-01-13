import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");
  await db.collection("post").insertOne({
    title: 요청.body.title,
    content: 요청.body.content
  })

  if (요청.method == "POST") {
    return 응답.status(200).json("성공");
  }
}
