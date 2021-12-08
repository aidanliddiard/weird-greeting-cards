//NAME
// get the input form control
const nameInput = document.getElementById('name-input');
const birthdayName = document.getElementById('birthday-name');
nameInput.addEventListener('input', () => {
    birthdayName.textContent = nameInput.value;
})

    // Image
const photoSelect = document.getElementById('photo-select');
const chosenPhoto = document.getElementById('chosen-image');
const card = document.getElementById('card');
photoSelect.addEventListener('change', () => {
    chosenPhoto.src = photoSelect.value;
    const theme = photoSelect.value.replace('photos/', '').replace('.jpg', '');
    card.classList.value = '';
    card.classList.add(theme);
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
//const card = document.getElementById('card');
const exportButton = document.getElementById('export-button');
exportButton.addEventListener('click', async () => {
  const dataUrl = await domtoimage.toPng(card);
  const link = document.createElement('a');
  link.download = nameInput.value + '.png';
  link.href = dataUrl;
  link.click();
});

