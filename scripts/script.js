function computerPlay(){
    let choice=['rock','paper','scissor']
    let result=choice[math.floor(math.random()*choice.length())]
    console.log(math.floor(math.random()*choice.length()))
    return result
}
function playRound(playerSelection,computerSelection){
    let playerPoint,computerPoint
    playerSelection=playerSelection.toLowerCase();
    switch(playerSelection){
        //Rock
        case 'rock':if(computerSelection==='rock'){
                alert('Draw! Both selected rock')
            }
            else if(computerSelection==='paper'){
                alert('You loose! Paper beats rock')
                computerPoint++
            }
            else if(computerSelection=='scissor'){
                alert('You win! Rock beats scissor')
                playerPoint++
            }
            break;
        //Paper
        case 'paper':if(computerSelection==='rock'){
                alert('You win! Paper beats rock')
                playerPoint++
            }
            else if(computerSelection==='paper'){
                alert('Draw! Both selected paper')
            }
            else if(computerSelection=='scissor'){
                alert('You loose! Scissor beat rock')
                computerPoint++
            }
            break;
        //Scissors
        case 'scissor':if(computerSelection==='rock'){
                alert('You loose! Rock beats scissor')
                computerPoint++
            }
            else if(computerSelection==='paper'){
                alert('You win! Scissor beats paper')
                playerPoint++
            }
            else if(computerSelection=='scissor'){
                alert('Draw! Both selected scissor')
            }
            break;
        default:alert('Enter proper choice')
    }
}
function game(){
    let playerChoice=prompt("Enter either rock or paper or scissor","")
    let computerChoice=computerPlay()
    while(point<=5){
        let point=playRound(playerChoice,computerChoice)
    }
}