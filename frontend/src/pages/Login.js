import React from "react";
import axios from "axios"
import querystring from "querystring"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Popup from 'reactjs-popup';
import { Redirect } from 'react-router-dom';


export default function Login(props) {

  const { register, handleSubmit } = useForm()
  const [successfulLogin, setSuccessfulLogin] = useState(false)
  const closePopup = () => setSuccessfulLogin(false)

  const onSubmit = data => {
    axios
    .get("api/user?" + querystring.stringify({
      "username": data.username,
      "password": data.password
    }))
    .then(response => {
      if (response.data.length > 0) {
        console.log("Succesful Login") 

       props.onLoginSucces(data.username)


        setSuccessfulLogin(true)
        localStorage.setItem("username", data.username)
        localStorage.setItem("password", data.password)
      } 
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> 
          Username:
          <br/>
          <input type="text" {...register("username")} required/>
        </label>
        <br/>
        <label>
          Password:
          <br/>
          <input type="password" {...register("password")} required/>
        </label>
        <br/>
        <input type="submit" value="Log in"/>
      </form>
    </div>
  )
}