import React from 'react'
import './RecentItem.css'

const RecentItem = ({ url, title }) => {
    return (
        <div className='item'>
            <iframe
                width="400"
                height='235'
                src={url}
                frameborder='0' 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen={true}
            ></iframe>

            <div className='item_details'>
                <img src='https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg'/>
                <div className='item_detailsText'>
                    <h4>{title}</h4>
                    <p>Programmer</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
