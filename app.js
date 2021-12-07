//NAME
// get the input form control
const nameInput = document.getElementById('name-input');

// get the span for the birthday name
const birthdayName = document.getElementById('birthday-name');

// add the event listener for input changing
// 1. name of event (string)
// 2. function to "call us back" when the event happens
nameInput.addEventListener('input', () => {
    console.log('input changed', nameInput.value);
birthdayName.textContent = nameInput.value;
})
    //when it changes, update the value of the span