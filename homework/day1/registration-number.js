import {howmany} from './registration.js' 

function checkRegistrationNumber(customRegistrationNumber){
    const isValid = howmany(customRegistrationNumber)

    if (isValid){
        console.log("210510-1******")
    }}

    checkRegistrationNumber("210510-1010101")
    checkRegistrationNumber("210510-1010101010101")
    checkRegistrationNumber("2105101010101")