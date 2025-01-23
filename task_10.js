const obj = {
    name: 'Vasya', 
    friends: 5,
    likes: 19,
    projects: '7',
    podcast:'retro',
    strong: 24,
    report: NaN,
    sport: null,
}
//  a practical task for obtaining the sum of numeric fields
obj.getSumValues = function (){
    return Object.entries(this)
        .filter(( [,a] ) => ( Number(a) || a !== null && Number(a) === 0 )) 
        .map(( [,a] ) => Number(a) )
        .reduce( ( a , b ) => a + b )
}
// if only numeric fields
obj.getSumValues2 = function(){
    let sum = 0;
    for (let key in this){
        if(typeof this[key] === 'number' && !isNaN(this[key])){
            sum += this[key]
        }
    };
    return sum
}


//getting a list of keys sorted by numeric field values
obj.getListOfKeysByValues = function (){
    return Object.entries(this)
    .filter(( [,a] ) => ( Number(a) || a !== null && Number(a) === 0 ))
    .sort(( [,a] , [,b] ) => Number(b) - Number(a) )
    .map(( [a,] ) => a )
}
//if only numeric fields
obj.getListOfKeysByValues2 = function () {
    let result = [];
    for (let key in this){
        if(typeof this[key] === 'number' && !isNaN(this[key])){
            result.push([key,this[key]]) 
        }
    };
    return result.sort(([,a] , [,b]) =>b-a).map(([a,]) => a )
}