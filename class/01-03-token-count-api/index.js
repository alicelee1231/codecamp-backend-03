console.log("안녕하세요~~")

 //인증번호 요청 api만들기
 //핸드폰번호의 매개변수가 10~11검증필요
 //토큰 생성(getToken)
 //핸드폰에 토큰 전송

 function creatTokenOfPhone(myphone){
     //1.휴대폰번호 자릿수 맞는지 확인하기 (검증)
     if(myphone.length !==10 && myphone.length !== 11){
         console.log("에러 발생!!!핸드폰 번호를 제대로 입력해 주세요")
         return
     }

     //2.핸드폰 토큰 6자리 만들기
     const aaa = 6
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

    //3.핸트폰번호에 코튼 전송하기
    console.log(myphone + "번호로 인증번호" + result + "를 전송합니다!!!")
 }
 creatTokenOfPhone("01012345678") 

 