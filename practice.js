
// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7

//     return ageInDogYears
// }

//  const dogAge = calculateAgeInDogYears(56)
// console.log(dogAge)

// const getDog = (dogBreed) => {
//     const favDog = `My favorite dog breed is ${dogBreed}`

//     return favDog
// }
// const dog = getDog("bordercollie")


// console.log(`When it comes to pets, ${dog}`)

// if (dog === "meow") {
//    console.log("I like Cats")
// }


// BEST IN SHOW 
const getDog = (dogBreed) => {

    if (dogBreed === "meow") {

        return "I like cats"

    } else {

        return `My favorite dog is a ${dogBreed}`

    }
}
const dog = getDog("meow")
console.log(`When it comes to pets, ${dog}`)




// ADDITION


const add = (first, second, third) => {
    const sum = first + second + third
    return sum
}

const total = add(17, 4, 11)
console.log(total)



// // SELF DRIVING CARS 

const go = (Direction, Speed) => {

    const car = `The car is moving ${Direction} at ${Speed} mph`
    return car
}

const message = go("forwards", 45)
console.log(message)



// // EVENS OR ODDS

const evenOrOdd = (number) => {

    if (number % 2 == 0) {

        return "even"

    } else {

        return `odd`

    }
}
const result = evenOrOdd(12)
console.log(`${result}`)

// // DOUBLE FUNCTIONS


// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// const unWantedWords = (word) => {

//     const kWords = words.startsWith("k")
//     return KWords
// }

// const getRidOf = unWantedWords(words)
// console.log(getRidOf)

// const convertArray = (words) => {
//     const convert = words.join()
//     return convert
// }

// convertArray(convert)

// console.log(words)



//TUNE A PIANO

const catchingTuna = () => {
    const randomNumber = Math.random(0) * 3

    if (randomNumber >= 0 && randomNumber < 1) {
        return "Sven hooked a tuna! :)"

    } else {
        return "Sven came up empty-handed :("

    }

}

const outcome = catchingTuna(1)
console.log(`Today ${outcome} `)


// FAST FOOD

const foodOrder = (sandwich, side, drink, dessert) => {

    const order = `"sandwich": "${sandwich}",
    "side": "${side}",
    "drink":"${drink}" ,
    "dessert":${dessert}"`

    return order
}

const theOrder = foodOrder("Ultimate Slammer", "Potato wedges", "Mr.Pepper", "Fudge sundae")
console.log(theOrder)


//SAME CHORES, DIFFERENT DAYS

// const timesFive = number => number * 5 
// console.log(timesFive(2))
// console.log(timesFive(5))

// const square = number => number * number
// console.log(square(4))
// console.log(square(13))

const twice = number => number * 2
const timesFive = number => number * 5
const square = number => number * number

const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}

const number = 7
const by2 = bigify(number, twice)
const by5 = bigify(number, timesFive)
const byItself = bigify(number, square)


//SCOPE --------



const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



// CONJUNCTION

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord


}
const word = conjunction("Master", "Card")
console.log(word)




// MODSQUAD


//     const modSquad = {
//         members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         series: {
//             start: "1968",
//             end: "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     modSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
//     })


// console.log(HTMLRepresentation)


// LOCATIONS
let locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

for (const location of locations) {
    let invalidLocation = true
    if (location[0] >= 2) {

    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}


// LLAMAS 


const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]

        return name + suffix

    }

    return namer()

}

const nameMaker = llamaNamer()
console.log(nameMaker)



//THE PERRY SCOPE


const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        let availableForPurchase = false

        if (toy === "Perry Scope") {
            availableForPurchase = true

        }


        if (availableForPurchase) {
            console.log("Enjoy your new Perry Scope")


        }

    }
}
sellPerryScope() 





