import { useState } from "react"

export function TitleScore(currScore, bestScore){
    // const [currScore, setCurrScore] = useState(0)
    // const [bestScore, setBestScore] = useState(0)
    // all this goes in the gameboard component
    
    return(
        <div className="headerTitleScore">
            <div className="title">
                <h1>Memory Game</h1>
                <p className="score"> Get points by clicking on an image, but don't click on any more than once!</p>
            </div>
            <div className="scoreBoard">
                 <p className="currentScore">{currScore}</p>
                 <p className="bestScore">{bestScore}</p>
            </div>
        </div>
    )
}