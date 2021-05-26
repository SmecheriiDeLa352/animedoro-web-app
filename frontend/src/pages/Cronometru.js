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
const minute = 60
class Cronometru extends React.Component{
  constructor(props) {

    super(props);
    this.state = {
      leftTime : 20 * minute,
      running : false,
      users: []
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


addTime = ()=> {
 this.setState({
   leftTime : this.state.leftTime + minute
 })
}
substractTime = ()=> {
this.setState({
  leftTime : this.state.leftTime - minute
})
}
afisFrumos= ()=>{
return Math.floor( this.state.leftTime / minute) + " : " + ("0" + (this.state.leftTime % minute)).slice(-2)


}
startStop= () =>{
if ( this.state.running === false){
  this.setState({
    running : true
  })
  this.clockInterval = setInterval(() => {
    this.setState({
      leftTime : this.state.leftTime - 1 
    })
  }, 1000);
}
else {
  this.setState({
    running : false
  })
  clearInterval(this.clockInterval)
}
}


  render() {
    return (<div className="MainPage">    
    <div>Hi,{ this.props.user}</div>  
    <img className="plus" onClick={this.addTime} src={plus} />
    <img className="naruto" src={naruto} alt> 
           
    </img>
  <div className="timmer">{this.afisFrumos()}</div>
   
    <ButtonStart  onClick={this.startStop} primary>{this.state.running? "Stop" : "Start"}</ButtonStart>
   
    <img className="minus" onClick={this.substractTime} src={minus} />
   
    

   
   { // this was a test
   this.state.users.forEach(user => {
     console.log(user.email)
   })
   }
    </div>    

   )
  }
}

export default Cronometru;