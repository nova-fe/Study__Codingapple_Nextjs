import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import Like from "./Like";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// 1. 좋아요 true or false
// 2. 로그인 했을 경우만 true, false에 따라 분기 처리
// 3. like 카운트: true 인 유저 수 count -> true면 배열에 저장, 아니면 db에서 제거 (post DB에 저장)
// 4. 유저 id 들을 배열로 저장(post DB에 저장)

export default async function Detail(props) {
  const session = await getServerSession(authOptions);
  const db = (await connectDB).db("forum");

  // id 값으로 게시글 찾기
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  // 서버에서 ObjectId 는 문자열로 변환해야함
  let postId = result._id.toString();

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>제목: {result.title}</h4>
      <p>내용: {result.content}</p>
      <Like postId={postId} like={result.likeCount} userId={session?.user._id} />
      <Comment parentId={postId}/>
    </div>
  );
}
