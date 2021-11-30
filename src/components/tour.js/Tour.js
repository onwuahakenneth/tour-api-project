import React, {useState} from 'react'
import './tour.css'

const Tour = ({name, info, price, image, id, handleDelete}) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='tour'>
            <img src={image} alt="logo" />
            <div className="info-div">
                <div className='tour-heading'>
                <h4>{name}</h4>
                <h5 className='price'>{`$${price}`}</h5>
                </div>
                <p 
                    className='tour-details'>
                    {showMore ? info : info.slice(0, 120)+'...' }
                    {<span 
                        className='accordion-btn'
                        onClick={()=>setShowMore(prev => !prev)}
                    >
                        {showMore ? 'show less' : 'show more'}
                    </span>}
                </p>
            </div>
           
            <button 
                className='delete-btn'
                onClick={()=>handleDelete(id)}
            >
                Not Interested
            </button>
        </div>
    )
}

export default Tour
