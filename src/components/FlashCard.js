import { useState } from "react";
import CardBG from "./CardBG";
import CardFront from "./CardFront";
import "./FlashCard.css";
import KanjiData from "./KanjiData";
import CardBack from "./CardBack";

function FlashCard({ CurrentIndex, Click, setClick }) {
  const CurrentKanjis = KanjiData[CurrentIndex];
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard-wrapper" onClick={handleFlip}>
      <CardBG />

      <div className={`flashcard ${isFlipped ? "flashcard--flipped" : ""}`}>
        <div className="flashcard__face flashcard__face--front">
          <CardFront
            kanji={CurrentKanjis.kanji}
            kunyomi={CurrentKanjis.kunyomi}
          />
        </div>

        <div className="flashcard__face flashcard__face--back">
          <CardBack
            meaning={CurrentKanjis.meaning}
            img={CurrentKanjis.img}
          />
        </div>
      </div>
    </div>
  );
}


export default FlashCard;
