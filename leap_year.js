function check_leap_year(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true 
    } else {
        return false
    }
}

const arrow_check_leap_year=(year)=>{
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true 
    } else {
        return false
    }
}

console.log(check_leap_year(2000))
module.exports={check_leap_year, 
    arrow_check_leap_year
}