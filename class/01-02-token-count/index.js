console.log("안녕하세요~~")

 function getToken(aaa){
     //aaa = null
     if (aaa ===undefined){
         console.log("에러 발생!!! 갯수를 제대로 입력해주세요!!")
         return 
     }else if (aaa <=0){
         console.log("에러 발생!!갯수가 너무 적습니다!!")
         return //함수 종료해 줘야함
     } else if(aaa>10){
         console.log("에러발생!!갯수가 너무 많습니다!")
        return
     }
    const result = String(Math.floor(Math.random()*10**aaa)).padStart(aaa,"0")
    console.log(result)
 }
 getToken() ///aaa는 undefined
 //undefined 값이 비어있을 때, null 강제로 변수를 비웠을때  (ex)getToken()에 값이 들어있는데 내가 넣기 싫을 때, aaa=null
