import { connectDB } from "@/util/database";

export default async function Write() {
  const db = (await connectDB).db("forum");

  return (
    <div>
      <h4>글작성</h4>

      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">글 등록</button>
      </form>
    </div>
  );
}
