// analog of the built-in function slice 
function mySlice (arr,start = 0,end = arr.length - 1) {
    let result = []
    if( end < 0 ) end = (arr.length - 1) + end;
    if( start < 0 ) start = (arr.length - 1) + start;
    if(end > arr.length - 1) end = arr.length - 1;
    for(let i = start; i <= end; i++){
        result.push(arr[i])
    }
    return result
}

// analog of the built-in function indexOf
function myIndexOf (arr,item,from = 0) {
    if( from >= arr.length || arr.length <= 0 ) return -1;
    let longSearch = arr.length
    if(0 > from && 0 < from + longSearch) {
        from += longSearch
    } else if(0 > from + longSearch) {
        from = 0
    }
    for (let i = from; i < longSearch; i++){
        if(item === arr[i]){
            return i
        }
    }
    return -1;
}
// analog of built-in function includes
function myIncludes (arr,item,from = 0) {
    if( from >= arr.length || arr.length <= 0 ) return false;

    let longSearch = arr.length;

    if(-longSearch <= from && from < 0) {
        longSearch += from
    } else if( from <= -longSearch) {
        from = 0
    }
    if( from >= 0){
        for (let i = from; i < arr.length; i++){
            if( item === arr[i] ){
                return true
            }
        }
    } else {
        for (let i = arr.length - 1; i >= longSearch; i--){
            if(item === arr[i]){
                return true
            }
        }
    };
    return false;
}