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
        this.setState({value: res.data});
      }).catch(err => console.log('There was an error:' + err));
    this.setState({value:''});
  }
  componentDidMount(){
    this.getDataList();
  }

  
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Decrypt</h1>
          {/* <div>
          <span>DPO</span>
          <Progress completed={}/>
          </div>
          <div>
          <span>BOARD</span>
          <Progress completed={12}/>
          </div>
          <div>
          <span>DATA ENCRYPTED</span>
          <Progress completed={12}/>
          </div> */}

        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
