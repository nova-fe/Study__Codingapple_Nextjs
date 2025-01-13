import { connectDB } from "@/util/database";

export default async function Write() {
  const db = (await connectDB).db("forum");

  return (
    <div>
      {/* 입력폼에 넣을 것: 제목, 내용 */}
      <h4>글작성</h4>

      <form action="/api/write" method="POST">
        <input name="title" />
        <input name="content" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
