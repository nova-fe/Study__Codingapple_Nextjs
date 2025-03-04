import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  const session = await getServerSession(req,res, authOptions);
  
  req.body = JSON.parse(req.body);

  if(req.method === "POST") {
    // 입력폼에 아무것도 입력하지 않은 경우 예외처리
    if(!req.body) {
      return res.status(500).json("내용이 없습니다.");
    }

    let commentData = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.name
    }

    try {
      // MongoDB에 comment 콜렉션을 만들고 데이터 저장
      await db.collection('comment').insertOne(commentData);
      res.status(200).json('등록성공');
    } catch (error) {
      console.error("에러: " + error.message);
    }
  }
};
