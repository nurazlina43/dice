function playDice()
{
        // Generate a random number from 1 to 6
        var firstRandomNum = Math.floor(Math.random() * 6) + 1;
        var firstDiceImage = 'images/dice' + firstRandomNum + '.png';
        
        var secondRandomNum = Math.floor(Math.random() * 6) + 1;
        var secondDiceImage = 'images/dice' + secondRandomNum + '.png';

        var image1= document.querySelectorAll('img')[0];
        image1.setAttribute('src', firstDiceImage);

        var image2= document.querySelectorAll('img')[1];
        image2.setAttribute('src', secondDiceImage);

        //Logic for Winner
        if (firstRandomNum > secondRandomNum) {
            document.querySelector('h1').innerHTML = 'The Winner is Player 1'

        } else if (firstRandomNum < secondRandomNum) {
            document.querySelector('h1').innerHTML = 'The Winner is Player 2'
        } else {
            document.querySelector('h1').innerHTML = "It's a Draw!"
        }

}

document.querySelector("button").addEventListener("click", playDice);