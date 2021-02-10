import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import pic from '../../photos/gradient.jpeg';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user =useSelector(selectUser);

    const recentItem =(topic) => (
        <div className="sidebar_recentItem" >
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src={pic} alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
            
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,488</p>
                </div>
            </div>
            <div className="sidebar_bottom" >
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('software')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>
        </div>
    )
}

export default Sidebar;
