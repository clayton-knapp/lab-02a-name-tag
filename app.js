// create variable for each element we need to interact with
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('change-button');
const nameDisplay = document.getElementById('name-display');

// add listeners for events we care about
changeButton.addEventListener('click', () => {
    //console.log(nameInput.value);
    nameDisplay.textContent = nameInput.value;
});


//COLOR BUTTON
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const yellowButton = document.getElementById('yellow-button');
const redButton = document.getElementById('red-button');
const headerColor = document.getElementById('header');
const footerColor = document.getElementById('footer');

blueButton.addEventListener('click', () =>{
    headerColor.style.backgroundColor = 'blue';
    footerColor.style.backgroundColor = "blue";
})
greenButton.addEventListener('click', () =>{
    headerColor.style.backgroundColor = 'green';
    footerColor.style.backgroundColor = "green";
})
yellowButton.addEventListener('click', () =>{
    headerColor.style.backgroundColor = 'yellow';
    footerColor.style.backgroundColor = "yellow";
})
redButton.addEventListener('click', () =>{
    headerColor.style.backgroundColor = 'red';
    footerColor.style.backgroundColor = "red";
})


//ADD PRONOUNS

const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounDisplay = document.getElementById('pronoun-display');

pronounButton.addEventListener('click', () =>{
    pronounDisplay.textContent = pronounInput.value;
})