function getWelcomeTemplate(name,age, school,createdAT)//매게변수
{
        const result = `
          <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${name} </div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAT} </div>
            </body>
          </html>
        `
        console.log(result)
}

const myname = "영희"
const myage = 12
const myschool = "토끼 초등학교"
const mycreatedAT = 2020-01-02

getWelcomeTemplate(myname,myage, myschool,mycreatedAT) //인자