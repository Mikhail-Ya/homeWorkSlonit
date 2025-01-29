const arr = [12,13,45,31,21,45,32,54,84,45,21,321,3,8,88,4,12,2,1]

function myFilter(array, callback){
    const result = []
    for(let el of array){
        if(callback(el)){
            result.push(el)
        }
    }
    return result
}

