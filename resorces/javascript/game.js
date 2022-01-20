document.addEventListener('DOMContentLoaded', () =>{
    //level 1 --- 6*2 images
    const cardsArray = [
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
       
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        

    ];

    //level 2 10*2 images
    const cardsArray2 = [
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
       
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        {
            name:"shape7",
            img: 'resorces/gameImages/Frame7.png'
        },
        {
            name:"shape7",
            img: 'resorces/gameImages/Frame7.png'
        },
        {
            name:"shape8",
            img: 'resorces/gameImages/Frame8.png'
        },
        {
            name:"shape8",
            img: 'resorces/gameImages/Frame8.png'
        },
        {
            name:"shape9",
            img: 'resorces/gameImages/Frame9.png'
        },
        {
            name:"shape9",
            img: 'resorces/gameImages/Frame9.png'
        },
        {
            name:"shape10",
            img: 'resorces/gameImages/Frame10.png'
        },
        {
            name:"shape10",
            img: 'resorces/gameImages/Frame10.png'
        },
        

    ];
    //level 3 
    const cardsArray3 = [
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"triangle",
            img: 'resorces/gameImages/triangle-red.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
        {
            name:"cerchio",
            img: 'resorces/gameImages/cerchio.png'
        },
       
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"orange-re",
            img: 'resorces/gameImages/orange-re.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"rettangolo",
            img: 'resorces/gameImages/rettangolo.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"star",
            img: 'resorces/gameImages/star.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        {
            name:"Blu-triagle",
            img: 'resorces/gameImages/triangle-blu.png'
        },
        {
            name:"shape7",
            img: 'resorces/gameImages/Frame7.png'
        },
        {
            name:"shape7",
            img: 'resorces/gameImages/Frame7.png'
        },
        {
            name:"shape8",
            img: 'resorces/gameImages/Frame8.png'
        },
        {
            name:"shape8",
            img: 'resorces/gameImages/Frame8.png'
        },
        {
            name:"shape9",
            img: 'resorces/gameImages/Frame9.png'
        },
        {
            name:"shape9",
            img: 'resorces/gameImages/Frame9.png'
        },
        {
            name:"shape10",
            img: 'resorces/gameImages/Frame10.png'
        },
        {
            name:"shape10",
            img: 'resorces/gameImages/Frame10.png'
        },
        
        {
            name:"shape11",
            img: 'resorces/gameImages/Frame11.png'
        },
        {
            name:"shape11",
            img: 'resorces/gameImages/Frame11.png'
        },
        {
            name:"shape12",
            img: 'resorces/gameImages/Frame12.png'
        },
        {
            name:"shape12",
            img: 'resorces/gameImages/Frame12.png'
        },
        {
            name:"shape13",
            img: 'resorces/gameImages/Frame13.png'
        },
        {
            name:"shape13",
            img: 'resorces/gameImages/Frame13.png'
        },
        {
            name:"shape14",
            img: 'resorces/gameImages/Frame14.png'
        },
        {
            name:"shape14",
            img: 'resorces/gameImages/Frame14.png'
        },
        {
            name:"shape15",
            img: 'resorces/gameImages/Frame15.png'
        },
        {
            name:"shape15",
            img: 'resorces/gameImages/Frame15.png'
        },

    ];
    cardsArray.sort(()=>0.5 - Math.random());
    cardsArray2.sort(()=>0.5 - Math.random());
    cardsArray3.sort(()=>0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const grid2 = document.querySelector('.grid2');
    const grid3 = document.querySelector('.grid3');

    const resultDisplay = document.querySelector('#result');
    const level = document.querySelector('#level');
    const won = document.getElementById('won');
    const lostgif = document.getElementById('lostgif')
    const lose = document.getElementById('lose');
    const finalS = document.getElementById('final')

    let cardsChos = [];
    let cardsChosId = [];
    let cardsWon =[];
    let cardLost =[];



  
    
    function CreateABoard(){
        level.textContent="Level 1"
        for(let i = 0; i < cardsArray.length; i++){//loop througth array
            var card = document.createElement('img')//create an img html tag
            card.setAttribute('src', 'resorces/gameImages/arrow.png');//set an attribute to the card element
            card.style.border="2px solid white";
            card.setAttribute('data-id', i);//set an id, for each card
            card.addEventListener('click', flipCard)//add event listener when the image/card is clicked
            grid.appendChild(card)//this will put the data in the html grid div 
            
        }
    }
    function checkformatch(){
     
        var cards = document.querySelectorAll('img')
        
        const opt1id = cardsChosId[0];
        const opt2id = cardsChosId[1];
        if(cardsChos[0] === cardsChos[1]){
            cards[opt1id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt2id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt1id].removeEventListener("click", flipCard, false);
            cards[opt2id].removeEventListener("click", flipCard, false);
            cardsWon.push(cardsChos);
        }else if(cardsChos[0] !== cardsChos[1]){
          cards[opt1id].setAttribute('src','resorces/gameImages/arrow.png')
          cards[opt2id].setAttribute('src','resorces/gameImages/arrow.png')
          cardLost.push(cardsChos);
      
        }
        cardsChos = [];
       cardsChosId = [];
       lose.textContent =`Lost: ${cardLost.length}`;
       resultDisplay.textContent =`Won: ${cardsWon.length}`;
       if(cardsWon.length == cardsArray.length/2){ 
           localStorage.setItem('winningPoints', cardsWon.length) 
           localStorage.setItem('lostPoints', cardLost.length)       
          //level 2
          CreateABoard2()
         
       }
      }
   
      //flip your card
  
      function flipCard(){
          var cardId = this.getAttribute('data-id');
          cardsChos.push(cardsArray[cardId].name);
          cardsChosId.push(cardId);
          this.setAttribute('src', cardsArray[cardId].img);
          if(cardsChos.length === 2){
              setTimeout(checkformatch, 500);
          }
      }

      let cardsChos2 = [];
      let cardsChosId2 = [];
      let cardsWon2 = [];
      let cardsLost2 = [];
    function CreateABoard2(){
    
        grid2.style.display="block";
        grid.style.display="none";
        level.textContent="Level 2"
        for(let i = 0; i < cardsArray2.length; i++){//loop througth array
            var card = document.createElement('img')//create an img html tag
            card.setAttribute('src', 'resorces/gameImages/arrow.png');//set an attribute to the card element
            card.style.border="2px solid white";
            card.setAttribute('data-id-2', i);//set an id, for each card
           card.addEventListener('click', flipCard2)//add event listener when the image/card is clicked
            grid2.appendChild(card)//this will put the data in the html grid div 
            
        }
    }
    function checkformatch2(){
      
        var cards = document.querySelectorAll('.grid2 img')
        const opt1id = cardsChosId2[0];
        const opt2id = cardsChosId2[1];
        if(cardsChos2[0] === cardsChos2[1]){ 
            
            cards[opt1id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt2id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt1id].removeEventListener("click", flipCard2, false);
            cards[opt2id].removeEventListener("click", flipCard2, false);
       
            cardsWon2.push(cardsChos2);
        }  else if(cardsChos2[0] !== cardsChos2[1]){
            cards[opt1id].setAttribute('src','resorces/gameImages/arrow.png')
            cards[opt2id].setAttribute('src','resorces/gameImages/arrow.png')
            cardsLost2.push(cardsChos2);
        
          }
        cardsChos2 = [];
       cardsChosId2 = [];
       lose.textContent =`Lost: ${cardsLost2.length}`;
       resultDisplay.textContent =`Won: ${cardsWon2.length}`;
       if(cardsWon2.length == cardsArray2.length/2){  
        localStorage.setItem('winningPoints2', cardsWon2.length) 
        localStorage.setItem('lostPoints2', cardsLost2.length)         
         //level 3
        CreateABoard3()
       }
      }
         //flip your card
  
         function flipCard2(){
            var cardId = this.getAttribute('data-id-2');
            cardsChos2.push(cardsArray2[cardId].name);
            cardsChosId2.push(cardId);
            this.setAttribute('src', cardsArray2[cardId].img);
            if(cardsChos2.length === 2){
                setTimeout(checkformatch2, 500);
            }
        }



        let cardsChos3 = [];
        let cardsChosId3 = [];
        let cardsWon3 =[];
        let cardsLost3 = [];
     
    function CreateABoard3(){
    
        grid3.style.display="block";
        grid.style.display="none";
        grid2.style.display="none";
        level.textContent="Level 3"
        for(let i = 0; i < cardsArray3.length; i++){//loop througth array
            var card = document.createElement('img')//create an img html tag
            card.setAttribute('src', 'resorces/gameImages/arrow.png');//set an attribute to the card element
            card.style.border="2px solid white";
            card.setAttribute('data-id-3', i);//set an id, for each card
           card.addEventListener('click', flipCard3)//add event listener when the image/card is clicked
            grid3.appendChild(card)//this will put the data in the html grid div 
            
        }
    }
    function checkformatch3(){
     
        var cards = document.querySelectorAll('.grid3 img')
        const opt1id = cardsChosId3[0];
        const opt2id = cardsChosId3[1];
        if(cardsChos3[0] === cardsChos3[1]){
            cards[opt1id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt2id].setAttribute('src','resorces/gameImages/white.png')
            cards[opt1id].removeEventListener("click", flipCard3, false);
            cards[opt2id].removeEventListener("click", flipCard3, false);
       
            cardsWon3.push(cardsChos3);
        } else if(cardsChos3[0] !== cardsChos3[1]){
            cards[opt1id].setAttribute('src','resorces/gameImages/arrow.png')
            cards[opt2id].setAttribute('src','resorces/gameImages/arrow.png')
            cardsLost3.push(cardsChos3);
        
          }
        cardsChos3 = [];
       cardsChosId3 = [];
       lose.textContent =`Lost: ${cardsLost3.length}`;
       resultDisplay.textContent =`Won: ${cardsWon3.length}`;
       if(cardsWon3.length == cardsArray3.length/2){
        localStorage.setItem('winningPoints3', cardsWon3.length) 
        localStorage.setItem('lostPoints3', cardsLost3.length)   
            finalScore()
       }
      }
    function flipCard3(){
        var cardId = this.getAttribute('data-id-3');
        cardsChos3.push(cardsArray3[cardId].name);
        cardsChosId3.push(cardId);
        this.setAttribute('src', cardsArray3[cardId].img);
        if(cardsChos3.length === 2){
            setTimeout(checkformatch3, 500);
        }
    }
    function finalScore(){
       
     
       let l1W = localStorage.getItem('winningPoints')
       let l1L = localStorage.getItem('lostPoints');
       let l2W = localStorage.getItem('winningPoints2');
       let l2L = localStorage.getItem('lostPoints2');
       let l3W = localStorage.getItem('winningPoints3');
       let l3L = localStorage.getItem('lostPoints3');
       let finalSW = parseInt(l1W) + parseInt(l2W) +parseInt(l3W);
       let finalSL = parseInt(l1L) + parseInt(l2L) + parseInt(l3L);

        finalS.style.display="block";
        finalS.style.textAlign="center";
        if(finalSW > finalSL){
            finalS.textContent = `Well done mate you won: ${finalSW} against ${finalSL}`
            lose.style.display = "none";
            resultDisplay.style.display = "none";
            won.style.display="block";
            grid3.style.display="none";
            
        }
        else if(finalSL > finalSW){
            finalS.textContent = `I am sorry mate you lost: ${finalSL} and won: ${finalSW}`
            lostgif.style.display="block";
            grid3.style.display="none";
        }
      
    }
  
    CreateABoard();
      
    localStorage.clear();
    
     
      
       
      
  
})