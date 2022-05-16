import { getToday } from "./utils.js";
import nodemailer from "nodemailer";
import "dotenv/config";

export function checkValidationEmail(email) {
  if (email === undefined || !email.includes("@")) {
    console.log("에러발생!!이메일을 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
}

//css는 가급적 예전꺼를 사용 왜냐하면 gmail에서 먹히는 것과 naver에서 먹히는 것이 다름
export function getWelcomeTemplate({ name, age, school }) {
  return `
              <html>
                <body>
                    <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${name} </div>
                    <div>나이: ${age}살</div>
                    <div>학교: ${school}</div>
                    <div>가입일: ${getToday()} </div>
                </body>
              </html>
            `;
}

export async function sendTemplateToEmail(email, mytemplate) {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;

  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const result = await transpoter.sendMail({
    from: EMAIL_SENDER,
    to: email,
    subject: "[코드캠프] 가입을 축하합니다.",
    html: mytemplate,
  });
  console.log(result);
  // console.log(email, + "이메일로" + mytemplate+ "를 전송합니다!!")
}
