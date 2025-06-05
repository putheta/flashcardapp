import "./CardBack.css"

function CardBack({meaning , img}) {
    return (
        <div className="cardback-container">
            <h1>{img}</h1>
            <p>{meaning}</p>
        </div>
    )
}

export default CardBack ;