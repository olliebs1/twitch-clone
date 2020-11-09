import React from 'react'
import './Channel.css'

const Channel = ({ avatar, name, followers }) => {
    return (
        <div className='channel'>s
            <div className='channel_details'>
                <img src={avatar} alt='avatar' />
                <p>{name}</p>
            </div>
            <p>🔴 {followers}</p>
        </div>
    )
}

export default Channel
