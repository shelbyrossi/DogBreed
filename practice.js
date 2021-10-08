
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

const total = add(17,4,11)
console.log(total)



// // SELF DRIVING CARS 

const go = (Direction,Speed) => {
    
    const car = `The car is moving ${Direction} at ${Speed} mph`
    return car   
}

const message = go("forwards",45)
console.log(message)



// EVENS OR ODDS

const evenOrOdd = (number) => {

    if (number % 2 == 0 ) {

        return "even"

    } else {

        return `odd`

    }
}
const result = evenOrOdd(12)
console.log(`${result}`)

