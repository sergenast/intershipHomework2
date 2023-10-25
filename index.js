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
const newArr = strSplited.reverse();

const strObject = newArr.reduce((obj, elem) => {
    return {[elem]: obj}
}, {})

console.log (strObject)

//обновленное решение после того, как я открыла для себя редьюс)))

