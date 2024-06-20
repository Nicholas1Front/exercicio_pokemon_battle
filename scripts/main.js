// data

const data = [
    {
        name: "Pikachu",
        points: 320
    },
    {
        name: "Bulbasaur",
        points: 318
    },
    {
        name: "Charmander",
        points: 309
    },
    {
        name: "Squirtle",
        points: 314
    },
    {
        name: "Jigglypuff",
        points: 270
    },
    {
        name: "Meowth",
        points: 290
    },
    {
        name: "Snorlax",
        points: 540
    },
    {
        name: "Mewtwo",
        points: 680
    }
];


// elements

const warningControl = document.querySelector("#warning-control");
const warningMessage = document.querySelector("#warning-message");
const closeWarning = document.querySelector("#close-warning");

const searchContainer = document.querySelector("#search-container");
const resultContainer = document.querySelector("#result-container");

const pokemonSelect1 = document.querySelector("#pokemon-select-1");
const pokemonSelect2 = document.querySelector("#pokemon-select-2");

const battleBtn = document.querySelector("#battle-btn");
const clearBtn = document.querySelector("#clear-btn");

const pokemonName1 = document.querySelector("#pokemon-name-1");
const pokemonPoints1 = document.querySelector("#pokemon-points-1");
const pokemonImg1 = document.querySelector("#pokemon-image-1");

const pokemonName2 = document.querySelector("#pokemon-name-2");
const pokemonPoints2 = document.querySelector("#pokemon-points-2");
const pokemonImg2 = document.querySelector("#pokemon-image-2");

const winnerApresent = document.querySelector("#winner-apresent");
const winnerTitle = document.querySelector("#winner-title");
const winnerImg = document.querySelector("#winner-image");

const backBtn = document.querySelector("#back-btn");
// functions

function showWarning(){
    warningControl.style.marginTop = "-41%";
    warningControl.style.transition = "0.4s";
}

function hideWarning(){
    warningControl.style.marginTop = "-99%";
}

function createList1(data){
    pokemonSelect1.innerHTML = "";

    let option = document.createElement("option");

    option.text = "";
    pokemonSelect1.add(option);

    data.forEach(function(pokemon){
        option = document.createElement("option");
        option.text = pokemon.name;

        pokemonSelect1.add(option);
    })
}

function createList2(data){
    pokemonSelect2.innerHTML = "";

    let option = document.createElement("option");

    option.text = "";
    pokemonSelect2.add(option);

    data.forEach(function(pokemon){
        let option = document.createElement("option");
        option.text = pokemon.name;

        pokemonSelect2.add(option);
    })
}

function displayResults(){
    let pokemonSelected1 = getPokemon1(data);
    let pokemonSelected2 = getPokemon2(data);

    pokemonName1.innerText = pokemonSelected1.name;
    pokemonPoints1.innerText = `Points : ${pokemonSelected1.points}`
    pokemonImg1.setAttribute("src", `images/${pokemonSelected1.name}.png`);

    pokemonName2.innerText = pokemonSelected2.name;
    pokemonPoints2.innerText = `Points : ${pokemonSelected2.points}`
    pokemonImg2.setAttribute("src", `images/${pokemonSelected2.name}.png`);


}

function showOrHideResult(){
    resultContainer.classList.toggle("hide");
    searchContainer.classList.toggle("hide");
}

function getPokemon1(data){
    let pokemonValue1 = pokemonSelect1.value;

    let pokemonSelected1 = 0;

    data.forEach(item=>{
        if(pokemonValue1 == item.name){
            pokemonSelected1 = {
                name: item.name,
                points : item.points,
            }
        };
    })

    return pokemonSelected1;
}

function getPokemon2(data){
    let pokemonValue2 = pokemonSelect2.value ;

    let pokemonSelected2 = 0;

    data.forEach(item=>{
        if(pokemonValue2 == item.name){
            pokemonSelected2 = {
                name : item.name,
                points : item.points,
            }
        }
    })

    return pokemonSelected2;
}

function defineWinner(){

    let pokemonSelected1 = getPokemon1(data);
    let pokemonSelected2 = getPokemon2(data);

    let pokemonWinner = null;
    if(pokemonSelected1.points > pokemonSelected2.points){
        pokemonWinner = {
            name : pokemonSelected1.name,
            points : pokemonSelected1.points,
        }
    }else if(pokemonSelected1.points < pokemonSelected2.points ){
        pokemonWinner = {
            name : pokemonSelected2.name,
            points : pokemonSelected2.points,
        }
    }else if (pokemonSelected1.points == pokemonSelected2.points){
        pokemonWinner = "Empate!";
    }

    return pokemonWinner;
}



// initialization
createList1(data);
createList2(data);
// events

battleBtn.addEventListener("click", function(event){
    event.preventDefault();

    let pokemonSelected1 = getPokemon1(data);
    let pokemonSelected2 = getPokemon2(data);
    

    if(pokemonSelected1.name == undefined || pokemonSelected2.name == undefined){
        showWarning();
        return;
    }
    let pokemonWinner = defineWinner();
    let pokemonWinnerName = pokemonWinner.name;

    displayResults();

    if(pokemonSelected1.points == pokemonSelected2.points){
        winnerApresent.innerText = "No ones won";
        winnerTitle.innerText = "It's a DRAW !";
        winnerImg.setAttribute("src" , "images/Empate.png");
    }else{
        winnerApresent.innerText = "The winner is :"
        winnerTitle.innerText = pokemonWinnerName;
        winnerImg.setAttribute("src", `images/${pokemonWinnerName}.png`);
    }

    showOrHideResult();
})

pokemonSelect1.addEventListener("input",function(event){
    event.preventDefault();

});

pokemonSelect2.addEventListener("input",function(event){
    event.preventDefault();

})

backBtn.addEventListener("click",function(event){
    event.preventDefault();

    createList1(data);
    createList2(data);
    showOrHideResult();
    winnerApresent.innerHTML= "";
    winnerTitle.innerHTML= "";
})

clearBtn.addEventListener("click",function(event){
    event.preventDefault();

    createList1(data);
    createList2(data);
})

closeWarning.addEventListener("click",function(){
    hideWarning();
})
 