
const aaa = new Date()
const year = aaa.getFullYear()
const month= aaa.getMonth() +1
const date =aaa.getDate()
const hours =aaa.getHours()
const minutes =aaa.getMinutes()
const second =aaa.getMilliseconds()


const result = `오늘은 ${year}년 ${month}월 ${date}일 ${hours}:${minutes}:${second}입니다`
console.log(result)