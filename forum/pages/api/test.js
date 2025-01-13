export default function handler(요청, 응답) {
  console.log(요청.query); // query string 요청으로 불러온 값

  // POST 요청을 했을 때에만 실행
  if (요청.method == "POST") {
    return 응답.status(200).json("처리완료");
  }
}
