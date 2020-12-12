import { CardGroup, Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ProductView from './productview.js'

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
        return (<CardGroup>{this.state.products.map((res, i) => {
          return <ProductView obj={res} key={i} />;
        })}</CardGroup>);
      }
    
    render() {
      return (<div >
      <h2>Categories</h2>
      <button onClick={this.changecategory} value="">Show All</button>
      <button onClick={this.changecategory} value="Indoor">Indoor</button>
      <button onClick={this.changecategory} value="Manure">Soil And Fertilisers</button>
      <button onClick={this.changecategory} value="Outdoor">Outdoor</button>
      <button onClick={this.changecategory} value="Tools">Tools</button>
       {this.DataTable()}
    </div>);
    
    }
} 