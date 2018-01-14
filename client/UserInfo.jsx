import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
//import { getInfo } from './tweet_puller.js'

export default class UserInfo extends React.Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showModal: false
        };
    }

    handleShow() {
        this.setState({
            showModal: true
        });
    }

    handleClose() {
        this.setState({
            showModal: false
        });
    }

    submitHandler() {
        const username = document.getElementById('twit-username').value;

        console.log('submitted!' + username);
        // send username data
        axios.post('/api/tweets', {
            user: username
            })
            .then(function(res) {
                console.log(res.data);
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    render() {
        return (
            <div id='UserInfo-container'>
                <Button bsStyle='primary' id='get-started' onClick={this.handleShow}>Get started</Button>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Let's get started
                        </Modal.Title>
                        <span>Enter your info!</span>
                    </Modal.Header>
                    <Modal.Body>
                    <Modal.Title>
                        Twitter
                    </Modal.Title>
                        <p>Username</p>
                        <input id='twit-username' type='text' />
                        <p>Password</p>
                        <input id='twit-pass' type='text' />
                    </Modal.Body>
                    <Modal.Body>
                    <Modal.Title>
                        Facebook
                    </Modal.Title>
                        <p>Username</p>
                        <input id='fb-username' type='text' />
                        <p>Password</p>
                        <input id='fb-pass' type='text' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id='submit' bsStyle='primary' onClick={this.submitHandler}>
                        Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
