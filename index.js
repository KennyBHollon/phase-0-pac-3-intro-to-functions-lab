// Part 1
function shout(hello) {
    return `HELLO`.toUpperCase();
}

// Part 2
function whisper(HELLO) {
    return `Hello`.toLowerCase();
}

// Part 3
function logShout(string) {
    console.log(
        string.toUpperCase()
        );
}

logShout(`hello`);

// Part 4
function logWhisper(string) {
    console.log(
        string.toLowerCase()
        );
}

logWhisper(`HELLO`);

// Part 5
let string = `hello`

function sayHiToGrandma(string) {
    switch (string) {
        case `hello`:
            return `I can\'t hear you!`
            break;
        case `HELLO`:
            return `YES INDEED!`
            break;
        case `I love you, Grandma.`:
            return `I love you, too.`
    }

}



  




