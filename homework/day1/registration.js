



export function howmany(customRegistrationNumber){
    if(customRegistrationNumber.includes('-')   )
    {
        const front = customRegistrationNumber.split('-')[0]
        const back = customRegistrationNumber.split('-')[1]

        if(front.length === 6 && back.length === 7){
            return true
        } else {
            console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
            return false
        }
    } else { 
        console.log("에러 발생!! 형식이 올바르지 않습니다!!!")
    }
}


