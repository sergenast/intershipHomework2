//Первая задача

((a = 0) => {

    let currentSum = a;

        sum = (b = 0) => {
            currentSum += b;
            console.log (currentSum);
            return sum;
        }

    console.log(currentSum);
    return sum();
    
})(5)(6)(9)(56)(1)

//Вторая задача

const str = 'one.two.three.four.five';
const strSplited = str.split('.')

//console.log(strSplited);
//Array(5) [ "one", "two", "three", "four", "five" ]

const  strObject = {
        [strSplited[0]]: {
            [strSplited[1]]: {
                [strSplited[2]]:{
                    [strSplited[3]]:{
                        [strSplited[4]]:{
                            [strSplited[strSplited.length]]:"..."
                        }
                    }
                }
            }
        }
    }

console.log(strObject)

//Сердечно прошу простить за такую запись, я перепробовала все что можно, но так и не догнала, как сделать иначе. Через цикл пробовала и так и сяк, создавала доп объект, пробовала прогонять цикл с начала массива, пробовала с конца, использовала подсказки из чата))) получается сделать только объект с разными свойствами, а не с вложенными. буду очень рада, если подскажете, как это можно было сделать! я просидела часов 6, и моя голова уже готова взорваться)))

