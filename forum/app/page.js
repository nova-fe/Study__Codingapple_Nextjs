import { connectDB } from "@/util/database";

// export const revalidate = 60; // 페이지 방문시 60초동안 페이지 캐싱됨

export default async function Home() {

  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  // await fetch('/URL', {cache: 'force-cache'}) // force-cache 는 기본값(작성하지 않아도 되어있음)
  // await fetch('/URL', {cache: 'no-store'})  // 매번 서버로 요청해서 새 데이터를 가져옴(실시간 데이터)
  // await fetch('/URL', {next: {revalidate: 60}})  // 60초마다 캐싱된 데이터 갱신

  return <div>안녕</div>;
}
