//index page
var paper = document.querySelector(".paper");
var scissor = document.querySelector('.scissor');
var rock = document.querySelector('.rock');
var box_title=document.querySelector('.sign-title');
var final_score = document.querySelector('.final-score');
var score = document.querySelector('.score');
var verdict = document.getElementById('verdict');
var timer = document.querySelector('.timer');
var playAgain = document.getElementById('play-again');
var time = document.getElementById('time').innerHTML;
time = parseInt(time);
var gameScore = 0.00;

// computer picks a sign
var number = Math.floor(Math.random()*3);

// array of signs
var signs = ['paper','rock','scissors']




 paper.addEventListener('click',()=>{
// alert('inside the paper Event listener');
 box_title.style.display='block';
 document.querySelector('.sign-title-ai').style.display='block';
 document.querySelector('.icon-img').setAttribute('src','./images/icon-paper.svg');
 scissor.style.display='none';
 timer.style.display='block';
 document.querySelector('.sign-container').style.backgroundImage='none';
 rock.style.display='none';
 document.querySelector('.sign-container').style.flexWrap='nowrap';
 paper.classList.add('paper');
 setInterval(()=>{
   if (time >= 0){

     document.getElementById('time').innerHTML = time;
     time -- ;
   }

 },1000);

 setTimeout(()=>{
   //there will be a transition of 3 secondes
   scissor.style.display='block';
   document.querySelector('.house-icon').setAttribute('src','./images/icon-'+signs[number]+'.svg');
   scissor.classList.add(signs[number]);
   document.querySelector('.house-icon').style.position='absolute';
   document.querySelector('.house-icon').style.left='27.5%';
   document.querySelector('.house-icon').style.top='27.5%';
   final_score.style.display='block';
   localStorage.setItem('score',gameScore);
   if (signs[number]==='rock'){
     // you won
     //gamescore = localStorage.getItem('score');
     gameScore ++ ;
     //localStorage.setItem('score',gameScore);
     // alert(gameScore)
    // localStorage.setItem('gameScore',gameScore);
     verdict.innerText = 'YOU WON';
     score.innerText = gameScore;


   }else if(signs[number]==='paper'){
     //it's a draw
     verdict.innerText = 'DRAW';
   }else{
     //you lost
     //alert(gameScore)
     if (gameScore > 0){
      // gamescore = localStorage.getItem('score');
       gameScore -- ;
      // localStorage.setItem('score',gameScore);

       //localStorage.setItem('gameScore',gameScore)
       score.innerText = gameScore;
     }
     verdict.innerText = 'YOU LOST';
   }


 },3000);



 })

 scissor.addEventListener('click',()=>{
   box_title.style.display='block';
   document.querySelector('.sign-title-ai').style.display='block';
   document.querySelector('.icon-img').setAttribute('src','./images/icon-scissors.svg');
   scissor.style.display='none';
   timer.style.display='block';
   document.querySelector('.sign-container').style.backgroundImage='none';
   rock.style.display='none';
   document.querySelector('.sign-container').style.flexWrap='nowrap';
   paper.style.border='20px solid hsl(39, 89%, 49%)';

   setInterval(()=>{
     if (time >= 0){

       document.getElementById('time').innerHTML = time;
       time -- ;
     }

   },1000);

   setTimeout(()=>{
     //there will be a transition of 3 secondes
     scissor.style.display='block';
     document.querySelector('.house-icon').setAttribute('src','./images/icon-'+signs[number]+'.svg');
     scissor.classList.add(signs[number]);
     document.querySelector('.house-icon').style.position='absolute';
     document.querySelector('.house-icon').style.left='27.5%';
     document.querySelector('.house-icon').style.top='27.5%';
     final_score.style.display='block';
     localStorage.setItem('score',gameScore);
     if (signs[number]==='paper'){
       // you won
       gameScore ++;
       verdict.innerText = 'YOU WON';
       score.innerText = gameScore;
     }else if(signs[number]==='scissors'){
       //it's a draw
      verdict.innerText = 'DRAW';
     }else{
       //you lost
       if (gameScore > 0){
         gameScore -- ;
         score.innerText = gameScore;
       }
       verdict.innerText = 'YOU LOST';
     }
   },3000);


 })

 rock.addEventListener('click',()=>{
   box_title.style.display='block';
   document.querySelector('.sign-title-ai').style.display='block';
   document.querySelector('.icon-img').setAttribute('src','./images/icon-rock.svg');
   scissor.style.display='none';

   document.querySelector('.sign-container').style.backgroundImage='none';
   rock.style.display='none';
   document.querySelector('.sign-container').style.flexWrap='nowrap';
   paper.classList.add('rock');
   timer.style.display='block';
   setInterval(()=>{
     if (time >= 0){

       document.getElementById('time').innerHTML = time;
       time -- ;
     }

   },1000);

   setTimeout(()=>{
     //there will be a transition of 3 secondes
     scissor.style.display='block';
     document.querySelector('.house-icon').setAttribute('src','./images/icon-'+signs[number]+'.svg');
     scissor.classList.add(signs[number]);
     document.querySelector('.house-icon').style.position='absolute';
     document.querySelector('.house-icon').style.left='27.5%';
     document.querySelector('.house-icon').style.top='27.5%';
     final_score.style.display='block';
     localStorage.setItem('score',gameScore);
     if (signs[number]==='scissors'){
       // you won
       gameScore++;
       verdict.innerText = 'YOU WON';
       score.innerText = gameScore;
     }else if(signs[number]==='rock'){
       //it's a draw
       verdict.innerText = 'DRAW';
     }else{
       //you lost
       if (gameScore > 0){
         gameScore -- ;
         score.innerText = gameScore;
       }
       verdict.innerText = 'YOU LOST';
     }
   },3000);



 })

// play again
var restart = document.querySelector('.start-over');
restart.addEventListener('click',()=>{
  localStorage.clear();
  gameScore = 0.00;
  window.onload = function(){
    gameScore = 0.00;
    score.innerText = gameScore;
  }
  console.log(localStorage);
  console.log(gameScore);
  location.reload();
});

window.onbeforeunload = function() {
    localStorage.setItem('score', gameScore);
}
window.onload = function(){
gameScore = localStorage.getItem('score');

score.innerText = gameScore;
}
playAgain.addEventListener('click',()=>{

location.reload();
})

 //rule btn

 var rule_btn = document.querySelector('.rules-btn');
 rule_btn.addEventListener('click',()=>{
   document.querySelector('.rules-box').style.display='block';
 })

 //close rule box

 var close_btn =document.querySelector('.icon-close');
 close_btn.addEventListener('click',()=>{
   document.querySelector('.rules-box').style.display='none';
 })






// alert(number);



// let's the Computer to choose a sign

// there will be a transition of 3 secondes
// scissor.style.display='block';
// document.querySelector('.house-icon').setAttribute('src','./images/icon-'+signs[number]+'.svg');
// scissor.classList.add('.'+signs[number]+'-sign')

//TODO Need to come back and change the naming
