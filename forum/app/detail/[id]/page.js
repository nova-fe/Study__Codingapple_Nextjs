import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db("forum");

  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  // 서버에서 ObjectId 는 문자열로 변환해야함
  let parentId = result._id.toString();
  let loginUser = session ? session.user.email : ''

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>

      <Comment parentId={parentId} author={loginUser} />
    </div>
  );
}
