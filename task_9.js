// analog of the built-in function slice 
// аналог встроенной функции slice
function mySlice (arr,start = 0,end = arr.length - 1) {
    let result = []
    if( end < 0 ) end = (arr.length - 1) + end;
    if(end > arr.length - 1) end = arr.length - 1;
    for(let i = start; i <= end; i++){
        result.push(arr[i])
    }
    return result
}
