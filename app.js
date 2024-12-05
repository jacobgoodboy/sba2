/*
1 How do we assign a value to a variable?  

With the equal sign

2 How do we change the value of a variable? 

we update the value with the help of the = operator or use certain functions

3 How do we assign an existing variable to a new variable? 

say you had x=10 you can do y=x

4 Remind me, what are declare, assign, and define? 

declaring is the declaration, for example let x, assign is the assignment of some value to a variable x=10, define is when we define a function.


5 What is pseudocoding and why should you do it?

pseudocoding is good to explain the flow or the concept of the logic, it's more close to human language.

6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
90% of time should be spent thinking about the problem and it's implementation. The rest is easy. You just have to put it into code.
*/

// B Strings

let firstVariable;
firstVariable = 'Hello World'
firstVariable = 1
let secondVariable = firstVariable
secondVariable = 'Hello i am Jacob M'

console.log(firstVariable)

let yourName = 'Jacob'
let myNameIs = function (name) {
    console.log(`Hello, my name is ${name}`)

}

myNameIs(yourName)

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b)
console.log(c > d)
console.log('Name' == 'Name')

console.log(true || false)
console.log(false || false || false || false || false || true)
console.log(false == false)

console.log(e == 'Kevin')
console.log(a != b != c)
console.log(a * a == d)
console.log(48 == '48')

//D. The Farm

let animal = 'cow'
if (animal == 'cow') {
    console.log('moooooo')

} else {
    console.log('Hey you are not a cow!')
}

//E. Driver's Ed
let age = 12
if (age >= 16) {
    console.log('here are the keys')
} else {
    console.log('Sorry, you\'re too young')
}


//Loops A. The basics
for (let i = 0; i < 11; i++) {
    console.log(i)
}

for (let i = 10; i < 401; i++) {
    console.log(i)
}

for (let i = 12; i < 4000; i += 3) {
    console.log(i)
}

//B. Get even
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is an even number`)
    } else {
        console.log(i)
    }
}

//C. Give me Five
for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`I found a ${i}. Three is a crowd and High five!`)
    } else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd!`)
    } else if (i % 5 == 0) {
        console.log(`I found a ${i}. High Five!`)
    }
}

//D. Savings account
let bankAccount = 0
for (i = 0; i < 11; i++) {
    bankAccount += i
}

console.log(bankAccount)

bankAccount = 0
for (i = 0; i < 101; i++) {
    bankAccount += i
}

console.log(bankAccount * 2)

//III. Arrays & Control flow
//A. Talk about It!
//B. Easy does it!
let arr = ['', '', '']

//C. accessing elements
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])
randomThings[2] = 'World'
console.log(randomThings)

//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass[2])

ourClass[ourClass.length - 1] = 'Octocat'
console.log(ourClass)

ourClass.push('Cloud City')

console.log(ourClass)

//E. Mix It Up
const myArray = [5, 10, 500, 20]
myArray.push('Aegon', 'Geoman')

console.log(myArray)

myArray.shift()
console.log(myArray)

myArray.unshift('Bob Marley')

console.log(myArray)

myArray.pop()
console.log(myArray)

console.log(myArray.reverse())
console.log(myArray)
//F. Biggie Smalls
let variableInteger = 100
if (variableInteger < 100) {
    console.log('little number')
} else {
    console.log('big number')
}

//G. Monkey in the Middle

if (variableInteger < 5) {
    console.log('little number')
} else if (variableInteger > 10) {
    console.log('big number')
} else {
    console.log('Monkey')
}




//H. What's in Your Closet?



const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

console.log('Kristyn is rocking that ' + kristynsCloset[2] + 'today')
kristynsCloset.splice(kristynsCloset.indexOf('yellow knit hat') + 1, 0, 'raybans')
console.log(kristynsCloset)
kristynsCloset[kristynsCloset.indexOf('yellow knit hat')] = 'stained knit hat'

console.log(kristynsCloset)

console.log('Thomas is wearing a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][0] + ' and a ' + thomsCloset[2][0])

thomsCloset[1][2] = 'Footie Pajamas.'

console.log(thomsCloset[1])

//IV. Functions

function printCool(a) {
    console.log(a + ' is cool')
}

printCool('a')

//C. calculateCube
function calculateCube(a) {
    a = a ** 3
    console.log(a)
}
calculateCube(5)

//D. isVowel


function isVowel(a) {
    let vowels = 'aeiou'
    if (a.length == 1 && vowels.includes(a)) {
        console.log(a + ' is a vowel')
    } else if (a.length != 1) {
        console.log('length is wrong')

    } else {
        console.log('it is not a vowel.')
    }
}
isVowel('b')

//E. getTwoLengths

function getTwoLengths(a, b) {
    let arra = [a.length, b.length]

    if (a.length != undefined && b.length != undefined) {
        console.log(arra)
    } else {
        console.log('something went wrong try again')
    }
}
getTwoLengths([1, 2, 3], 'sling')

//F. getMultipleLengths
function getMultipleLengths(a) {
    lengthOfEach = []
    a.forEach(element => {
        lengthOfEach.push(element.length)
    });
    console.log(lengthOfEach)
}

getMultipleLengths(["hello", "what", "is", "up", "dude"])

//G. maxOfThree
function maxOfThree(a, b, c) {
    let arr = [a, b, c]
    let maxnum = arr[0]
    for (let i = 0; i < 3; i++) {
        if (arr[i] > maxnum) {
            maxnum = arr[i]
        }
    }

    console.log(maxnum)
}

maxOfThree(1997, 99, 1000)

//H. printLongestWord
function printLongestWord(a) {
    let longestFirst = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longestFirst.length) {
            longestFirst = a[i]
        }
    }
    console.log(longestFirst)
}

printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])

//A. Make a user object
let user = {
    name: 'jacob',
    email: 'email',
    age: 20,
    purchased: []
}


///B. Update the user
user.email = 'newemail'
console.log(user.email)

user.age++
console.log(user.age)

//C. Adding keys and values

user["location"] = 'some location'

console.log(user.location)

//D. Shopaholic!
user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.log(user.purchased)
console.log(user.purchased[2])

//E. Object-within-object
user['friend'] = {
    name: 'Andrew',
    age: 34,
    location: 'Kentucky',
    purchased: []
}
console.log(user.friend)
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push('The One Ring')

user.friend.purchased.push('A Latte')

console.log(user.friend.purchased[1])

//F. Loops

for (let item of user.purchased) {
    console.log(item)
}

for (let item of user.friend.purchased) {
    console.log(item)
}

//G. Functions can operate on objects
function updateUser() {
    user.age++
    user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1)
}
console.log(user)
updateUser()
console.log(user)

function oldAndLoud(userRandom) {
    userRandom.age++
    userRandom.name = userRandom.name.charAt(0).toUpperCase() + userRandom.name.slice(1)
}

oldAndLoud(user.friend)
console.log(user.friend)

//Cat Combinator
let cat1 = {
    name: 'sammy',
    breed: 'seamese',
    age: 3
}
console.log(cat1.age)
console.log(cat1.breed)


let cat2 = {
    name: 'tammy',
    breed: 'seamese',
    age: 3
}

function combineCats(cat1, cat2) {
    // console.log(cat1)
    // console.log(cat2)

    return { name: cat1.name + cat2.name, breed: cat1.breed + '-' + cat2.breed, age: 1 }
}
console.log(combineCats(cat1, cat2))
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))))
