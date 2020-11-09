import React from 'react';
import './Sidebar.css';
import Channel from './Channel'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar=''
                name='Olivier Benson-Smith'
                followers='10k' />
            <Channel avatar=''
                name='Progamming'
                followers='100k' />

            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar=''
                name='Recommended'
                followers='1000' />
            <p className='sidebar_topShowMore' >Show More</p>
        </div>
    )
}

export default Sidebar
