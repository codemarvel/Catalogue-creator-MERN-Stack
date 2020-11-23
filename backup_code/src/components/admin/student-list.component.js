import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

  constructor(props) {
    super(props);
    this.changecategory=this.changecategory.bind(this);
    this.state = {
      students: [],
      category:""
    };
  }
  fetchData(){

    axios.get('http://localhost:4000/students/',{
      params: {
        category:this.state.category
      }
    })
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate()
  {
    this.fetchData();
   }

   changecategory(e)
   {
    this.setState({category:e.target.value});
   }
  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <h2>Categories</h2>
      <button onClick={this.changecategory} value="">Show All</button>
      <button onClick={this.changecategory} value="indoor">Indoor</button>
      <button onClick={this.changecategory} value="manure">Manure</button>
      <button onClick={this.changecategory} value="outdoor">Oudoor</button>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}