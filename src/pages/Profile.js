// src/pages/Profile.js
import React from 'react';
import './Profile.css';

function Profile() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'I love creating DIY projects and exploring new ideas.'
    };

    return (
        <div className="container profile-container">
            <h1>Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
        </div>
    );
}

export default Profile;
