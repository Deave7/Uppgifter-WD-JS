//1

let fruits = ['apple', 'banana', 'pear', 'pineapple', 'mango']

//2

let weird = [123, 'onehundredtwentythree', [1, 2, 3]]

//3

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length)

//4

console.log(animals[0])

//5

console.log(animals[3])

//6

animals[2] = 'tiger'
console.log(animals[2])

//7

let a = [1,2,3];
let b = [4,5,6];

let ab = [...a, ...b]

console.log(ab)

//8

let c = [1,2,3,7,8,9];
let e = [4,5,6];

c.splice(3, 0, e)

console.log(c)

//9

let arr = ['a', 'b', 'c'];

arrCopy = arr.map((x) => x);

console.log(arrCopy)

//10

let fruits2 = ['kiwi', 'apple', 'pear'];

fruits2.push('banana')
console.log(fruits2)

//11

fruits2.unshift('Grapes')
console.log(fruits2)

//12

fruits2.pop()
console.log(fruits2)

//13 

fruits2.shift()
console.log(fruits2)

//14

fruits2.splice(1, 0, 'lemon')
console.log(fruits2)

//15

fruits2.splice(2, 0, 'Orange', 'Clementine', 'Mulberry')
console.log(fruits2)

//16

let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1,2)
console.log(names)

//17

let nums = [1,2,3,4,5,6,7,8,9];
nums.reverse()
console.log(nums)

//18

let str = 'Supercalifragilisticexpialidocious';
console.log(str.includes('n'))

//19

console.log(str.includes('x'))

//20

console.log(str.indexOf('p'))

//21

console.log(str.substring(0,5))

//22

console.log(str.substring(str.length - 7));

//23

let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

let above5 = numArray.filter(number => number > 5)
console.log(above5)

//24 

let under5 = numArray.filter(number => number < 5)
console.log(under5)

//25 

let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]

let filteredPersons = persons.filter(person => person.age >= 18)
console.log(filteredPersons)

//26

let filteredPersons2 = persons.filter(person => person.age < 18)
console.log(filteredPersons2)

//27

let arr1 = ['beta', 'alfa', 'gamma'];
console.log(arr1.sort())

//28

let nums2 = [1,5,7,9,3,4,2,6,8];
console.log(nums2.sort())

//29

console.log(persons.sort((a, b) => a.age - b.age))

//30 

console.log(persons.sort((a , b) => b.age - a.age))

//31

console.log(persons.sort((a, b) => a.name.localeCompare(b.name)))

//32 

let personsBig = persons.map(person => ({ ...person, name: person.name.toUpperCase()}));
console.log(personsBig)

//33

let personReverse = persons.map(person => ({...person, name: person.name.split('').reverse().join('')}))
console.log(personReverse)

//34 

let fruits3 = ['apelsin', 'päron', 'äpple', 'kiwi'];

fruits3.forEach(element => {
    console.log(element)
})

//35

for (const element of fruits3) {
    console.log(element)
}

//36 

for(i = 0; i < fruits3.length; i++) {
    console.log(fruits3[i])
}

//37

for(i = 0; i < fruits3.length; i++) {
    console.log(`${i} - ` , fruits3[i])
}

