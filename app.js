// get the input form control
const nameInput = document.getElementById('name-input');

// get the span for the band name
const bandName = document.getElementById('band-name');

// add the event listener for input changing
// 1. name of event (string)
// 2. function to "call us back" when the event happens
nameInput.addEventListener('input', () => {
bandName.textContent = nameInput.value;
})
    //when it changes, update the value of the span