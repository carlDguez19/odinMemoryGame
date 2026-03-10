//display game title, current score, best score
//recieve score values from gameboard component

export function TitleScore({currScore, bestScore}){
    
    return(
        <div className="headerTitleScore">
            {/* game title and instructions */}
            <div className="title">
                <h1>Memory Game</h1>
                <p className="score"> Get points by clicking on an image, but don't click on any more than once!</p>
            </div>
            {/* score values */}
            <div className="scoreBoard">
                 <p className="currentScore">Current Score: {currScore}</p>
                 <p className="bestScore">Best Score: {bestScore}</p>
            </div>
        </div>
    )
}