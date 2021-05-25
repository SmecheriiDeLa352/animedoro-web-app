import React, { Component } from 'react';
// import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import naruto from "../images/naruto.png"
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import styled from "styled-components";

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
class Home extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       leftTime : 20 * minute,
       running : false
     }

  }

  imageClick = () => {
    console.log('Click!!!!');
 }
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
       <img className="plus" onClick={this.addTime} src={plus} />
       <img className="naruto" src={naruto} alt>
       </img>
       <ButtonStart  onClick={this.startStop} primary>{this.state.running? "Stop" : "Start"}</ButtonStart>
       
       <img className="minus" onClick={this.substractTime} src={minus} />
        {this.afisFrumos()}
       </div>
      
      
        
      
      )
  }
}

export default Home;