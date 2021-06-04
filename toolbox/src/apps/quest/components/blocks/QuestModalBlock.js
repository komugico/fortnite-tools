import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class QuestModalBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.imgUrl} style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default QuestModalBlock;