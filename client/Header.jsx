import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

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
                            <Button bsStyle='primary' id='get-started'>Get started</Button>
                            <Button id='learn-more'>Learn more</Button>
                        </span>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}
