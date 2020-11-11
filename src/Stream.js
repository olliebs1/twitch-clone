import React from 'react'
import './Stream.css'

const Stream = () => {
    return (
        <div className='stream'>
            <div className='stream_container'>
                <div className='stream_status'>
                    <div className='stream_statusContainer'>
                        <div className='stream_statusContainerTop'>
                            <div className='stream_statusIndicator'>OFFLINE</div>
                            <h2>Check out the below streams for Programmers</h2>
                        </div>
                        <div className='stream_statusInfo'>
                            <i className='fas fa-bell'></i>
                            <p>You will be notified when it is live</p>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        width="500"
                        height="295"
                        src=""
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
