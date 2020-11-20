const choices = ['rock', 'paper', 'scissors'], 
outcome = ['Nice job bruh, you won', 'Hahahaha you lose', 'No winner, no loser, it\'s a draw'],
score = [0, 0, 0], // [playerscore, computerscore, draw]

broadcast = cell => document.querySelector(cell),
broadcast_result = broadcast('#result'),
broadcast_playerScore = broadcast('#playerScore'),
broadcast_computerScore = broadcast('#computerScore');


function game(){
    //for getting data from 'choices' as integer
    const user = +this.dataset.playerhand;
    const computerChoice = Math.floor(Math.random() * 3);
    const result = user === computerChoice ? 2 : (computerChoice + 1) % 3 === user ? 0 : 1;
    

    score[result]++;
    broadcast_result.innerHTML = `Player: ${choices[user]}<br>Computer: ${choices[computerChoice]}<br>${outcome[result]}`;
    broadcast_playerScore.textContent = score[0];
    broadcast_computerScore.textContent = score[1];

    
    
                                

}
// check the ...
[...document.querySelectorAll("[data-playerhand]")].forEach(choice => choice.addEventListener('click', game));

