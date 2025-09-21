// World Pi Bank — Backend (Express + CORS)
// 실행: node server.js

import express from "express";
import cors from "cors";

const app = express();

// 프론트엔드 도메인 허용 (GitHub Pages 주소로 바꿔 넣으세요)
const allowedOrigins = [
  "https://ljw2358.github.io",
  "https://ljw2358.github.io/worldpibank-frontend/"
];
app.use(cors({ origin: (origin, cb) => cb(null, true) })); // 심사 전에는 전체 허용(간단)
app.use(express.json());

// 상태 확인
app.get("/", (req, res) => {
  res.json({ message: "✅ World Pi Bank Backend is running 🚀" });
});

// 로그인 (데모)
app.post("/login", (req, res) => {
  const { wallet } = req.body || {};
  res.json({ success: true, wallet, token: "demo-token-123" });
});

// 결제 승인/완결 (데모용; 실제 생산에서는 Pi Platform API 호출 필요)
app.post("/payments/approve", (req, res) => {
  const { paymentId } = req.body || {};
  console.log("Approve called:", paymentId);
  res.json({ ok: true, paymentId });
});
app.post("/payments/complete", (req, res) => {
  const { paymentId, txid } = req.body || {};
  console.log("Complete called:", paymentId, txid);
  res.json({ ok: true, paymentId, txid });
});

// FAQ (다국어)
app.get("/faq", (req, res) => {
  res.json([
    { q: "KYC?", a_kr: "로컬 암호화 검증", a_en: "Local encrypted verification", a_zh: "本地加密验证" },
    { q: "Security?", a_kr: "하드웨어 키, 다중서명", a_en: "Hardware keys, multi-sig", a_zh: "硬件密钥、多重签名" },
    { q: "수수료/이율?", a_kr: "투명 공시", a_en: "Transparent fees", a_zh: "手续费透明" }
  ]);
});

// 거래내역 샘플
app.get("/transactions", (req, res) => {
  res.json([
    { id: 1, type: "deposit", amount: 100, currency: "PI", date: "2025-09-21" },
    { id: 2, type: "payment", amount: 50, currency: "PI", date: "2025-09-20" }
  ]);
});
