import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';
import {CardColumns} from 'react-bootstrap';
export default class ProductView extends Component {

    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div>
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.obj.img} height="243px" width="360px" />
            <Card.Body>
              <Card.Title>{this.props.obj.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.obj.category}</Card.Subtitle>
              <Card.Text>
              {this.props.obj.description}
              </Card.Text>
              <Button variant="primary">{this.props.obj.price} Rs</Button>
            </Card.Body>
          </Card>
          
          </div>
        );
    }
}



    /*render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.category}</td>
                <td>{this.props.obj.description}</td>
                <td><img src={this.props.obj.img}></img></td>
            </tr>
        );
    }
}*/