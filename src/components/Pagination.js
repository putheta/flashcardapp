import { requestFormReset } from "react-dom"
import "./Pagination.css"
import { useState } from "react"


function Pagination({CurrentIndex , setCurrentIndex , Length}) {
    const Next = ()=>{
        if (CurrentIndex===Length-1) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(now=>{
                const updated = now+1
                return updated
            })
        }

        console.log("Number : ",CurrentIndex)
    }
    const Back = () => {
        if (CurrentIndex != 0) {
            setCurrentIndex(now=>{
            const updated = now-1
            return updated
        })
        }
        else {
            setCurrentIndex(Length-1)
            console.log("Number : ",CurrentIndex)
        }
    }

    return (
        <div className="page-container">
            <div className="pagination-button" onClick={Back}>Previous</div>
            <div>{CurrentIndex+1}/{Length}</div>
            <div className="pagination-button" onClick={Next}>Next</div>
        </div>
    )
}

export default Pagination ;