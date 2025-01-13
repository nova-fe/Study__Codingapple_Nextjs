import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => {
        return (
          <div className="list-item" key={item.id}>
            <h4>
              <Link prefetch={false} href={`/detail/${item._id}`}>
                {item.title}
              </Link>
            </h4>

            <Link href={`/edit/${item._id}`}>✏️수정</Link>

            <p>1월 12일</p>
          </div>
        );
      })}
    </div>
  );
}
