const wakeDog = (dogName, dogBreed) => {
    let str = `Wake ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

const leashDog = (dogName, dogBreed) => {
    let str = `Leash ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

const walkToPark = (dogName, dogBreed) => {
    let str = `Walk to the park with ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

const throwFrisbee = (dogName, dogBreed) => {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

const walkHome = (dogName, dogBreed) => {
    let str = `Walk home with ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

const unleashDog = (dogName, dogBreed) => {
    let str = `Unleash ${dogName} the ${dogBreed }`
    console.log(str)
    return str 
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

const exerciseDog = (dogName, dogBreed) => 
    routine.map((callback) => callback(dogName, dogBreed))
