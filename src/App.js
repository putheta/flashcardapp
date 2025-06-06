import { useState } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';
import Pagination from './components/Pagination';
import KanjiData from './components/KanjiData';
import NavbarComponent from './components/NavbarComponent';
import 'rsuite/dist/rsuite.min.css';



function App() {
    
    const [ CurrentIndex , setCurrentIndex ] = useState(0)
    const [ Click , setClick ] = useState(false)
    const Length = KanjiData.length
    const [ Shuffled , setShuffled ] = useState(KanjiData)

    const [ CheckShuffle , setCheckShuffle ] = useState(false)
    const shufflecard = () => {
        setCheckShuffle(prev => {
            const newStatus = !prev;
            const shuffled = newStatus
            ? [...KanjiData].sort(() => Math.random() - 0.5)
            : KanjiData;

            setShuffled(shuffled);
            setCurrentIndex(0);
            setClick(false);
            console.log("shuffled");

            return newStatus;
        });
    };
    
    return (
        <div className="grid-container">
            <div className='header'>
                <h1>Flash Card.exe</h1>
                <img className='burger-botton' src="/menu.svg"/>
                <NavbarComponent/>
                
            </div>
            <div className="app">
                <div
                    className={`shuffle ${CheckShuffle ? "shuffled" : ""}`}
                    onClick={shufflecard}
                >
                    <img className='logo' src="/shuffle.svg"/>
                </div>
                <FlashCard CurrentIndex={CurrentIndex} Shuffled={Shuffled}/>
                <Pagination CurrentIndex={CurrentIndex} setCurrentIndex={setCurrentIndex} Length={Length}/>
            </div>
        </div>

    )
}

export default App