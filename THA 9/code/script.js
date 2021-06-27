let bookedElement = document.querySelector(`#booked`);
let unbookedElement = document.querySelector(`#unbooked`);

function create(){
    for(let i=0;i<50;i++){
        const newbutton = document.createElement("button");
        newbutton.addEventListener("click", clicked);

        const main = document.getElementById("content");
        main.appendChild(newbutton);
        newbutton.className = "remain";

    }
}

let bookedS = 0;
let unbookedS = 50;

bookedElement.innerText = bookedS;
unbookedElement.innerText = unbookedS;

function clicked(a){
    if(a.target.className == "remain"){
        a.target.className = "book";
        bookedS+=1;
        unbookedS-=1;
        bookedElement.innerText = bookedS;
        unbookedElement.innerText = unbookedS;

    }
    else{
        a.target.className = "remain";
        bookedS-=1;
        unbookedS+=1;
        bookedElement.innerText = bookedS;
        unbookedElement.innerText = unbookedS;

    }
}

create();