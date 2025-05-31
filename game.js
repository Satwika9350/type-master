window.onload=function(){let buttons=document.querySelector('#buttons');
    
let countdown=document.querySelector('#countdown');
let round=document.querySelector('#round');
let word=document.querySelector('#word');
let score=document.querySelector('#score')
let countparent=document.querySelector('#countparent')}
var roundName = ['Mammals', 'Intelligent Creatures', 'Cosmic!', 'Biology', 'Fruit', 'Mental', 'HTML to JavaScript'];
var wordList = [ ['antelope', 'bat', 'leopard', 'whale', 'gorilla'],
                 ['crow', 'pigeon', 'bonobo', 'octopus', 'parrot', 'elephant', 'chimpanzee', 'raven', 'dolphin', 'human'],
                 ['galaxy', 'supernova', 'aurora', 'planet', 'spacetime', 'nebula', 'asteroid', 'moon', 'orbit', 'comet'],
                 ['anatomy', 'cell', 'protein', 'chromosome', 'photosynthesis', 'mitosis', 'muscle', 'bacterium', 'blood', 'peristalsis'],
                 ['avocado', 'banana', 'persimmon', 'melon', 'pomegranate', 'almond', 'kumquat', 'lime', 'tomato', 'coffee'],
                 ['brain', 'thought', 'psychology', 'endorphin', 'axon', 'depression', 'synapse', 'euphoria', 'neuron', 'stimulant'],
                 ['tag', 'element', 'attribute', 'property', '!doctype', 'DOM', 'flexbox', 'transition', 'addEventListener', 'callback'] ];
let level,currentword,currentwordIndex,roundNumber=0;
let seconds=3;
function startTimer(para,butt){
    console.log(butt.id)
    if(butt.id=='easy')
        var starttime=50
    else
    if(butt.id=='medium')
        var starttime=40
    else
    if(butt.id=='hard')
        var starttime=30
    else
    console.log('none of the three buttons was pressed')

    round.innerHTML='Round 1:-'+roundName[para];
    var timerInterval=setInterval( function (){
        console.log(seconds);
        buttons.textContent=seconds;
        --seconds;
        if(seconds<0)
        {   buttons.textContent='';
            clearInterval(timerInterval);
            }
    },1000);
    setTimeout(startGame,4000,para,butt,starttime);
}
function startGame(para,butt,time){
        countdown.style.width='300px'
        countdown.style.height='40px'
        countdown.style.borderRadius='10px'
        countdown.style.background='#FFD400'
        countdown.style.fontSize='2rem'

        console.log(time)
        var t=setInterval(ti,100)    //CONTAINS BUG
        function ti(){
            countdown.textContent=time/10;
            let w=time*10
            countdown.style.width=w+'px'
            time--
  
            if(time===0)
            {
                buttons.fontSize='6rem'
                buttons.color='gold';
                word.textContent=''
                round.textContent=''
                score.textContent='Time up!You lose.'
                clearInterval(t);
                countparent.removeChild(countdown);
                let playAgain =document.createElement('button')
                playAgain.style.backgroundColor="#97f9f9"
                playAgain.style.color="#2e2836"
                playAgain.style.fontSize="2rem"
                playAgain.innerHTML="Play again!"
                playAgain.style.background="#ACFCD9"
                playAgain.onclick=function(){window.location.reload()}
                countparent.appendChild(playAgain)
                playAgain.focus();
            }

        }

    var c=-1;
    word.textContent=wordList[roundNumber][para];
    window.addEventListener('keydown',display)
        
        function display(event){
            
            if((event.keyCode > 47 && event.keyCode < 58)|| 
            event.keyCode == 32 ||   
            (event.keyCode > 64 && event.keyCode < 91)|| 
            (event.keyCode > 95 && event.keyCode < 112)|| 
            (event.keyCode > 185 && event.keyCode < 193)|| 
            (event.keyCode > 218 && event.keyCode < 223))
            {buttons.textContent+=event.key;
            c++;}
           
            if(event.keyCode==8)
            {   let l=buttons.textContent.length;
                buttons.textContent=buttons.textContent.substring(0,l-1);
                --c;
               
            }
            
            if(buttons.textContent===word.textContent)
            {   
                c=0;
                if(butt.id=='easy')
                    time+=50
                else
                if(butt.id=='medium')
                    time+=30
                else
                if(butt.id=='hard')
                    time+=20
                else
                console.log('none of the button was pressed')

                ++para;
                word.textContent=wordList[roundNumber][para];
                buttons.textContent='';
                if(wordList[roundNumber].length==para)
                {
                    ++roundNumber;para=0;
                    word.textContent=wordList[roundNumber][para];
                    round.innerHTML='Round '+roundNumber+':-'+roundName[roundNumber];
                }
                if(roundNumber==6 && para ==10)
                {
                    score.textContent='Congrats!!You passed the game!Your score is'+countdown.textContent
                }
                
            }
            if(word.textContent.charAt(c)==event.key)//for indication
            {
                document.body.style.background='linear-gradient(to bottom right,#52FFB8,#0A0908) fixed'
            }
            else
            if(event.keyCode==8)
            {
                document.body.style.background='linear-gradient(to bottom right,#502274,#0A0908) fixed'
            }
            else{
                document.body.style.background='linear-gradient(to bottom right,red,#0A0908) fixed'
            }
            if(buttons.textContent=='')
                {document.body.style.background='linear-gradient(to bottom right,#502274,#0A0908) fixed'
                    c=-1;}
        }

     
    }
