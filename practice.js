
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



const getDog = (dogBreed) => {

    if (dogBreed === "meow"){

       return  "I like cats"

    }else{

       return `My favorite dog is a ${dogBreed}`

    }
}
    const dog = getDog("meow")
    console.log(`When it comes to pets, ${dog}`)


