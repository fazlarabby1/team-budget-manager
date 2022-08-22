// Adding event listener to the Calculate button inside the budget section
document.getElementById('player-cost-button').addEventListener('click', function(){
    // Getting the total selected players number and per player cost input
    const perPlayerAmount = getInputAmount('player-cost');
    const totalPlayer = players.length;
    // Condition to check if the input value is negative or not. If not then calculate the total expense and set the value as innerText
    if(perPlayerAmount > 0){
        const totalPlayerExpense = perPlayerAmount * totalPlayer;
    document.getElementById('total-player-expense').innerText = totalPlayerExpense;
    }
    // Alert for negative value on the per player input section
    else
    alert('Enter a valid input please!!!!!');
});

// Adding event listener to the Calculate total button inside the budget section
document.getElementById('total-cost-button').addEventListener('click', function(){

    const playerExpense = getFieldTextAmount('total-player-expense');
    const managerCost = getInputAmount('manager-cost');
    const coachCost = getInputAmount('coach-cost');

    // Condition to check the input of the coach and manager input value
    if(managerCost > 0 && coachCost > 0){
        const totalExpense = playerExpense + managerCost + coachCost;
    document.getElementById('total-amount').innerText = totalExpense;
    }
    // Alert for negative value
    else
    alert('Please Enert a valid input!!!');
})