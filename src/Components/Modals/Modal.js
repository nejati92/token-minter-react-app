import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import MintToken from "../Forms/MintToken";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    const label = this.props.buttonLabel;

    let button = "";
    let title = "";

    button = (
      <Button color="success" onClick={this.toggle} style={{ float: "left", marginRight: "10px", marginTop:"20px" }}>
        {label}
      </Button>
    );
    title = "Mint token";
    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} close={closeBtn}>
                {title}
            </ModalHeader>
            <ModalBody>
                <MintToken addItemToState={this.props.addItemToState} updateState={this.props.updateState} displayError={this.props.displayError} toggle={this.toggle} item={this.props.item} />
            </ModalBody>
         </Modal>
        </div>
    );
  }
}

export default ModalForm