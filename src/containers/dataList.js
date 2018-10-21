import React, { Redirect, Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Button from '../components/uielements/button';
import notification from '../components/notification';
import AuthHelper from '../helpers/authHelper';
import Input from '../components/uielements/input';
import Axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import DownloadLink from "react-download-link";


export default class extends Component {
  state = { value: []};
  getDataList = () => {
    Axios.get(`http://localhost:5000/data/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.data = res.data
        this.setState({ value: res.data });
      }).catch(err => console.log('There was an error:' + err));
    this.setState({ value: '' });
  }

  checkDetails = () => {
    // this.generatePDF();
    // <DownloadLink
    // filename="output.pdf"
    // exportFile={() => "Output"}>
    //     Save to disk
    // </DownloadLink>
  }

  setRedirect = (id) => {
    this.setState({
      redirect: true
    })
  }

  sign =(id) => {
    console.log(id)
    console.log(this.props)
    return <Redirect to={"./votedecrypt/"+id.toString()} />
  }


  componentDidMount() {
    this.getDataList();
  }

  render = () => {
    const columns = [{
      Header: 'DB Id',
      accessor: 'dbId'
    },
    {
      Header: 'Encrypted Data',
      accessor: 'encryptedData'
    },
    {
      Header: 'Id',
      accessor: '_id',
      show: false
    },
    {
      Header: 'Options',
      accessor: 'options',
      width: 200,
      Cell: ({row, original}) => (
        <div>
          <DownloadLink>
            filename="../output.pdf"
        exportFile={() => "Output"}>
                Save to disk
        </DownloadLink>
          <Button bsstyle="primary" onClick={() => this.sign(original._id)}> Sign </Button>
        </div>
      )
    }
    ]
    
    var tabledata = [];
    for (var item in this.data) {
      tabledata.push({
        "_id": this.data[item]["_id"],
        "dbId": this.data[item]["dbId"],
        "encryptedData": this.data[item]['encryptedData']
      })
    }
    return (

      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Data List</h1>
          <div>
            <ReactTable
              data={tabledata}
              columns={columns}
            />
          </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
