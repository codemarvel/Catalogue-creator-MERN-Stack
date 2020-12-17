import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class Carouse extends Component {

    constructor(props) {
        super(props);

    }
    render(){
        return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/slide1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Ashok Nursery</h2>
      <h4>Your search of plants and gardening tools ends here.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/slide2.png"
      alt="Second Slide"
    />

    <Carousel.Caption>
      <h2>Pots and planters </h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/slide3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Exotic Plants</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );
    }
}

