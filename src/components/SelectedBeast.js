import React from "react";
import { Modal, Button, Card} from "react-bootstrap/";





class SelectedBeast extends React.Component {

    

  render() {
    return (
      <div>

      <Modal  show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top" src={this.props.selectBeast.image_url} alt="picSelc" title="picSelc" />
        <Modal.Body>
            <Card.Text>{this.props.selectBeast.description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default SelectedBeast;