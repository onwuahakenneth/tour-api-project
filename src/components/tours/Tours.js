import React from 'react'
import Tour from '../tour.js/Tour'
import './tours.css'
const Tours = ({toursData, handleDelete}) => {
    return (
        <div className='tours-container'>
            {toursData &&
            toursData.map(item=>(
                <Tour
                key={item.id}
                name={item.name}
                info={item.info}
                image={item.image}
                price={item.price}
                id={item.id}
                handleDelete={handleDelete}
                />
            ))
            }
        </div>
    )
}

export default Tours
