import { useState } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';
import Pagination from './components/Pagination';
import KanjiData from './components/KanjiData';
import CardBack from './components/CardBack';

function App() {
    
    const [ CurrentIndex , setCurrentIndex ] = useState(0)
    const [ Click , setClick ] = useState(false)
    const Length = KanjiData.length

    return (
        <div className="grid-container">
            <div className='header'>
                <h1>Flash Card.exe</h1>
            </div>
            <div className="app">
                <FlashCard CurrentIndex={CurrentIndex} Click={Click} setClick={setClick}/>
                <Pagination CurrentIndex={CurrentIndex} setCurrentIndex={setCurrentIndex} Length={Length}/>
            </div>
        </div>

    )
}

export default App