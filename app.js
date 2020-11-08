document.addEventListener('DOMContentLoaded' , () => {
    const squares = document.querySelectorAll('.grid div'); //selecting all div element inside div of class grid.
    const resultDisplay = document.querySelector('#result'); //selecting the result using querySelector method
    const timeleft = document.querySelector('#Time-Left'); //selecting time-left using querySelector method
    const startbtn = document.querySelector('#button'); //selectiong button using querySelector method
    const logsLeft = document.querySelectorAll('.log-left'); //selecting log-left using querySelector method
    const logsright = document.querySelectorAll('.log-right'); //selecting log-right using querySelector method
    const carsleft = document.querySelectorAll('.car-left');//selecting car-left using querySelector method
    const carsRight = document.querySelectorAll('.car-right') //selecting car-right using querySelector method
    const width = 9; // setting width equal to 9.
    let currentindex = 76; //setting current index to 76
    let currenttime = 20; //setting currenttime to 20 
    let timerid; //creating timerid For later use.
   
    //move the Frog
    function MoveFrog(e){
       //removing frog
       squares[currentindex].classList.remove('frog');
       switch(e.keyCode){
           // when width is not equal to 0 , we can move left.
           case 37: if(currentindex % width !== 0 ) currentindex -=1;
               break;
           //when current index width is less then 9 (width - 1 , cause index are zero based and it starts from zero and we have set the width equal to 9 , so width-1) we can move right
           case 39: if(currentindex % width < width -1) currentindex +=1;
               break;
           // when current index width is greater then or equal to 0 , we can move upward.
           case 38: if(currentindex - width >= 0 ) currentindex -=width;
               break;
           // when current index width is less then width * width (9*9 = 81) means it's not at bottom , we can move downward.
           case 40: if(currentindex + width < width * width) currentindex +=width;
       }
       //adding frog again
       squares[currentindex].classList.add('frog');
       win(); //reusing Win().
       lose(); //reusing Lose().
   }
      
    //move the cars
    function autoMoveCar (){
        // we used arrow function because it will allow us to give a name to individual div from all our div's called 'car-left' and pass them through a function.    
        carsleft.forEach(anything => MoveCarLeft(anything)); //each div that have class name 'car-left' pass them through a function called MoveCarLeft
        carsRight.forEach(anything => MoveCarRight(anything)); //each div that have class name 'car-right' pass them through a function called MoveCarRight
    }
    
      //move the car left on a time loop
      function MoveCarLeft(anything){
        switch(true){
            case anything.classList.contains('c1'): //if contains 'c1'
                anything.classList.remove('c1');    //then remove 'c1'
                anything.classList.add('c2');       // add 'c2'
                break;
            case anything.classList.contains('c2'): //same as above but class different
                anything.classList.remove('c2');    
                anything.classList.add('c3');       
                break;
            case anything.classList.contains('c3'): //same as above but class different
                anything.classList.remove('c3');
                anything.classList.add('c1');
                break;
        }
    }
    
      //move the car right on a time loop
      function MoveCarRight(anything){
        switch(true){
            case anything.classList.contains('c1'): //if contains 'c1'
                anything.classList.remove('c1'); //then remove 'c1'
                anything.classList.add('c3'); // add 'c3'
                break;
            case anything.classList.contains('c2'): //same as above but class different
                anything.classList.remove('c2');   
                anything.classList.add('c1');
                break;
            case anything.classList.contains('c3'): //same as above but class different
                anything.classList.remove('c3');
                anything.classList.add('c2');
                break;
        }
    }
      
    //move the logs
     function autoMoveLog(){
       // we used arrow function because it will allow us to give a name to individual div from all our div's called 'log-left' and pass them through a function.    
       logsLeft.forEach(anything1 => MoveLogLeft(anything1)); //each div that have class name 'log-left' pass them through a function called MoveLogLeft
       logsright.forEach(anything1 => MoveLogRight(anything1)); //each div that have class name 'log-right' pass them through a function called MoveLogRight
   }
    
    //logs going left
    function MoveLogLeft (anything1){
       switch(true){
           case anything1.classList.contains('l1'): //if contains 'l1'
               anything1.classList.remove('l1'); //then remove 'l1' 
               anything1.classList.add('l2'); //add 'l2'
               break;
           case anything1.classList.contains('l2'): //same as above but class different
               anything1.classList.remove('l2');
               anything1.classList.add('l3');
               break;
           case anything1.classList.contains('l3'): //same as above but class different
               anything1.classList.remove('l3');
               anything1.classList.add('l4');
               break;
           case anything1.classList.contains('l4'): //same as above but class different
               anything1.classList.remove('l4');
               anything1.classList.add('l5');
               break;
           case anything1.classList.contains('l5'): //same as above but class different
               anything1.classList.remove('l5');
               anything1.classList.add('l1');
               break;
       }
   }
    
    //logs going right
    function MoveLogRight (anything1){
       switch(true){
           case anything1.classList.contains('l1'): //if contains 'l1'
               anything1.classList.remove('l1'); // then remove 'l1'
               anything1.classList.add('l5'); // add 'l5'
               break;
           case anything1.classList.contains('l2'): // same as above but class different
               anything1.classList.remove('l2');
               anything1.classList.add('l1');
               break;
           case anything1.classList.contains('l3'): //same as above but class different
               anything1.classList.remove('l3');
               anything1.classList.add('l2');
               break;
           case anything1.classList.contains('l4'): //same as above but class different
               anything1.classList.remove('l4');
               anything1.classList.add('l3');
               break;
           case anything1.classList.contains('l5'): //same as above but class different
               anything1.classList.remove('l5');
               anything1.classList.add('l4');
               break;
       }
   }
    
    //move the frog when its on the log moving left
    function MoveWithLogLEft(){
        //if frog is at left moving log , then
        if(currentindex >= 27 && currentindex < 35){
            squares[currentindex].classList.remove('frog'); //remove frog
            currentindex +=1; // +=1 current Index . so , it does't fall on the water
            squares[currentindex].classList.add('frog'); //add frog
        }
    }
    
    //move the frog when its on the log moving right
    function MoveWithLogRight(){
        //if frog is at right moving log , then
        if(currentindex > 18 && currentindex <= 26){
            squares[currentindex].classList.remove('frog'); //remove frog
            currentindex -=1 ;  // -=1 current Index . so , it does't fall on the water
            squares[currentindex].classList.add('frog'); //add frog
        }
    }
    
    //rules for frog to win
    function win(){
        //if the frog is on fourth index which is Ending-block , Then we win. 
        if(squares[4].classList.contains('frog')){
            resultDisplay.innerHTML = 'You Win!'; //displaying 'you win' in resultDisplay
            squares[currentindex].classList.remove('frog'); //remove frog
            clearInterval(timerid); // clearing timerid
            document.removeEventListener('keyup', MoveFrog); //remove event 'keyup' and MoveFrog function
        }
    }
    
    //rules for frog to lose
    function lose(){
        //time comes down to zero OR frog touches car OR log , Then We lose
        if((currenttime === 0)||(squares[currentindex].classList.contains('c1'))
          ||(squares[currentindex].classList.contains('l4'))
          ||(squares[currentindex].classList.contains('l5'))){
            resultDisplay.innerHTML = 'You Lose!'; //displaying 'you lose' in resultDisplay
            squares[currentindex].classList.remove('frog'); //remove frog
            clearInterval(timerid); //clearing timerid
            document.removeEventListener('keyup',MoveFrog); //remove event 'keyup' and MoveFrog function
        }
    }
    
    //all the functions that move pieces
    //all the functions in one function because we have to invoke them , Say EverySecond.
    function MOvePieces (){
        currenttime-- //reducing time every second
        timeleft.textContent = currenttime; //displaying the result of currenttime reducing after every second by 1 in timeleft.
        MoveWithLogLEft();
        MoveWithLogRight();
        autoMoveCar();
        autoMoveLog();
        lose();
    }
    
    //to start, and pause the game
    startbtn.addEventListener('click', ()=> {
        if(timerid){
            clearInterval(timerid); //clearing timerid
        }else{
            timerid = setInterval(MOvePieces, 1000); //invoking MOvePieces Every second.
            document.addEventListener('keyup', MoveFrog); // we also make sure that frog only moves when game has started . so , we add in our EventListener . so moveFrog function will be executed when we press start/pause button.
        }
    })
    
   
})