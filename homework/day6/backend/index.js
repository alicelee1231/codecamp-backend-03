import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
import { options } from "./swagger/config.js";

import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/users", (req, res) => {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영수",
      phone: "010-1222-5678",
      personal: "210110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ccc@gmail.com",
      name: "병수",
      phone: "010-1333-5678",
      personal: "200110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ddd@gmail.com",
      name: "ali",
      phone: "010-1444-5678",
      personal: "190110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "eee@gmail.com",
      name: "sha",
      phone: "010-1555-5678",
      personal: "180110-2222222",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "latte", kcal: 15 },
    { name: "콜드브루", kcal: 25 },
    { name: "카페모카", kcal: 35 },
    { name: "돌체라떼", kcal: 45 },
    { name: "카라멜라떼", kcal: 55 },
    { name: "바닐라라떼", kcal: 65 },
    { name: "에스프레소", kcal: 75 },
    { name: "디카페인", kcal: 85 },
    { name: "오트라떼", kcal: 95 },
  ];
  res.send(result);
});

app.post("/tokens/phone", (req, res) => {
  console.log(req.body);
  const myphone = req.body.phone;
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);

    res.send("인증완료!");
  }
});

app.post("/users", (req, res) => {
  const user = req.body.myuser;
  console.log(user);

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkValidationEmail(user.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(user);
    console.log(mytemplate);
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(user.email, mytemplate);
    res.send("가입완료!");
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
