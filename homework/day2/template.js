function getPersonelNo(number) {
let arr1 =[...number].fill("*",8,14).join("");
return arr1
}


function welcomeTemplate({name,email,number,phone,cite})
{ const result = `
<html>
    <body>
        <h1>${name}님 가입을 환영합니다 </h1>
        <hr>
        <div>이메일 : ${email}</div>
        <div>주민번호 : ${getPersonelNo(number)}</div>
        <div>휴대폰 번호 : ${phone} </div>
        <div>내가 좋아하는 사이트 : ${cite}</div>
    </body>
</html>
`
console.log(result)
}

const client = {
    name : "코드캠프",
    email : "suppoer@codebootcamp.co.kr",
    number : "210510-1234556",
    phone : "000-0000-0000",
    cite : "codebootcamp.co.kr",
}

welcomeTemplate(client)