import React from 'react'
import './emptyTour.css'
const EmptyTour = ({setToursData, toursDataCopy}) => {
    return (
        <div className='empty'>
            <p>No More Tours Remaining</p>
            <button onClick={()=> setToursData(toursDataCopy)}>Refresh</button>
        </div>
    )
}

export default EmptyTour
