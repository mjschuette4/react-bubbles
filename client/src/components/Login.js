import React, {useState} from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log('handleChange results: ', credentials)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblepage');
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
