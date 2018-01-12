import React from 'react';

export default class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to Sentimental! Input a Twitter username:</p>
                <input id='username' type='text' />
            </div>
        )
    }
}
