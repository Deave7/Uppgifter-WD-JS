//Bibblan
//1
let book = {
    title: 'Book one',
    author: 'Gustav Syrén',
    numPages: '123',
}

let bookTwo = {
    title: 'Book two',
    author: 'Gustav Syrén',
    numPages: '321',
}

let bookThree = {
    title: 'Book three',
    author: 'Gustav Syrén',
    numPages: '432',
}

//2
let bookArray = [book, bookTwo, bookThree]

//3
let titleKey = 'Book three'

let findTitle = bookArray.find(book => book.title === titleKey)
console.log(findTitle) 

let author = findAuthor(bookArray, 'Gustav Syrén')
console.log(author)

function findAuthor(array, key) {
    for(i = 0; i < array.length; i++) {
        if (array[i].author === key) {
            return array[i]
        }
    }
}

//Letter Frequency

function letterFrequency(string) {
    
    const letterCount = {};

    for(const char of string) {
        if (letterCount[char]) {
            letterCount[char]++
        }
        else {
            letterCount[char] = 1;
        }
    }

    return letterCount;
}

console.log(letterFrequency('hejsan'))

function letterFrequency2(string) {

    const letterCount= {};

    for(let i = 0; i < string.length; i++) {

        const char = string[i]

        if(letterCount.hasOwnProperty(char)) {
            letterCount[char]++
        }
        else {
            letterCount[char] = 1
        }
    }

    return letterCount;
}

console.log(letterFrequency2('Hello'))
