function rock(){
    const pic = document.getElementById('pic');
    pic.src="rock.png";
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        document.getElementById('pic2').src="rock.png";
        alert('Tie');
        console.log(result);
    }else if(random === 1){
        document.getElementById('pic2').src="paper.png";
        result = 'paper';
        alert('You Lose!');
    }else if(random === 2){
        document.getElementById('pic2').src="scissor.png";
        result = 'scissor';
        alert('You Win!');
    }
    
    console.log(result);


}

function paper(){
    const pic = document.getElementById('pic');
    pic.src="paper.png";
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        document.getElementById('pic2').src="rock.png";
        alert('You Win!');
    }else if(random === 1){
        document.getElementById('pic2').src="paper.png";
        result = 'paper';
        alert('Tie');
    }else if(random === 2){
        document.getElementById('pic2').src="scissor.png";
        result = 'scissor';
        alert('You Lose!');
    }
    console.log(result);

}

function scissor(){
    const pic = document.getElementById('pic');
    pic.src="scissor.png";
    let result = '';
    let random = Math.round(Math.random() * 2);

    if (random === 0){
        result = 'rock';
        document.getElementById('pic2').src="rock.png";
        alert('You Lose!');
    }else if(random === 1){
        document.getElementById('pic2').src="paper.png";
        result = 'paper';
        alert('You Win!');
    }else if(random === 2){
        document.getElementById('pic2').src="scissor.png";
        result = 'scissor';
        alert('Tie');
    }
    console.log(result);

}