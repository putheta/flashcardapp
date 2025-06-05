import "./CardFront.css"

function CardFront(props) {
    const { kanji, kunyomi } = props
    return (
        <div className="card-container">
            <h1>{kanji}</h1>
            <p>{kunyomi}</p>
        </div>
    )
}

export default CardFront ;