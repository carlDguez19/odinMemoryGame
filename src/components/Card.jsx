export function Card({ url, onClick}) {
    return(
        <div className="notClicked" onClick={onClick}>
            <img src={url} alt="card image" />
        </div>
    )
}