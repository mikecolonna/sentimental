import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import UserInfo from './UserInfo.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div id='Header-container'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1><img src='logo-3.png' height= '70px' width='70px'></img>Sentimental.</h1>
                        <p>
                        Welcome to Sentimental, a web app that provides insight into your mental health using your social media.
                        </p>
                        <span>
                            <UserInfo />
                            {/* <a href='/resources.html'>Learn more</a> */}
                        </span>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
