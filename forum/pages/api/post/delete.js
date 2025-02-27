import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  // 글 삭제 - ajax
  if (요청.method === "DELETE") {
    try {
      let session = await getServerSession(요청, 응답, authOptions);
      const db = (await connectDB).db("forum");

      // user의 author이 body 인 것을 찾음
      let target = await db.collection('post').findOne({_id: new ObjectId(요청.body)});
      
      if(session && target.author === session.user.email) {
        let result = await db.collection("post").deleteOne({
          _id: new ObjectId(요청.body),
        });
        응답.status(200).json("삭제완료");
      } else {
        응답.status(500).json("작성자가 아닙니다.");
      }
      // console.log(result); // { acknowledged: true, deletedCount: 1 }
    } catch (error) {
      console.log(error.message);
    }
  }

  // 글 삭제 - query string
  // try {
  //   let result = await db.collection("post").deleteOne({
  //     _id: new ObjectId(요청.query.id),
  //   });
  //   console.log(result); // { acknowledged: true, deletedCount: 1 }
  //   응답.status(200).json("삭제완료");
  // } catch (error) {
  //   console.error(error.message);
  // }


}
