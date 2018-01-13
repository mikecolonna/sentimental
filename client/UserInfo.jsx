import React from 'react';
import { getUserData } from '../server/tone_analyzer.js'

export default class UserInfo extends React.Component {

    submitHandler() {
        const user = document.getElementById('username').value;

        console.log('submitted!');
        // send username data
        console.log(getUserData(user));
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
