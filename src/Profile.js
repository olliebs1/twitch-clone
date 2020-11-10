import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile_topLeft'>
                <img src='https://i.pinimg.com/564x/a7/0e/16/a70e1675c7bc001f1578aa76bb0a7819.jpg' alt=''/>
                <div>
                    <h1>Programming</h1>
                    <h3>100k followers</h3>
                </div>
            </div>
            <div className='profile_topRight'>
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className='profile_menu'>
                <h2 className='active'>Home</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div>

            <div className='profile_recent'>
                <h2>Recent Broadcasts</h2>
                <div className='profile_recentItems'>

                </div>
            </div>
        </div>
    )
}

export default Profile
