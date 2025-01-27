let str = "первый пункт в одинадцатом задании, второй пункт и третий пункт"
function getStrWithFirstCapitalLetter (str) {
    return `${str[0].toUpperCase() + str.slice(1)}`
}

function getShortString (str,distance) {
    if(str.length > distance){
        let long = 0
        str = str.split(' ')
        .filter((a) => {
            long += a.length + 1 // if it is necessary to take into account the gaps 
            if( long < distance ){ return true }else{ return false }
        }).join(' ')
        if(/[,.!?:;]/.test(str[str.length-1])) return str + '..'
        if(!str) return str
        return str + '...'
    } else {
        return str
    }
}

// case-sensitive letters
function findSubstring (str1,str2) {
    let result = str1.includes(str2)
    if(!result) result = str2.includes(str1)
        return result
}
// case-insensitive letters
function findSubstring2 (str1,str2){
    let result = str1.toUpperCase().includes(str2.toUpperCase())
    if(!result) result = str2.toUpperCase().includes(str1.toUpperCase())
        return result
}