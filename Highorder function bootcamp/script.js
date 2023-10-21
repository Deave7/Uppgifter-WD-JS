const numbers = [1,2,3,4,5,6,7,8,9,10]



function even(numbers) {
    let array = [];

    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            array.push(numbers[i])
        }
    }
    return array
}

arrayOne = even(numbers)

const odd = numbers => numbers.filter(number => number % 2 !== 0)
const oddNumbers = odd(numbers)
console.log(oddNumbers)