const express = require("express");
const app = express();

// Render가 지정한 포트를 사용해야 함
const PORT = process.env.PORT || 3000;

// 간단한 라우트
app.get("/", (req, res) => {
  res.send("✅ WorldPiBank Backend is running on Render!");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
