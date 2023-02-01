function receivesAFunction (callback) {
    console.log(callback());
}
receivesAFunction(function () {return "This is just a random callback for this assignment"})

function returnsANamedFunction(random1) {
    return function someRandomName () {
        console.log('This just prints some randomness')
    }

}

function returnsAnAnonymousFunction(random2) {
    return function () {
        console.log("Just returning something anoynmously, did I even spell that right?")
    }
}