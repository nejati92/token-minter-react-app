import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
var rp = require("request-promise");
const Web3 = require("web3");
let web3 = new Web3();

class MintToken extends React.Component {
  state = {
    id: "",
    hash: "",
    link: "",
    avatar: "",
    owner: "",
    error: null
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitFormAdd = async e => {
    e.preventDefault();

    var options = {
      method: "POST",
      uri: "http://52.18.55.7:49160/token/mint",
      body: {
        id: this.state.id,
        owner: this.state.owner
      },
      json: true
    };
    try {
      const result = await rp(options);
      this.props.toggle();
      if (result.length === 1) {
        this.props.addItemToState(result[0]);
      } else {
        console.log("failure");
      }
    } catch (err) {
      this.props.toggle();
      this.props.displayError(err.message);
      console.log(err.message);
    }
  };
  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, hash, link, avatar, owner } = this.props.item;
      this.setState({
        id,
        hash,
        link,
        avatar,
        owner
      });
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="owner">Minting Address</Label>
          <Input name="owner" id="owner" onChange={this.onChange} value={this.state.owner} valid={web3.utils.isAddress(this.state.owner)===true} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Id</Label>
          <Input type="number" name="id" id="id" onChange={this.onChange} valid={this.state.id} value={this.state.id} />
        </FormGroup>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default MintToken