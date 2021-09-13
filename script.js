var btnRun = document.getElementsByClassName('btn')[0];
var btnStop = document.getElementsByClassName('btn')[1];
var visibleBoxes = document.getElementsByClassName('visible-block');
var invisibleBoxes = document.getElementsByClassName('invisible-block');
var result = document.getElementById('result');

function changeBoxes(currNumber){
    let div = 10;
    for(let i = 0;i < 5;i++){
        let lastElement = currNumber%div;
        if(parseInt(visibleBoxes[4-i].innerHTML) != parseInt(lastElement)){
            invisibleBoxes[4-i].innerHTML = lastElement;
            invisibleBoxes[4-i].classList.add('cover-up');
            setTimeout(function(){
                invisibleBoxes[4-i].classList.remove('cover-up');
                visibleBoxes[4-i].innerHTML = lastElement;
            },1000);

        }
        currNumber = Math.floor(currNumber/10);
    }
}

function sumIt(currNumber){
    let sum = 0;
    while(currNumber){
      sum += parseInt(currNumber%10);
      currNumber = parseInt(currNumber/10);
    }
    return sum;
}



var interval;
var currNumber = 0;
btnRun.addEventListener('click',function(){
    interval = setInterval(function(){
        currNumber =  Math.floor(Math.random()*100000);
        changeBoxes(currNumber);
    },1500);
});

btnStop.addEventListener('click',function(){
    clearInterval(interval);
    console.log(currNumber);
    var sum = sumIt(currNumber);
    if(sum == 12){
      result.innerHTML = 'You WOn';
    }
    else{
        result.innerHTML = 'You Lost, your sum was ' + sum;
    }
    return;
});