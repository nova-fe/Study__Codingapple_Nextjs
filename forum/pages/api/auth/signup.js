

// Q4. 관리자 권한을 가진 유저는 모든 글을 삭제가능하게 서버기능을 업그레이드해봅시다. 


import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Q1. 회원가입 시켜주기 전에 이름, 이메일, 비번란에 빈칸을 보내는 경우 가입을 거절해봅시다. 
    if(!req.body.name || !req.body.email || !req.body.password) {
      console.log('빈 값 존재');
      return;
    }

    let db = (await connectDB).db('forum');
    // Q2. 회원가입 시켜주기 전에 같은 이메일이 이미 DB에 있는지 조회부터 해보고 
    let user = await db.collection('user_cred').findOne({email: req.body.email});
    // 같은 이메일이 이미 DB에 있으면 가입을 거절해봅시다.
    if (user) {
      if (req.body.email === user?.email) {
        console.log('중복 이메일');
        return;
      }
      return;
    }

    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;  // 비밀번호 암호화 저장
    // 임시로 admin 추가
    // req.body.role = "admin";

    await db.collection('user_cred').insertOne(req.body); // user_cred 라는 collection을 만들어서 저장
    res.status(200).json('가입성공');
  }
}