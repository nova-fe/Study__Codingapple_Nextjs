import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit({ params }) {
  // server client 에선 props 에 자동으로 정보들이 들어옴
  // 해당 props 안에서 params 만 구조분해할당으로 가져옴

  const db = (await connectDB).db("forum");
  // params 에서 id 부분만 구조분해할당으로 가져옴
  const { id } = await params;

  let result = await db.collection("post").findOne({
    _id: new ObjectId(id),
  });

  return (
    <div>
      <h4>수정페이지</h4>

      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input type="hidden" name="id" defaultValue={id} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
