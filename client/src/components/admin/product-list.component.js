import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProductTableRow from './ProductTableRow';


export default class ProductList extends Component {

  constructor(props) {
    super(props);
    this.changecategory=this.changecategory.bind(this);
    this.state = {
      products: [],
      category:""
    };
  }
  fetchData(){

    axios.get('/products/',{
      params: {
        category:this.state.category
      }
    })
      .then(res => {
        this.setState({
          products: res.data
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
    return this.state.products.map((res, i) => {
      return <ProductTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <h2>Categories</h2>
      <button onClick={this.changecategory} value="">Show All</button>
      <button onClick={this.changecategory} value="Indoor">Indoor</button>
      <button onClick={this.changecategory} value="Manure">Manure</button>
      <button onClick={this.changecategory} value="Outdoor">Oudoor</button>
      <button onClick={this.changecategory} value="Tools">Tools</button>
      
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