// Function to create a li child and add the child to the selected players list
function selectPlayers(listedPlayer){
    const playersList = document.getElementById('players-list');
        playersList.innerText = '';
        for (let i = 0; i < players.length; i++) {
            const player = players [i];
          const li = document.createElement('li');
          li.innerText = player;
          playersList.appendChild(li);
          }
    
    
}