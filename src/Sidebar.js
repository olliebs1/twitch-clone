import React from 'react';
import './Sidebar.css';
import Channel from './Channel'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
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
            <div className='sidebar_bottom'>
                <div className='sidebar_bottomContainer'>
                    <i className='fas fa-search'></i>
                    <input type='text' placeholder='Search to Add Friends'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
