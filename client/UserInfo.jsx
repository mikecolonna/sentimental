import React from 'react';
import { Modal, Button } from 'react-bootstrap';
//import { getUserData } from '../server/tone_analyzer.js'

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
        const user = document.getElementById('username').value;

        console.log('submitted!');
        // send username data
        //console.log(getUserData(user));
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
                    </Modal.Header>
                    <Modal.Body>
                        <p>Input a Twitter username:</p>
                        <input id='username' type='text' />
                        <input id='submit' type='submit' onClick={this.submitHandler} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
