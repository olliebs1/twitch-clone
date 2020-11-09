import React from 'react';
import './Sidebar.css';
import Channel from './Channel'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar='https://i.pinimg.com/564x/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.jpg'
                name='Olivier Benson-Smith'
                followers='10k' />
            <Channel avatar='https://i.pinimg.com/564x/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.jpg'
                name='Progamming'
                followers='100k' />

            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar='https://i.pinimg.com/564x/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.jpg'
                name='Recommended'
                followers='1000' />
            <p className='sidebar_topShowMore' >Show More</p>
        </div>
    )
}

export default Sidebar
