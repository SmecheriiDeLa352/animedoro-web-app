import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

import Home from './pages/Home';
import Cronometru from './pages/Cronometru';
import Login from './pages/Login';

class App extends React.Component{
  constructor(props) {
    /*
      oricand se schimba state.pagina_curenta, afisam altceva in Render()

      pagini:
        - home
        - register
        - cronometru


        // dupa login cu succes, this.setState({pagina_curenta: 'cronometru' })
    */
    super(props);
    this.state = {
      pagina_curenta: 'home',
      plus: false,
      minus: false
    }

    // setTimeout(() => this.setState({pagina_curenta: 'cronometru' }), 5000)

  }

  render(){

    let paginaRandata = (<Home/>);
    if (this.state.pagina_curenta === 'login') {
      paginaRandata = (<Login trimisVariabilaPrinParametru={'variabila trimisa ca paramentru'}/>);
    }
    if (this.state.pagina_curenta === 'cronometru') {
      paginaRandata = (<Cronometru/>);
    }

    return (
      <div className="App">
        <div className="Navbar-ceva">
        <div className="Navbar-content">
        {/* {this.state.pagina_curenta} */}
        <Navbar >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
          <Nav.Link onClick={() => this.setState({pagina_curenta: 'home'})}>Home</Nav.Link>
          <Nav.Link onClick={() => this.setState({pagina_curenta: 'login'})}>Login</Nav.Link>
          {/* <Nav.Link onClick={() => this.setState({pagina_curenta: 'cronometru'})}>Cronometru</Nav.Link> */}
        </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
      <div className="Cronometru">
        {paginaRandata}
      </div>

      </div>
      
    );
}
}
export default App;

