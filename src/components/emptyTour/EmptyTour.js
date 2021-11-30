import React from 'react'
import './emptyTour.css'
const EmptyTour = () => {
    return (
        <div className='empty'>
            <p>No More Tours Remaining</p>
            <button onClick={()=> window.location.reload()}>Refresh</button>
        </div>
    )
}

export default EmptyTour
