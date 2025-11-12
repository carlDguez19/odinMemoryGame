import { useState, useEffect } from "react"

export function Gameboard(){
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12/');
                const data = await res.json();//12 cards for the gameboard;

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

    return (
        <div className="pokeCard">
            {cards.map((card) => {
                <img key={pokemon.id} src={card.image} alt={pokemon.name} className="pokeImg" />
            })}
        </div>
    )

    //add onclick function (determine reset or currScore increase) here or it can be imported from utils
    //along with some shuffle function
    
    //connect to api to get card images
    //generate card images on gameboard

    //might need wrapper function to call setCurrScore and setBestScore

    //finally return the gameboard jsx 
}