import React, {useState} from 'react'
import './tour.css'

const Tour = ({name, info, price, image, id, handleDelete}) => {
        const [more, setMore] = useState(false);
    return (
        <div className='tour'>
            <img src={image} alt="logo" />
            <div className="info-div">
                <div className='tour-heading'>
                <h4>{name}</h4>
                <h5 className='price'>{`$${price}`}</h5>
                </div>
                <p>
                    {more? info: 
                    `${info.substring(0,250)}...`}

                    <button className="btn" onClick={()=> setMore(!more)}>
                    {more? 'show less' : 'read more'}
                    </button>
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
