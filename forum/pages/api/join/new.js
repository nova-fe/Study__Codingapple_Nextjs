import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  const db = (await connectDB).db("forum");

  if (요청.method == "POST") {
    // 요청한 데이터에서 구조분해할당으로 userId 만 가져옴
    const { userId } = 요청.body;

    const existingId = await db.collection("join").findOne({ userId: userId });

    if (existingId) {
      return 응답.status(200).json("이미 있는 ID 입니다.");
    }

    try {
      await db.collection("join").insertOne(요청.body);
      return 응답.status(200).json("회원가입이 완료되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }
}
