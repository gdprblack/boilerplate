import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Button from '../components/uielements/button';
import notification from '../components/notification';
import AuthHelper from '../helpers/authHelper';
import Input from '../components/uielements/input';
import Axios from 'axios';
import { Redirect } from 'react-router';

export default class extends Component {
  state = { submit: false, value: '' };
  handleChange = (event) => {
    console.log(event);
    this.setState({ value: event.target.value });
  }

  submitKey = () => {
    this.setState({ submit: true });
    Axios.post("https://localhost:3000/" + this.props.match.params.id + "/sign", this.state.value)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(err => console.log('There was an error:' + err));
    alert('A private key was submitted: ' + this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Request decrypt</h1>
          <div className="isoInputWrapper">
            <Input size="small" value={this.state.value} placeholder="Private key" onChange={this.handleChange} />
          </div>
          <Button submit={this.state.submit.toString()} onClick={this.submitKey}>
            Submit private key
          </Button>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
