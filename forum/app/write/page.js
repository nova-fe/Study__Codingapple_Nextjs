import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
  let session = await getServerSession(authOptions);  // 현재 로그인된 유저이름, 이메일 등이 남음
  console.log(session);

  // Q3. /write 페이지는 로그인한 사람만 보여주려면? 
  if (session) {
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
  } else {
    return null;
  }
}
