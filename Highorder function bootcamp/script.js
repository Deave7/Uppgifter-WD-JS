//1 
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


//2
let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
]

const author = books => books.filter(book => book.author === 'Jules Verne' )


//3
let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
]

const sum = people => people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0)

//4 
let numbers2 = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

const minNum = numbers2 => numbers2.reduce((accumulator, number) => {
    if (accumulator === null || number > accumulator) {
        return number
    }

    return accumulator
})

//5
const titles = books => books.map(books => books.title)


//6
const under40 = people => people.every(people => people.age < 40)

//7
let countries = [
    { name: 'Sweden', continent: 'Europe' },
    { name: 'Canada', continent: 'North America' },
    { name: 'Brazil', continent: 'South America' },
    { name: 'Japan', continent: 'Asia' },
    { name: 'Australia', continent: 'Oceanien'},
    { name: 'Egypt', continent: 'Africa' }
]

const printAllCountries = countries => countries.forEach(country => { 
    console.log(country.name)
});

const printAllContinents = countries => countries.forEach(continent => {
    console.log(continent.continent)
})

const printAllEuCountries = countries => { 
    const europeanCountries = countries.filter(countries => countries.continent === 'Europe')
    europeanCountries.forEach(country => {
        console.log(country.name)
    })
}

const searchForCountry = (countries, key) => { 
    const searchTerm = countries.filter(countries => countries.name === key) 
    console.log(searchTerm[0].name)
}

//8
let people2 = [
	{ email: "Nael.Henry@example.com", "nat": "FR"	},
	{ email: "Sara.Faure@example.com", "nat": "FR"	},
	{ email: "Christel.Legrand@example.com", "nat": "CH"	},
	{ email: "Domenico.Bohner@example.com", "nat": "DE"	},
	{ email: "Ingebjorg.Rishaug@example.com", "nat": "NO"	},
	{ email: "Edwin.Hudson@example.com", "nat": "US"	},
	{ email: "Esma.Yilmazer@example.com", "nat": "TR"	},
	{ email: "Rasmus.Sakala@example.com", "nat": "FI"	},
	{ email: "Nuri.Schuldt@example.com", "nat": "DE"	},
	{ email: "Theo.Giraud@example.com", "nat": "FR"	},
	{ email: "Jose.Sanchez@example.com", "nat": "GB"	},
	{ email: "Lynn.Harink@example.com", "nat": "NL"	},
	{ email: "Layla.Johnson@example.com", "nat": "NZ"	},
	{ email: "Remi.Arnaud@example.com", "nat": "FR"	},
	{ email: "Nuno.Brun@example.com", "nat": "CH"	},
	{ email: "Paula.Patterson@example.com", "nat": "AU"	},
	{ email: "Encarnacion.Saez@example.com", "nat": "ES"	},
	{ email: "Jeff.Marshall@example.com", "nat": "IE"	},
	{ email: "Felecia.Washington@example.com", "nat": "AU"	},
	{ email: "Marc.Mendez@example.com", "nat": "ES"	},
	{ email: "Waseem.Snoeck@example.com", "nat": "NL"	},
	{ email: "Brooklyn.Duncan@example.com", "nat": "US"	},
	{ email: "Samu.Kangas@example.com", "nat": "FI"	},
	{ email: "Mathias.Larsen@example.com", "nat": "DK"	},
	{ email: "Mareike.Bonisch@example.com", "nat": "DE"	},
	{ email: "Liva.Sorensen@example.com", "nat": "DK"	},
	{ email: "ysmyn.Hydry@example.com", "nat": "IR"	},
	{ email: "Adam.Brunet@example.com", "nat": "FR"	},
	{ email: "Gerald.Graves@example.com", "nat": "US"	},
	{ email: "Albert.Nieto@example.com", "nat": "ES"	},
	{ email: "Osman.Lecomte@example.com", "nat": "CH"	},
	{ email: "Mary.Sims@example.com", "nat": "AU"	},
	{ email: "Bowe.Meijerink@example.com", "nat": "NL"	},
	{ email: "Lindaura.Oliveira@example.com", "nat": "BR"	},
	{ email: "Muhammed.Nordvik@example.com", "nat": "NO"	},
	{ email: "Maelya.Martinez@example.com", "nat": "FR"	},
	{ email: "myrHsyn.njty@example.com", "nat": "IR"	},
	{ email: "Gabe.Mccoy@example.com", "nat": "GB"	},
	{ email: "Suzanne.Clement@example.com", "nat": "CH"	},
	{ email: "Samara.Rezende@example.com", "nat": "BR"	},
	{ email: "Kaja.Kjorstad@example.com", "nat": "NO"	},
	{ email: "Lucie.Roussel@example.com", "nat": "FR"	},
	{ email: "Maxime.Brown@example.com", "nat": "CA"	},
	{ email: "ysmyn.shylyrd@example.com", "nat": "IR"	},
	{ email: "Yvette.DaSilva@example.com", "nat": "CH"	},
	{ email: "Kathleen.Lawrence@example.com", "nat": "IE"	},
	{ email: "Landon.Fox@example.com", "nat": "US"	},
	{ email: "Maeva.Lecomte@example.com", "nat": "FR"	},
	{ email: "Carter.Evans@example.com", "nat": "NZ"	},
	{ email: "Teobaldo.Jesus@example.com", "nat": "BR"	},
	{ email: "Nanna.Kristensen@example.com", "nat": "DK"	},
	{ email: "Willow.Taylor@example.com", "nat": "NZ"	},
	{ email: "Nicolas.Sirko@example.com", "nat": "CA"	},
	{ email: "Freya.Edwards@example.com", "nat": "NZ"	},
	{ email: "Martha.Alexander@example.com", "nat": "GB"	},
	{ email: "Vildan.Candan@example.com", "nat": "TR"	},
	{ email: "Ivan.Sims@example.com", "nat": "IE"	},
	{ email: "Elisa.Ehlert@example.com", "nat": "DE"	},
	{ email: "Enver.Boyer@example.com", "nat": "CH"	},
	{ email: "Candelaria.Santos@example.com", "nat": "BR"	},
	{ email: "Murat.Duygulu@example.com", "nat": "TR"	},
	{ email: "Ayub.Telle@example.com", "nat": "NO"	},
	{ email: "Onni.Heinonen@example.com", "nat": "FI"	},
	{ email: "Thorbjorn.Mykland@example.com", "nat": "NO"	},
	{ email: "Tracy.Bryant@example.com", "nat": "US"	},
	{ email: "Oscar.Moller@example.com", "nat": "DK"	},
	{ email: "Sergio.Little@example.com", "nat": "IE"	},
	{ email: "Kathleen.Jungling@example.com", "nat": "DE"	},
	{ email: "Marta.Marquez@example.com", "nat": "ES"	},
	{ email: "Mathias.Nguyen@example.com", "nat": "CH"	},
	{ email: "Pauline.Gundlach@example.com", "nat": "DE"	},
	{ email: "Nur.Vervuurt@example.com", "nat": "NL"	},
	{ email: "Clinton.Cooper@example.com", "nat": "GB"	},
	{ email: "Hermann.Henry@example.com", "nat": "CH"	},
	{ email: "artyn.shylyrd@example.com", "nat": "IR"	},
	{ email: "Deniz.Akgul@example.com", "nat": "TR"	},
	{ email: "Afsar.Numanoglu@example.com", "nat": "TR"	},
	{ email: "Lumi.Haataja@example.com", "nat": "FI"	},
	{ email: "Juan.Lozano@example.com", "nat": "ES"	},
	{ email: "Fredi.Helfrich@example.com", "nat": "DE"	},
	{ email: "Afsar.Aybar@example.com", "nat": "TR"	},
	{ email: "Dino.Schaffler@example.com", "nat": "DE"	},
	{ email: "Meagan.Epskamp@example.com", "nat": "NL"	},
	{ email: "Laura.Jensen@example.com", "nat": "DK"	},
	{ email: "Pinja.Mattila@example.com", "nat": "FI"	},
	{ email: "Jayden.Ward@example.com", "nat": "IE"	},
	{ email: "Jacob.Poulsen@example.com", "nat": "DK"	},
	{ email: "Cathy.Riley@example.com", "nat": "IE"	},
	{ email: "Susanna.Kyllingstad@example.com", "nat": "NO"	},
	{ email: "Donna.Fernandez@example.com", "nat": "GB"	},
	{ email: "Aron.Krogstad@example.com", "nat": "NO"	},
	{ email: "Stefania.Meyer@example.com", "nat": "CH"	},
	{ email: "Celestine.Dumas@example.com", "nat": "FR"	},
	{ email: "Charlie.Denys@example.com", "nat": "CA"	},
	{ email: "Veli.Klemm@example.com", "nat": "DE"	},
	{ email: "Alianne.Stroeken@example.com", "nat": "NL"	},
	{ email: "Davut.Tazegul@example.com", "nat": "TR"	},
	{ email: "Jens-Peter.Pingel@example.com", "nat": "DE"	},
	{ email: "Ailo.Sande@example.com", "nat": "NO"	},
	{ email: "Ted.Lambert@example.com", "nat": "AU"	}
]

const emailFiltering = people2 => {
    const filteredList = people2.filter(people2 => people2.nat === 'FR')
    return filteredList.map(filteredList => filteredList.email)
}  

let mappedList = emailFiltering(people2)