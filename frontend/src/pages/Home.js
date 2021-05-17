import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import naruto from "../images/naruto.png"
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import styled from "styled-components";
import axios from "axios";

const ButtonStart = styled.a`
position: absolute;
width: 229px;
height: 97px;
left: 650px;
top: 540px;
background: linear-gradient(
180deg
, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(
180deg
, #A1D28B 0%, rgba(255, 255, 255, 0) 100%);
border-radius: 20px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 70px;

color: #FFAA15;

`
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/user/")
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  };



  imageClick = () => {
    console.log('Click!!!!');
 }
  render() {
      return (<div className="MainPage">      
       <img className="plus" onClick={this.imageClick} src={plus} />
       <img className="naruto" src={naruto} alt>
       </img>
       <ButtonStart primary>START</ButtonStart>
       
       <img className="minus" onClick={this.imageClick} src={minus} />
      
      { // this was a test
      this.state.users.forEach(user => {
        console.log(user.email)
      })
      }
       </div>    
      )
  }
}

export default Home;