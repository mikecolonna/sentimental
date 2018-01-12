import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="Header-jumbo">
                    <h1>Sentimental.</h1>
                    <p>
                    Welcome to Sentimental, a web app that analyzes your social media feeds for signs of mental illness.
                    </p>
                    <p>
                        <Button>Get started</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
