import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Button from '../components/uielements/button';
import notification from '../components/notification';
import AuthHelper from '../helpers/authHelper';
import Input from '../components/uielements/input';
import Axios from 'axios';
import Progress from 'react-progressbar';


export default class extends Component {
  state = {};
  getDataList = () => {
    Axios.get(`http://localhost:5000/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ value: res.data });
      }).catch(err => console.log('There was an error:' + err));
    this.setState({ value: '' });
  }
  componentDidMount() {
    this.getDataList();
  }


  render() {/*
    const data = this.state.value;
    const permittedIds = array.map(data => data._id);
    const pos = findIndexOf(x => x.id === _id);
    pos = 0;
    const dpoVoted = data[pos].signatures.dpo ? 0:100;
    const boardVoted = data[pos].signatures.board.length;
    const boardLength = data[pos].encryptedKeys.boardKeys.length;
    const encryptedData = data[pos].encryptedData;*/
    return (
      /*
      <Route path="/:id/sign" component={Child} />
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Decrypt</h1>
          <div>
            <Label bsStyle="success">DPO</Label>
            <Progress completed={3} />
          </div>
          <div>
            <Label bsStyle="success">Board</Label>
            <Progress completed={30 * 100 / 100} />
          </div>
          <div>
            <Label bsStyle="primary">Data Encrypted</Label>
            <Progress completed={"encryptedData"} />
          </div>
        </LayoutContent>
      </LayoutContentWrapper>*/
      <div></div>
    );
  }
}
