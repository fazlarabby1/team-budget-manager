// Array to store the total players
const players = [];

// Function to get the players name and store the name in the empty array
function display(element){
    event.target.disabled = true;
    // Condition to check if the list has 5 players, if no then push
    if(players.length < 5){
      const playerName = element.parentNode.children[0].innerText;
    players.push(playerName);
    selectPlayers(players);
    }
    // If the array has 5 players then send the warning
    else{
      alert('You have already selected 5 players!!!');
      return;
    }
    
  }

  // common function to get input field value
  function getInputAmount(inputFieldId){
    const perPlayerCostString = document.getElementById(inputFieldId).value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    return perPlayerCost;
  }

  // common function to get the text amount
  function getFieldTextAmount(fieldId){
    const amountString = document.getElementById(fieldId).innerText;
    const amount = parseFloat(amountString);
    return amount;
  }