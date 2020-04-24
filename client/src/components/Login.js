import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onSubmit = data => {
    console.log.apply(data);
    axiosWithAuth()
      .post("/api/login", {
        username: data.username,
        password: data.password
      })
      .then( res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login">
        <h1>Log In</h1>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="Username"
            ref={register({ required: true })}
          />
          <br />
          {errors.username && <span>Username is a required field</span>}
        </label>
        <br />
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          <br />
          {errors.password && <span>Password is a required field</span>}
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
