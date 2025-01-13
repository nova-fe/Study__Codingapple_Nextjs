import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
  const db = (await connectDB).db("forum");
  const { id } = await params;

  let result = await db.collection("post").findOne({
    _id: new ObjectId(IDBCursorWithValue),
  });
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
