import React from "react";
import axios from "axios"
import querystring from "querystring"
import { useState } from "react"
import { useForm } from "react-hook-form"


export default function SignUp(props) {

  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    axios.post('api/user/', {
        username: data.username,
        password: data.password,
        email: data.email,
        f_name: data.firstName,
        l_name: data.lastName,
        calendar_id: 1

    }).catch((err) => {
        console.error(err)
    })
    props.onLoginSucces(data.username)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> 
          First Name:
          <br/>
          <input type="text" {...register("firstName")} required/>
        </label>
        <br/>
        <label> 
          Last Name:
          <br/>
          <input type="text" {...register("lastName")} required/>
        </label>
        <br/>
        <label> 
          Email:
          <br/>
          <input type="email" {...register("email")} required/>
        </label>
        <br/>
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
        <input type="submit" value="Sign Up"/>
      </form>
    </div>
  )
}