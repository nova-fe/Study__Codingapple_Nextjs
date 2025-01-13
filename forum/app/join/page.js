export default function Join() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/join/new" method="POST">
        <input name="userId" placeholder="ID" />
        <input name="password" placeholder="Password" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
