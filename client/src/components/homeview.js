import React, { Component } from 'react';
import Carousel from './main/corousel';
export default class HomeView extends Component {

    constructor(props) {
        super(props);

    }
    render(){
        return (
           <div><Carousel></Carousel></div>
        );
    }
}

