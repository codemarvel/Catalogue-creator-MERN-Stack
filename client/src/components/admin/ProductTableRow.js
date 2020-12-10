import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        axios.delete('http://localhost:4000/products/delete-product/' + this.props.obj._id)
            .then((res) => {
                console.log('Product successfully deleted!')
                window.location.reload(false);

            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.price}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.category}</td>
                <td><img src={this.props.obj.img}  height="243px" width="360px"></img></td>
                <td>
                    <Link className="edit-link" to={"/edit-product/" + this.props.obj._id}>
                        Edit 
                    </Link>
                    <Button onClick={this.deleteProduct} size="sm" variant="danger"> Delete</Button>
                </td>
            </tr>
        );
    }
}