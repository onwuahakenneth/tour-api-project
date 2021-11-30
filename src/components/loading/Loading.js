import React from 'react'
import PropTypes from 'prop-types'
import './loading.css'

const Loading = ({text}) => {
    return (
        <h3 className='loading'>
            {text}
        </h3>
    )
}

Loading.propTypes = {
    text: PropTypes.string,
}

export default Loading
