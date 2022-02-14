/* |--------------------------|*/
/* |  Includes Player logic   |*/
/* |--------------------------|*/

function openPlayerConfig(event) {
  editedPlayerId = +event.target.dataset.playerid; //reads the assigned playerid property and stores it in editedPlayerId as a number
  configOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  configOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ''; //practice digging into DOM
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //FormData => object Blueprint
  const enteredPlayerName = formData.get('player-name').trim();

  if(!enteredPlayerName){ // enteredPlayerName == ''
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }
  
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayerId + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayerId -1].name = enteredPlayerName;
//   same same player name edit
//   if (editedPlayerId === 1){
//     players[0].name = enteredPlayerName;
//   } else {
//     players[1].name = enteredPlayerName;
//   }
  

  closePlayerConfig();
}
