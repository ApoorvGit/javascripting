function opp_case(str){
    var changed = '';

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var charCodeInt = char.charCodeAt(0);
        if (charCodeInt >= 97 && charCodeInt <= 122) {
            changed += char.toUpperCase();
        } else if (charCodeInt >= 65 && charCodeInt <= 90) {
            changed += char.toLowerCase()
        }else changed += char;
    }
    return changed
}

const arrow_opp_case=(str)=>{
    var changed = '';

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var charCodeInt = char.charCodeAt(0);
        if (charCodeInt >= 97 && charCodeInt <= 122) {
            changed += char.toUpperCase();
        } else if (charCodeInt >= 65 && charCodeInt <= 90) {
            changed += char.toLowerCase()
        }else changed += char;
    }
    return changed
}
module.exports={
    opp_case,
    arrow_opp_case
}