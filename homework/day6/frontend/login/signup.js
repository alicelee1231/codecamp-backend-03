// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");

  // 3개로 나뉘어져있는 걸 한개로 합침
  let phone = "";
  phone += document.getElementById("PhoneNumber01").value;
  phone += document.getElementById("PhoneNumber02").value;
  phone += document.getElementById("PhoneNumber03").value;

  // 그거를 BE에 보냄
  axios
    .post("http://localhost:3000/tokens/phone", {
      phone: phone,
    })
    .then((res) => {
      // 응답 받은 것을 로그에 출력
      console.log(res);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");

  // 이름, 주민번호(앞/뒤), 핸드폰번호, 좋아하는 사이트, 이메일, 비밀번호를 가져옴
  const name = document.getElementById("SignupName").value;
  const email = document.getElementById("SignupEmail").value;
  const personal = document.getElementById("SignupPersonal").value;
  const prefer = document.getElementById("SignupPrefer").value;
  const pwd = document.getElementById("SignupPwd").value;

  let phone = "";
  phone += document.getElementById("PhoneNumber01").value;
  phone += document.getElementById("PhoneNumber02").value;
  phone += document.getElementById("PhoneNumber03").value;

  // 잘 조합해서 json형태로 만들어용
  const data = {
    email: email, // 이메일
    name: name, // 이름
    personal: personal, // 주민번호 (앞뒤 합친거)
    phone: phone, // 핸드폰번호 (3개 합친거)
    prefer: prefer, // 좋아하는 사이트
    pwd: pwd, // 비밀번
  };

  // 그 json데이터를 BE에 보내요
  axios
    .post("http://localhost:3000/users", {
      myuser: data,
    })
    .then((res) => {
      // 응답 받은 것을 로그에 출력
      console.log(res);
    });

  // 그 json데이터를 BE에 보내요
  const res = await axios.post("http://localhost:3000/users", { myuser: data });
  // 응답 받은 것을 로그에 출력
  console.log(res);
};
