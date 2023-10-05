//1 
function count1000() {
    for(i = 0; i < 1000; i++) {
        console.log(i)
    }
}

//2 

function count100down() {
    for(i = 100; i > 0; i--) {
        console.log(i)
    }
}

//3 

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
function printFruits() {
    for(i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }
}

//4 

function printFruits2() {
    for(i = 0; i < fruits.length; i++) {
        console.log(`${i}`, fruits[i])
    }
}

//5 

function printMath() {
    for(i = 1; i <= 10; i++) {
        console.log((7 * i))
    }
}

//6 

const frukter = ["äpple", "banan", "apelsin", "jordgubbe", "kiwi"];

function printFruits3() {
    for(i = 0; i < frukter.length; i++) {
        console.log(frukter[i])
    }
}

//7 

function searchArray(array, key) {
    let result = [];
    for(i = 0; i < array.length; i++) {
        if (array[i] === key) {
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
}


//8

let numbers = [123, 1, 2, 3, 45, 56, 678, 1000]

function highestNumber(array) {
    let highestNum = 0;

    for(i = 0; i < array.length; i++) {
        if (array[i] > highestNum) {
            highestNum = array[i]
        }
    }

    console.log(`${highestNum} was the highest number in the array`)
}

//9 

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

function printThings() {
    for (let thing of things) {
        console.log(thing)
    }
}

// 10

function printThings2() {
    for(let [thing, a] of things.entries()) {
        console.log(thing, a)
    }
}

//11 

function print1000() {
    let i = 0;
    while (i < 1000) {
        console.log(i)
        i++
    }
}

//12

function generateCardDeck() {

    let specialCards = ['knäckt', 'dam', 'kung', 'ess']

    for (i = 0; i < 4; i++) {
        
        switch(i) {
            case 0:
                for (j = 2; j < 11; j++) {
                    console.log(`Härter ${j}`)
                }

                for (k = 0; k < 4; k++) {
                    console.log(`Hjärter ${specialCards[k]}`)
                }
                break;

            case 1: 
                for (j = 2; j < 11; j++) {
                    console.log(`Ruter ${j}`)
                }

                for (k = 0; k < 4; k++) {
                    console.log(`Ruter ${specialCards[k]}`)
                }
                break;

            case 2:
                for (j = 2; j < 11; j++) {
                    console.log(`Spader ${j}`)
                }

                for (k = 0; k < 4; k++) {
                    console.log(`Spader ${specialCards[k]}`)
                }
                break;

            case 3: 
                for (j = 2; j < 11; j++) {
                   console.log(`Klöver ${j}`)
                }

                for (k = 0; k < 4; k++) {
                    console.log(`Klöver ${specialCards[k]}`)
                }
                break;

            default:
                break;
        }
    }
}


//13

let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

function listFruit() {
    for(i = 0; i < friends.length; i++) {
        console.log(friends[i].name)

        for(j = 0; j < friends[i].likes.length; j++) {
            console.log(friends[i].likes[j])
        }
    }
}

//14

const passwords = [123456, "password", 12345678, "qwerty", 123456789, 12345, 1234, 111111, 1234567, "dragon", 123123, "baseball", "abc123", "football", "monkey", "letmein", 696969, "shadow", "master", 666666, "qwertyuiop", 123321, "mustang", 1234567890, "michael", 654321, "pussy", "superman", "1qaz2wsx", 7777777, "fuckyou", 121212, "qazwsx", "123qwe", "killer", "trustno1", "jordan", "jennifer", "zxcvbnm", "asdfgh", "hunter", "buster", "soccer", "harley", "batman", "andrew", "tigger", "sunshine", "iloveyou", "fuckme", 2000, "charlie", "robert", "thomas", "hockey", "ranger", "daniel", "starwars", "klaster", 112233, "george", "asshole", "computer", "michelle", "jessica", "pepper", 1111, "zxcvbn", 555555, 11111111, 131313, "freedom", 777777, "pass", "fuck", "maggie", 159753, "aaaaaa", "ginger", "princess", "joshua", "cheese", "amanda", "summer", "love", "ashley", 6969, "nicole", "chelsea", "biteme", "matthew", "access", "yankees", 987654321, "dallas", "austin", "thunder", "taylor", "matrix", "william", "corvette", "hello", "martin", "heather", "secret", "fucker", "merlin", "diamond", "1234qwer", "gfhjkm", "hammer", "silver", 222222, 88888888, "anthony", "justin", "test", "bailey", "q1w2e3r4t5", "patrick", "internet", "scooter", "orange", 11111, "golfer", "cookie", "richard", "samantha", "bigdog", "guitar", "jackson", "whatever", "mickey", "chicken", "sparky", "snoopy", "maverick", "phoenix", "camaro", "sexy", "peanut", "morgan", "welcome", "falcon", "cowboy", "ferrari", "samsung", "andrea", "smokey", "steelers", "joseph", "mercedes", "dakota", "arsenal", "eagles", "melissa", "boomer", "booboo", "spider", "nascar", "monster", "tigers", "yellow", "xxxxxx", 123123123, "gateway", "marina", "diablo", "bulldog", "qwer1234", "compaq", "purple", "hardcore", "banana", "junior", "hannah", 123654, "porsche", "lakers", "iceman", "money", "cowboys", 987654, "london", "tennis", 999999, "ncc1701", "coffee", "scooby", "miller", "boston", "q1w2e3r4", "fuckoff", "brandon", "yamaha", "chester", "mother", "forever", "johnny", "edward", 333333, "oliver", "redsox", "player", "nikita", "knight", "fender", "barney", "midnight", "please", "brandy", "chicago", "badboy", "iwantu", "slayer", "rangers", "charles", "angel", "flower", "bigdaddy", "rabbit", "wizard", "bigdick", "jasper", "enter", "rachel", "chris", "steven", "winner", "adidas", "victoria", "natasha", "1q2w3e4r", "jasmine", "winter", "prince", "panties", "marine", "ghbdtn", "fishing", "cocacola", "casper", "james", 232323, "raiders", 888888, "marlboro", "gandalf", "asdfasdf", "crystal", 87654321, 12344321, "sexsex", "golden", "blowme", "bigtits", 8675309, "panther", "lauren", "angela", "bitch", "spanky", "thx1138", "angels", "madison", "winston", "shannon", "mike", "toyota", "blowjob", "jordan23", "canada", "sophie", "Password", "apples", "dick", "tiger", "razz", "123abc", "pokemon", "qazxsw", 55555, "qwaszx", "muffin", "johnson", "murphy", "cooper", "jonathan", "liverpoo", "david", "danielle", 159357, "jackie", 1990, "123456a", 789456, "turtle", "horny", "abcd1234", "scorpion", "qazwsxedc", 101010, "butter", "carlos", "password1", "dennis", "slipknot", "qwerty123", "booger", "asdf", 1991, "black", "startrek", 12341234, "cameron", "newyork", "rainbow", "nathan", "john", 1992, "rocket", "viking", "redskins", "butthead", "asdfghjkl", 1212, "sierra", "peaches", "gemini", "doctor", "wilson", "sandra", "helpme", "qwertyui", "victor", "florida", "dolphin", "pookie", "captain", "tucker", "blue", "liverpool", "theman", "bandit", "dolphins", "maddog", "packers", "jaguar", "lovers", "nicholas", "united", "tiffany", "maxwell", "zzzzzz", "nirvana", "jeremy", "suckit", "stupid", "porn", "monica", "elephant", "giants", "jackass", "hotdog", "rosebud", "success", "debbie", "mountain", 444444, "xxxxxxxx", "warrior", "1q2w3e4r5t", "q1w2e3", "123456q", "albert", "metallic", "lucky", "azerty", 7777, "shithead", "alex", "bond007", "alexis", 1111111, "samson", 5150, "willie", "scorpio", "bonnie", "gators", "benjamin", "voodoo", "driver", "dexter", 2112, "jason", "calvin", "freddy", 212121, "creative", "12345a", "sydney", "rush2112", 1989, "asdfghjk", "red123", "bubba", 4815162342, "passw0rd", "trouble", "gunner", "happy", "fucking", "gordon", "legend", "jessie", "stella", "qwert", "eminem", "arthur", "apple", "nissan", "bullshit", "bear", "america", "1qazxsw2", "nothing", "parker", 4444, "rebecca", "qweqwe", "garfield", "beavis", 69696969, "jack", "asdasd", "december", 2222, 102030, 252525, 11223344, "magic", "apollo", "skippy", 315475, "girls", "kitten", "golf", "copper", "braves", "shelby", "godzilla", "beaver", "fred", "tomcat", "august", "buddy", "airborne", 1993, 1988, "lifehack", "qqqqqq", "brooklyn", "animal", "platinum", "phantom", "online", "xavier", "darkness", "blink182", "power", "fish", "green", 789456123, "voyager", "police", "travis", "12qwaszx", "heaven", "snowball", "lover", "abcdef", "pakistan", , "walter", "playboy", "blazer", "cricket", "sniper", "hooters", "donkey", "willow", "loveme", "saturn", "therock", "redwings", "bigboy", "pumpkin", "trinity", "williams", "tits", "nintendo", "digital", "destiny", "topgun", "runner", "marvin", "guinness", "chance", "bubbles", "testing", "fire", "november", "minecraft", "asdf1234", "lasvegas", "sergey", "broncos", "cartman", "private", "celtic", "birdie", "little", "cassie", "babygirl", "donald", "beatles", 1313, "dickhead", "family", 12121212, "school", "louise", "gabriel", "eclipse", "fluffy", 147258369, "lol123", "explorer", "beer", "nelson", "flyers", "spencer", "scott", "lovely", "gibson", "doggie", "cherry", "andrey", "snickers", "buffalo", "pantera", "metallica", "member", "carter", "qwertyu", "peter", "alexande", "steve", "bronco", "paradise", "goober", 5555, "samuel", "montana", "mexico", "dreams", "michigan", "cock", "carolina", "yankee", "friends", "magnum", "surfer", "poopoo", "maximus", "genius", "cool", "vampire", "lacrosse", "asd123", "aaaa", "christin", "kimberly", "speedy", "sharon", "carmen", 111222, "kristina", "sammy", "racing", "ou812", "sabrina", "horses", "qwerty1", "pimpin", "baby", "stalker", "enigma", 147147, "star", "poohbear", "boobies", 147258, "simple", "bollocks", "12345q", "marcus", "brian", 1987, "qweasdzxc", "drowssap", "hahaha", "caroline", "barbara", "dave", "viper", "drummer", "action", "einstein", "bitches", "genesis", "hello1", "scotty", "friend", "forest", "hotrod", "google", "vanessa", "spitfire", "badger", "maryjane", "friday", "alaska", "1232323q", "tester", "jester", "jake", "champion", "billy", 147852, "rock", "hawaii", "badass", "chevy", 420420, "walker", "stephen", "eagle1", "bill", 1986, "october", "gregory", "svetlana", "pamela", 1984, "music", "shorty", "westside", "stanley", "diesel", "courtney", 242424, "kevin", "porno", "hitman", "boobs", "mark", "12345qwert", "reddog", "frank", "qwe123", "popcorn", "patricia", "aaaaaaaa", 1969, "teresa", "mozart", "buddha", "anderson", "paul", "melanie", "abcdefg", "security", "lucky1", "lizard", "denise", 3333, "a12345", 123789, "ruslan", "stargate", "simpsons", "scarface", "eagle", "123456789a", "thumper", "olivia", "naruto", 1234554321, "general", "cherokee", "a123456", "vincent", "Usuckballz1", "spooky", "qweasd", "cumshot", "free", "frankie", "douglas", "death", 1980, "loveyou", "kitty", "kelly", "veronica", "suzuki", "semperfi", "penguin", "mercury", "liberty", "spirit", "scotland", "natalie", "marley", "vikings", "system", "sucker", "king", "allison", "marshall", 1979, "qwerty12", "hummer", "adrian", 1985, "vfhbyf", "sandman", "rocky", "leslie", "antonio", 98765432, 4321, "softball", "passion", "mnbvcxz", "bastard", "passport", "horney", "rascal", "howard", "franklin", "bigred", "assman", "alexander", "homer", "redrum", "jupiter", "claudia", 55555555, 141414, "zaq12wsx", "shit", "patches", "nigger", "cunt", "raider", "infinity", "andre", 54321, "galore", "college", "russia", "kawasaki", "bishop", 77777777, "vladimir", "money1", "freeuser", "wildcats", "francis", "disney", "budlight", "brittany", 1994, "sweet", "oksana", "honda", "domino", "bulldogs", "brutus", "swordfis", "norman", "monday", "jimmy", "ironman", "ford", "fantasy", 9999, 7654321, "PASSWORD", "hentai", "duncan", "cougar", 1977, "jeffrey", "house", "dancer", "brooke", "timothy", "super", "marines", "justice", "digger", "connor", "patriots", "karina", 202020, "molly", "everton", "tinker", "alicia", "rasdzv3", "poop", "pearljam", "stinky", "naughty", "colorado", "123123a", "water", "test123", "ncc1701d", "motorola", "ireland", "asdfg", "slut", "matt", "houston", "boogie", "zombie", "accord", "vision", "bradley", "reggie", "kermit", "froggy", "ducati", "avalon", 6666, 9379992, "sarah", "saints", "logitech", "chopper", 852456, "simpson", "madonna", "juventus", "claire", 159951, "zachary", "yfnfif", "wolverin", "warcraft", "hello123", "extreme", "penis", "peekaboo", "fireman", "eugene", "brenda", 123654789, "russell", "panthers", "georgia", "smith", "skyline", "jesus", "elizabet", "spiderma", "smooth", "pirate", "empire", "bullet", 8888, "virginia", "valentin", "psycho", "predator", "arizona", 134679, "mitchell", "alyssa", "vegeta", "titanic", "christ", "goblue", "fylhtq", "wolf", "mmmmmm", "kirill", "indian", "hiphop", "baxter", "awesome", "people", "danger", "roland", "mookie", 741852963, 1111111111, "dreamer", "bambam", "arnold", 1981, "skipper", "serega", "rolltide", "elvis", "changeme", "simon", "1q2w3e", "lovelove", "fktrcfylh", "denver", "tommy", "mine", "loverboy", "hobbes", "happy1", "alison", "nemesis", "chevelle", "cardinal", "burton", "wanker", "picard", 151515, "tweety", "michael1", 147852369, 12312, "xxxx", "windows", "turkey", 456789, 1974, "vfrcbv", "sublime", 1975, "galina", "bobby", "newport", "manutd", "daddy", "american", "alexandr", 1966, "victory", "rooster", "qqq111", "madmax", "electric", "bigcock", "a1b2c3", "wolfpack", "spring", "phpbb", "lalala", "suckme", "spiderman", "eric", "darkside", "classic", "raptor", "123456789q", "hendrix", 1982, "wombat", "avatar", "alpha", "zxc123", "crazy", "hard", "england", "brazil", 1978, "wildcat", "polina", "freepass"];
const topsecret = passwords[(Math.floor(Math.random() * passwords.length))];

function bruteForce() {
    for (i = 0; i < passwords.length; i++) {
        if (topsecret === passwords[i]) {
            console.log(`Aha! I found you, ${passwords[i]} at index ${[i]}`)
            break;
        }
    }
}

bruteForce()