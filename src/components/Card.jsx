export function Card({ key, imgurl, alt, onClick}) {
    return(
        <div className="pokeCard" key = {key} onClick={onClick}>
            <img src={imgurl} alt={alt} className="pokeImg"/>
            <div className="pokeName">{alt}</div>
        </div>
    )
}