import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Button from '../components/uielements/button';
import notification from '../components/notification';
import AuthHelper from '../helpers/authHelper';
import Input from '../components/uielements/input';
import Axios from 'axios';
import ReactTable from "react-table";


export default class extends Component {
  state = {value: []};
  getDataList = () => {
    Axios.get(`http://localhost:5000/data/`)
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
    // const listItems = this.state.value.map((d) => <td key={d.entityId}>{d.entityId}</td>);
    return (
      
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Data List</h1>    

        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
