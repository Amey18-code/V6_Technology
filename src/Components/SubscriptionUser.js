import React from 'react';

const SubscriptionUser = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}> {/* Ensure this key is unique */}
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Render other user details here */}
                </div>
            ))}
        </div>
		<ul>
            {users.map(user => (
                <li key={user.id}> {/* Ensure user.id is unique */}
                    {user.name}
                </li>
            ))}
        </ul>
		<ul>
            {users.map(user => (
                <li>
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default SubscriptionUser;
