import { useState, useEffect } from "react"

export function Gameboard(){
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState([{
        id: 0,
        name: '',
        image: '',
        clicked: false
    }]);

    useEffect(() => {
        async function fetchCards() {
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12/');
                const data = await res.json();//12 cards for the gameboard

            }
            catch(error){
            
            }
        }
    })

    //add onclick function (determine reset or currScore increase) here or it can be imported from utils
    //along with some shuffle function
    
    //connect to api to get card images
    //generate card images on gameboard

    //might need wrapper function to call setCurrScore and setBestScore

    //finally return the gameboard jsx 
}