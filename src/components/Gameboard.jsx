// Core game logic
//handles card fetching, scoring, shuffle behavior, and click evaluation
import { useState, useEffect } from "react"
import { Card } from "./Card";
import { TitleScore } from "./TitleScore";

export function Gameboard(){
    //tracks score for current game
    const [currScore, setCurrScore] = useState(0);
    
    //tracks best overall score across rounds
    const [bestScore, setBestScore] = useState(0);
    
    //stores the array of card objects used in game
    const [cards, setCards] = useState([]);

    //fetch pokemon card data on render
    useEffect(() => {
        async function fetchCards() {
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
                const data = await res.json();//12 cards for the gameboard;
                console.log(data.results);

                //fetch sprite and id for each pokemon
                const cardData = await Promise.all(data.results.map(async (pokemon) => {
                    const pokemonRes = await fetch(pokemon.url);
                    const pokemonData = await pokemonRes.json();
                    return {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        image: pokemonData.sprites.front_default,
                        clicked: false //tracks if card has been selected during this game
                    };
                })
            );
            setCards(cardData);
            }
            catch(error){
                console.error("Error fetching card data:", error);
            }
        }
        fetchCards();
    }, []);
    
    // function resetCardsClicked(){
    //     let reset = cards.map((card) => ({...card, clicked: false}));
    //     setCards(reset);
    // }

    //returns a random index used for shuffling
    function getRandomNumber(){
        return Math.floor(Math.random() * 12);
    }

    //Shuffles the card array by swapping random positions
    function shuffleCards(arr){
        let shuffled = [...arr];
        for(let i = 0; i < cards.length; i++){//based on length of deck of cards
            let randIndex = getRandomNumber();
            let temp = shuffled[randIndex];
            shuffled[randIndex] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled;
    }

    //handle card click. determine if new card clicked or repeated card click
    function determineValue(id){
        //find clicked card
        let currCard = cards.find(card => card.id === id);

        //if card had previously been clicked then player loses round
        if(currCard.clicked){
            //reset score
            //reset clicks
            let newDeck = cards.map((card) => ({...card, clicked: false}));
            let shuffled = shuffleCards(newDeck);
            setCards(shuffled);
            setCurrScore(0);
        }else{//new card clicked
            //award point
            let newDeck = cards.map((card) => card.id === id ? ({...card, clicked: true}) : card);//set card as clicked
            let shuffled = shuffleCards(newDeck);
            setCards(shuffled);
            setCurrScore(prev => prev + 1);//update current score
            setBestScore( prev => (currScore + 1 > bestScore ? currScore + 1 : prev))//update best score if curr score is better
        }
    }

    return (
        <div className="game">
            <TitleScore currScore = {currScore} bestScore = {bestScore}/>
            <div className="cardArea">
                {cards.map((card) => (
                    <Card key = {card.id} imgurl = {card.image} alt = {card.name} onClick = {() => determineValue(card.id)}/>
                ))}
            </div>
        </div>
    ) 
}