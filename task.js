// task#1
let zakaatPer = 0.025;
let userInput;
userInput = Number(prompt('Enter value to know your amount of zakaat'));

let result = zakaatPer * userInput;

// display output
alert("your Zakaat Value is " + result);
// document.write('your Zakaat Value is '+result);

// -----------------------------------------------------------------------------------------------------------
// task#2

let familyMembers = +prompt('Enter the total number of family members:');
let fitrahMethod = +prompt('Choose a fitrah method: \n(1)Wheat[Gandum]= 2 Kilos \n(2)Barley[Jau]=  3 1/2 kilos\n(3)Date=  3 1/2 kilos\n(4)Raisin[Kishmish]=  3 1/2 kilos');
let price;

// if-else block to check the user's input
if (fitrahMethod === 1) {
    price = 250;
}
else if (fitrahMethod === 2) {
    price = 450;

}
else if (fitrahMethod === 3) {
    price = 2100;

}
else if (fitrahMethod === 4) {
    price = 2800;

}
else {
    alert('Choose a valid method please!');
}

let quantity = +prompt('Extra kilos(please enter a numeric value):');
let result = (familyMembers * price) + quantity;

// display output
alert("Your Fitrah for this year is: " + result);

// -----------------------------------------------------------------------------------------------------------
// task#3

let secretNumber = Math.round(Math.random() * 10);
let userInput = +prompt('Enter a guess for the secret number Between 0 to 10:');

// checking secret number 
if (secretNumber === userInput) {
    alert('"Congratulations! You guessed the secret number ' + secretNumber);
}
else {
    // alert for low and high 
    if (userInput > secretNumber) {
        alert('Sorry! The value is high, you failed to guess the secret number ' + secretNumber + '. \nPlease guess again');

    }
    if (userInput < secretNumber) {
        alert('Sorry! The value is low, you failed to guess the secret number ' + secretNumber + '. \nPlease guess again');

    }
}

// -----------------------------------------------------------------------------------------------------------
// task#4

let userInput = prompt('Enter a name:');

// capitalizing initial letter and Lower Case other letters
let nameToCheck = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// display output
alert('Yor name is ' + nameToCheck);

// -----------------------------------------------------------------------------------------------------------
// task#5

// empty arrays
let contactNames = [];
let contactNumbers = [];
let userName, userContact;

// user input using loop
for (i = 0; i <= 2; i++) {
    userName = prompt('enter a name:');
    // push user input in array
    contactNames.push(userName);

    userContact = prompt('enter a contact number:');
    // push user input in array
    contactNumbers.push(userContact);
}

for (i = 0; i < contactNames.length; i++) {
    console.log((i + 1) + '- ' + contactNames[i] + ' \n' + contactNumbers[i]);
}

// -----------------------------------------------------------------------------------------------------------
// task#6

let products = ['chair', 'bed', 'drawer', 'table', 'mirror', 'sofa'];

let userInput = +prompt('Which product you want:\n(please enter the code of product)\n\n0- Chair\n1- Bed\n2- Drawer\n3- Table\n4- Mirror\n5- Sofa\n');

// removing product 
products.splice(userInput,1);
console.log('Product '+userInput+' moved to cart');
// displaying remaining product list and lenght 
console.log('Add more to cart: '+products+'\nProducts remaining: '+products.length);

// -----------------------------------------------------------------------------------------------------------
// task#7

// asks the user for their nationality using the prompt function
let nationality = prompt('What is your nationality: \n(You should have Pakistani nationality to vote)');
nationality = nationality.toLowerCase();


// if-else statements to determine if the person is eligible to vote
if (nationality === 'pakistani') {

    // asks the user for their gender, and age using the prompt function
    let gender = prompt('What is your gender:');
    gender = gender.toLowerCase();
    let age = prompt('What is your age:');

// if-else statements to determine if the male candidate is eligible to vote
    if (gender === 'male') {
        if (age >= 18) {
            alert('You are eligible to vote! \nDetails: \n' + nationality + ' \n' + gender + ' \n' + age);
        }
        else {
            alert('Sorry! You are under aged \nNot eligible to vote.');
        }

    }

    // if-else statements to determine if the female candidate is eligible to vote
    else if (gender === 'female' && age >= 18) {
        let status = prompt('Are you married or unmarried:');
        status.toLowerCase();

        // asks the user for their MARITAL STATUS using the prompt function
        if (status === 'married') {
            alert('You are eligible to vote! \nDetails: \n' + nationality + ' \n' + gender + ' \n' + age + ' \n' + status);
        }
        else {
            alert('Sorry! You are Not eligible to vote.');
        }
    }
    else {
        alert('Sorry! You are under aged \nNot eligible to vote.');
    }

}
else {
    alert('You should have Pakistani nationality to vote!');
}

// -----------------------------------------------------------------------------------------------------------
// task#8


let WorldCupSquad = ['Zaman Khan', 'Tayyab Tahir', 'Saim Ayub', 'Ihsanullah', 'Babar Azam', 'Haris Rauf', 'Mohammad Rizwan', 'Zaman Khan', 'Shaheen Shah Afridi', 'Imad Wasim.', 'Imad Wasim', 'Iftikhar Ahmed', 'Abid Ali', 'Azhar Ali', 'Fawad Alam'];

console.log('World Cup Players List: \n');
// document.write('World Cup Players List: \n');

for (i = 0; i < WorldCupSquad.length; i++) {
    console.log((i + 1) + '- ' + WorldCupSquad[i] + ' \n');
    // document.write((i + 1) + '- ' + WorldCupSquad[i] + ' \n');

}

// selecting final players 
let finalTeamPlayers = [];
finalTeamPlayers = WorldCupSquad.slice(4, 15);
console.log('\nSelected Players List: \n');
document.write('Selected Players List: \n');

for (i = 0; i < finalTeamPlayers.length; i++) {
    console.log((i + 1) + '- ' + finalTeamPlayers[i] + ' \n');
    document.write((i + 1) + '- ' + finalTeamPlayers[i] + ' \n');

}

// -----------------------------------------------------------------------------------------------------------
