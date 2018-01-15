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
                Let's get started!
            </Modal.Title>
            <span>Enter the username of someone whose tweets you want to analyze.</span>
        </Modal.Header>
        <Modal.Body>
            <Modal.Title>
                Twitter
            </Modal.Title>
            <span>Username  </span>
            <input id='twit-username' type='text' />
            {this.state.userData ?
                <span>
                    {JSON.stringify(this.state.userData)}
                </span> : null}
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
