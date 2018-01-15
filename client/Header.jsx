import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import UserInfo from './UserInfo.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div id='Header-container'>
                        <h1>Sentimental.</h1>
                        <p>
                        Welcome to Sentimental, a web app that analyzes your social media feeds for signs of mental illness.
                        </p>
                        <span>
                            <UserInfo />
                            <a href='https://www.psychologytoday.com'>Learn more</a>
                        </span>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
