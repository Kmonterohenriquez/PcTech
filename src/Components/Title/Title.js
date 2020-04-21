import React from 'react'
import './Title.sass'

const Title = (props) => {
    return (
        <div className='Title'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title
