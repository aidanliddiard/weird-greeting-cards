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

    // Image
const photoSelect = document.getElementById('photo-select');
const chosenPhoto = document.getElementById('chosen-image');
photoSelect.addEventListener('change', () => {
    console.log('photo changed', photoSelect.value);
    chosenPhoto.src = photoSelect.value;
});

// Message
const descriptionMessage = document.getElementById('description-message');
const messageDisplay = document.getElementById('message-display');
descriptionMessage.addEventListener('input', () => {
    messageDisplay.textContent = descriptionMessage.value;
});

// From
const fromInput = document.getElementById('from-input');
const fromHeader = document.getElementById('from-header');
fromInput.addEventListener('input', () => {
    fromHeader.textContent = fromInput.value;
});

//Export
const exportButton = document.getElementById('export-button');
exportButton.addEventListener('click', async () => {
  const dataUrl = await domtoimage.toPng(character);
  const link = document.createElement('a');
  link.download = nameInput.value + '.png';
  link.href = dataUrl;
  link.click();
});

