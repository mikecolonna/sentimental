import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default class UserInfo extends React.Component {
  constructor() {
    super();
    this.handleShow  = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      showModal: false,
      showData: false,
      userData: null
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
    const self = this;

    console.log('submitted!' + username);
    axios.post('/api/tweets', {
        user: username
    })
    .then(function(res) {
        self.setState({ showData: true });
        self.setState({ userData: res.data });
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
            {this.state.userData ?
                <p>
                    {JSON.stringify(this.state.userData)}
                </p> : null}
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
