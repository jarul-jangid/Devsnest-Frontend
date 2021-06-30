document.addEventListener("DOMContentLoaded", ()=>{

    // var MovesElement = document.querySelector(".Moves")
    // let Moves = 0

    // MovesElement.innerText = Moves

    const cardArray = [
        {
            name:'Damon',
            img: 'imgs/Damon.jpg'
        },
        {
            name:'Damon',
            img: 'imgs/Damon.jpg'
        },
        {
            name:'Bonnie',
            img: 'imgs/Bonnie.jpg'
        },
        {
            name:'Bonnie',
            img: 'imgs/Bonnie.jpg'
        },
        {
            name:'Caroline',
            img: 'imgs/Caroline.jpg'
        },
        {
            name:'Caroline',
            img: 'imgs/Caroline.jpg'
        },
        {
            name:'Elena',
            img: 'imgs/Elena.jpg'
        },
        {
            name:'Elena',
            img: 'imgs/Elena.jpg'
        },
        {
            name:'Klaus',
            img: 'imgs/Klaus.jpg'
        },
        {
            name:'Klaus',
            img: 'imgs/Klaus.jpg'
        },
        {
            name:'Stefan',
            img: 'imgs/Stefan.jpg'
        },
        {
            name:'Stefan',
            img: 'imgs/Stefan.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    //create board
    const Result = document.querySelector("#Moves")
    Result.textContent = 0
    const grid = document.querySelector('.grid');
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []

    function create(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement("img")
            card.setAttribute("src", "imgs/Logo.png")
            card.setAttribute("dataID", i)
            card.addEventListener("click", clicked)
            grid.appendChild(card)
        }

    }
    create()
    //check for matches
    function checkMatch(){
        // Moves+=1
        // MovesElement.innerText = Moves
        var cards = document.querySelectorAll("img")
        const optOneID = cardsChosenID[0]
        const optTwoID = cardsChosenID[1]
        if(cardsChosen[0] === cardsChosen[1]){
            cards[optOneID].style.visibility = "hidden"
            cards[optTwoID].style.visibility = "hidden"
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optOneID].setAttribute('src', "imgs/Logo.png")
            cards[optTwoID].setAttribute('src', "imgs/Logo.png")
        }
        cardsChosen = []
        cardsChosenID = []
        Result.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
             alert("Congratulations, you matched them all!")
        }
    }

    //flipcard function
    function clicked(){
        var cardID = this.getAttribute("dataID");
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)

        if (cardsChosen.length == 2){
            setTimeout(checkMatch, 500)
        }
    }



});
