import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

// 이 페이지는 항상 다이나믹 렌더링으로 보여줌
export const dynamic = 'force-dynamic'

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={JSON.stringify(result)} />
    </div>
  );
}
