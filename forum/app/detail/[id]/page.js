import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {

  const db = (await connectDB).db("forum");

  // id 값으로 게시글 찾기
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.id),
  });

  // 서버에서 ObjectId 는 문자열로 변환해야함
  let parentId = result._id.toString();

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>제목: {result.title}</h4>
      <p>내용: {result.content}</p>
      <button>♥️ 0</button>
      <Comment parentId={parentId}/>
    </div>
  );
}
