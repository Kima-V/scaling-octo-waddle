 function playGame(playerChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            let result;

            if (playerChoice === computerChoice) {
                result = "It's a tie!";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = "You win!";
            } else {
                result = "You lose!";
            }

            console.log(`You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`);
        }

        // Example: playGame('rock');