import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

import Home from './pages/Home';
import Cronometru from './pages/Cronometru';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
      minus: false,
      logat : false
    }

    // setTimeout(() => this.setState({pagina_curenta: 'cronometru' }), 5000)

  }
onLoginSucces(user){
  this.setState({pagina_curenta:'cronometru',
  user,logat :true
})
}
onLogout(user){
  this.setState({pagina_curenta:'login',
  user,logat :false
})
}
  render(){

    let paginaRandata = (<Home/>);
    if (this.state.pagina_curenta === 'login') {
      paginaRandata = (<Login onLoginSucces={(user) => this.onLoginSucces(user) }/>);
    }
    if (this.state.pagina_curenta === 'cronometru') {
      paginaRandata = (<Cronometru user = {this.state.user}/>);
    }
    if (this.state.pagina_curenta === 'signUp') {
      paginaRandata = (<SignUp onLoginSucces={(user) => this.onLoginSucces(user) }/>);
    }


    let butonLogout= (<Nav.Link onClick={() => this.setState({pagina_curenta: 'login'})}>Login</Nav.Link>);
    if(this.state.logat === true){
      butonLogout= (<Nav.Link onClick={() => this.onLogout()}>Logout</Nav.Link>);
    }
    let butonSignup= (<Nav.Link onClick={() => this.setState({pagina_curenta: 'signUp'})}>signUp</Nav.Link>);
    if(this.state.logat === true){
      butonSignup= null
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
         {butonLogout}
         {butonSignup}
         
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

