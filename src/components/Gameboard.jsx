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

    function shuffleCards(arr){
        let shuffled = [...arr];
        for(let i = 0; i < cards.length; i++){
            let randIndex = getRandomNumber();
            let temp = shuffled[randIndex];
            shuffled[randIndex] = shuffled[i];
            shuffled[i] = temp;//if currScore is higher than bestScore then update bestScore aswell
        }
        return shuffled;
    }

    function determineValue(id){
        let currCard = cards.find(card => card.id === id);

        if(currCard.clicked){
            //reset everything
            //reset clicks
            let newDeck = cards.map((card) => ({...card, clicked: false}));
            let shuffled = shuffleCards(newDeck);
            setCards(shuffled);
            setCurrScore(0);
        }else{
            //award point
            let newDeck = cards.map((card) => card.id === id ? ({...card, clicked: true}) : card);
            let shuffled = shuffleCards(newDeck);
            setCards(shuffled);
            setCurrScore(prev => prev + 1);
            setBestScore( prev => (currScore + 1 > bestScore ? currScore + 1 : prev))
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