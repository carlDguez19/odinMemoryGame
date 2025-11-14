import { useState, useEffect } from "react"
import { Card } from "./Card";
import { TitleScore } from "./TitleScore";

export function Gameboard(){
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
                const data = await res.json();//12 cards for the gameboard;
                console.log(data.results);
                const cardData = await Promise.all(data.results.map(async (pokemon) => {
                    const pokemonRes = await fetch(pokemon.url);
                    const pokemonData = await pokemonRes.json();
                    return {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        image: pokemonData.sprites.front_default,
                        clicked: false
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
    
    function resetCardsClicked(){
        let reset = cards.map((card) => ({...card, clicked: false}));
        setCards(reset);
    }

    function getRandomNumber(){
        return Math.floor(Math.random() * 12);
    }

    function shuffleCards(){
        let shuffled = [...cards];
        for(let i = 0; i < cards.length; i++){
            let randIndex = getRandomNumber();
            let temp = shuffled[randIndex];
            shuffled[randIndex] = shuffled[i];
            shuffled[i] = temp;//if currScore is higher than bestScore then update bestScore aswell
        }
        setCards(cards);
    }

    function determineValue(id){
        let updatedCards = cards.map((card) => {
            if(card.id === id){
                if(card.clicked === false){
                    setCurrScore(prev => prev +1);
                    if(currScore >= bestScore){
                        setBestScore(currScore + 1);
                    }
                    return {...card, clicked: true};
                    //if currScore is higher than bestScore then update bestScore aswell
                }else{
                    setCurrScore(0);
                    resetCardsClicked();
                    //i have to reset all cards to not clicked here
                }
            }
            return card;
        });
        setCards(updatedCards);
        shuffleCards();
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

    //add onclick function (determine reset or currScore increase) here or it can be imported from utils
    //along with some shuffle function
    
    //connect to api to get card images
    //generate card images on gameboard

    //might need wrapper function to call setCurrScore and setBestScore

    //finally return the gameboard jsx 
}