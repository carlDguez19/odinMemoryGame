//presentation of pokemon card
//displays sprite, name, and attaches a click handler

export function Card({ imgurl, alt, onClick}) {
    return(
        <div className="pokeCard" onClick={onClick}>
            {/* pokemon sprite */}
            <img src={imgurl} alt={alt} className="pokeImg"/>
            
            {/* pokemon name */}
            <div className="pokeName">{alt}</div>
        </div>
    )
}