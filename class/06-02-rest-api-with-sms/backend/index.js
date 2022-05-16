//const express = require('express')
import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import swaggerUi from "swagger-ui-express";
// import swagger-jsdoc from
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
//*로하면 해당 페이지의 모든 기능을 import한다는 뜻
//import *as wer from './phone.js' / as + 아무 이름 /
//아니면 가져오는 파일에서 export default로 적어주고 아무 이름으로 가져오면 됨

const app = express();
app.use(
  cors({
    origin: "127.0.0.1:5500",
  })
);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/boards", (req, res) => {
  //middleware함수
  //1.data를 조회하는 로직을 작성하라 => DB에 접속하여 데이터꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "제목", contents: "내용이에용" },
    { number: 2, writer: "영수", title: "제목이랑꼐", contents: "내용이에여" },
    { number: 3, writer: "병수", title: "제목이어유", contents: "내용이에유" },
  ];

  //2번 꺼내온 결과 응답 주기(프론트앤드에)
  res.send(result);
});

app.post("/boards", (req, res) => {
  console.log(req.body);
  //1번. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  //2번. 저장 결과 응답주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.aaa;
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

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
