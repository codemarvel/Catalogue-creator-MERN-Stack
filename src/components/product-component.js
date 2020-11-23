import { CardGroup, Col, Panel } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ProductView from './productview.js'

export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state={
            products:[],
            category:""
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/products',{
          params: {
            category:this.state.category
          }
        })
          .then(res => {
            this.setState({ 
              products:res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    render() {
    return (<CardGroup>{this.state.products.map((res, i) => {
      return <ProductView obj={res} key={i} />;
    })}</CardGroup>)
    }
} 