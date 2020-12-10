import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
    this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
    this.onChangeProductImg=this.onChangeProductImg.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      price: '',
      description: '',
      category:'',
      img:''
    }
  }

  onChangeProductName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeProductPrice(e) {
    this.setState({ price: e.target.value })
  }

  onChangeProductDescription(e) {
    this.setState({ description: e.target.value })
  }
  onChangeProductCategory(e) {
    this.setState({ category: e.target.value })
  }
  onChangeProductImg(e){
    this.setState({ img : e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    
    const studentObject = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description,
      category:this.state.category,
      img:this.state.img
    };
    


    axios.post('http://localhost:4000/products/create-product', studentObject)
      .then(res => console.log(res.data));

    this.props.history.push("/product-list");
    this.setState({
      name: '',
      price: '',
      description: '',
      category:'',
      img:''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={this.state.price} onChange={this.onChangeProductPrice} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductDescription} />
        </Form.Group>

        <Form.Group controlId="Category">
          <Form.Label>category</Form.Label>
          <Form.Control type="text" value={this.state.category} onChange={this.onChangeProductCategory} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image Link</Form.Label>
          <Form.Control type="text" value={this.state.img} onChange={this.onChangeProductImg} />
        </Form.Group>


        <Button variant="danger" size="lg" block="block" type="submit">
          Create Product
        </Button>
      </Form>
    </div>);
  }
}
