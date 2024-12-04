// recursive method
function guessNumber(from=0,before=100){
    let num = Math.floor(Math.random()*before);
    console.log('\n Компьютер1 загадал: ' + num + '\n');
    let step = 0;
    function attempt(num1,num2){
        step++;
        let res = Math.floor((num2 - num1)/2+num1);
        console.log('Компьютер 2: пробую число ' + res + '.');
        if(res < num){
            console.log('Компьютер 1: Больше.\n');
            num1 = res;
            console.log('Диапазон от '+num1+' до '+num2);
            attempt( num1 , num2 );
        } else if(res > num){
            console.log('Компьютер 1: Меньше.\n');
            num2 = res;
            console.log('Диапазон от '+num1+' до '+num2);
            attempt( num1 , num2 );
        } else {
            console.log('Компьютер 1: Угадал.\n');
            return console.log('Попыток подрачено ' + step );
        }
    };
    attempt(from,before);
}
guessNumber()

// another way
function guessNumber2( num1 = 0, num2 = 100){

    let player1 = Math.floor(Math.random()*num2);

    console.log('\n Компьютер 1, загадал число ' + player1 +'\n');

    let player2 = 0;

    let range = [num1,num2];

    let attempt = 0;
    
    do {
        console.log('Диапазон: ' + range[0] + ' - ' + range[1]) + '\n';

        player2 = Math.floor( (range[1]-range[0])/2 + range[0]);

        console.log('Компьютер 2: Попробую число ' + player2 + '.');

        if(player2 < player1){

            range[0] = player2;

            console.log('Компьютер 1: Больше.\n');

        } else if (player2 > player1){

            range[1] = player2;

            console.log('Компьютер 1: Меньше.\n');

        };

        attempt++

    } while ( player2 !== player1 )
    console.log('Компьютер 1: Угадал.\n Попыток истрачено: ' + attempt)
}
guessNumber2()