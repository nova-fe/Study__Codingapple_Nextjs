export default function handler(req, res) {
  // 현재 날짜, 시간을 보내주는 서버 기능
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const currentDate = new Date(utc + koreaTimeDiff);

  let date =
    currentDate.getFullYear() + "-" + currentDate.getMonth() + 1 + "-" + currentDate.getDate();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();

  if (req.method == "GET") {
    return res.status(200).json(date + " " + time);
  }
}
