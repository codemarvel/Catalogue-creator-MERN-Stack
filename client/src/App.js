import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Carousel from "./components/main/corousel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProduct from "./components/admin/create-product.component";
import EditProduct from "./components/admin/edit-product.component";
import Product_Admin_List from "./components/admin/product-list.component";
import ProductList from "./components/product-component";
import Home_view from "./components/homeview";

function App() {
  return (<Router>
    <div className="App">
      <title>Ashok Nursery</title>
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                Ashok Nursery
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              {/*<Nav>
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </Nav>*/}

               <Nav>
                <Link to={"/create-product/"} className="nav-link">
                  Add New Product
                </Link>
              </Nav> 

              <Nav>
                <Link to={"/product-list"} className="nav-link">
                  Edit Product List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
        
      </header>
              
      <Container>
      
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={ProductList} />
                <Route path="/create-product" component={CreateProduct} />
                <Route path="/edit-product/:id" component={EditProduct} />
                <Route path="/product-list" component={Product_Admin_List} />
                {/*<Route path="/" component={Home_view}/>*/}

                
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;