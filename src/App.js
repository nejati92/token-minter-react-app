import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ModalForm from "./Components/Modals/Modal";
import DataTable from "./Components/Tables/DataTable";
import {NotificationContainer, NotificationManager} from 'react-notifications';
class App extends Component {
  state = {
    items: [],
    error:[]
  };

  errorNotification = (type) => {
      debugger;
      if(type){
      console.info(type);
      NotificationManager.error( '',type, 1000, () => {
            alert("Invalid id, this is already exists");
      });
      this.state.error = []
    }
  }

  happyNotification = (type)=>{
      debugger;
      console.info(type);
      if(type)
      {
      NotificationManager.success( '',"Transaction has been submitted", 1000, () => {
            alert("Trnasaction to mint the tokens to your account has been submitted, An entry should appear on the table in showrtwhile, Follow the link to etherescan to see the status");
      });
      this.state.error = []
    }
  }
  
  addItemToState = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  displayError = error =>{
    debugger;
    this.setState(prevState => ({
      error: [...prevState.error, error]
    }));
     
  }

  updateState = item => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ];
    this.setState({
      items: newArray
    });
  };

  

  componentDidMount() {

  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{ margin: "20px 0" }}>
              Minted Tokens
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Mint Tokens" addItemToState={this.addItemToState} displayError={ this.displayError} />
          </Col>
        </Row>
      <div>
          {(this.state.error[0]) ? this.errorNotification(this.state.error[0]) : this.happyNotification(this.state.items[0])}
          <NotificationContainer/>
      </div>
      </Container>
      
    )
    
  }
}

export default App;
