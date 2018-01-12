import React from 'react';

export default class UserInfo extends React.Component {
    render() {
        return (
            <div id='UserInfo-container'>
                <p>Input a Twitter username:</p>
                <input id='username' type='text' />
            </div>
        )
    }
}
