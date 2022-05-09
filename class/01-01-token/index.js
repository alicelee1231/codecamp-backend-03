console.log("안녕하세요~~")

function getToken(){
   const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
   console.log(result)
}

getToken()

function getToken2(){
    const result = String(Math.floor(Math.random()*10000)).padStart(4,"0")
    console.log(result)
 }
 
 getToken2()
 //위와같이하면 너무 비효율적 밑에와 같이 하면됨

//  function getToken(aaa){
//     const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//     console.log(result)
//  }
//  getToken("철수") ->결과적으로 aaa가아니라 철수로 받음 철수=인자(argument) / aaa는 매개변수 (parameter)
 //data를 주고받을 수 있음

 //**가 두개면 제곱으로 들어감
 function getToken(aaa){
     console.log(aaa)
    const result = String(Math.floor(Math.random()*10**aaa)).padStart(aaa,"0")
    console.log(result)
 }
 getToken(19)
 ///4가 aaa로 들어감 

 //함수 선언하기
 //function add(){ __ function add (a,d)와 같음 __ a,d 매개변수 parameter (param)
//const a =1 
//const b = 2 
 //}
 //add (1,2) 1,2는 argument 인자 argument (arg)

function add(aaa,bbb){
    const result = aaa+bbb
    return result
}

function minus(fff,ggg){
    const result = fff -ggg
    return result

}
const aaa = add (1,2) //return이 있으면 (1,2)가 아닌 return값이 들어감 return은 함수의 종료라는 뜻
//return의 기능 : 함수 종료 뒤에 있는 함수들은 실행이 안됨 / 값 반환하는 기능
const bbb = minus (12,10)
const zzz = aaa * bbb  

