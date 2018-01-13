import React from 'react';

export default class UserInfo extends React.Component {

    submitHandler() {
        const user = document.getElementById('username').value;

        console.log('submitted!');
        // send username data
    }

    render() {
        return (
            <div id='UserInfo-container'>
                <p>Input a Twitter username:</p>
                <input id='username' type='text' />
                <input id='submit' type='submit' onClick={this.submitHandler} />
            </div>
        )
    }
}
