import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {authActions} from "../store/auth";
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",

  });
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const change = (e) =>{
    const { name, value } = e.target;
    setValues({...Values, [name]: value})
  }
  const submit = async () => {
    // e.preventDefault();
    try {
      if(Values.username === "" || 
         Values.password === "" 
      )
      {
        alert("All Fields are Required")
      }
      else{
        // console.log(Values)
        const response = await axios.post("http://localhost:1000/api/v1/sign-in", Values)
        // console.log(response.data)
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile")
        // navigate("/Login")
      }
    
 
    } catch (error) {
      alert(error.response.data.message)
      // alert("Login failed. Please try again.");
    }
  }
  return (
    <div className='h-screen flex items-center justify-center bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-yellow-100 text-center'>
          Login to Your Account
        </h2>
        {/* <form className='mt-6'> */}
          <div className='mt-4'>
            <label className='text-yellow-100'>Username</label>
            <input type='text' className='w-full mt-2 p-3 rounded bg-zinc-700 text-yellow-100 focus:outline-none'
            name='username'
            required
            value={Values.username}
            onChange={change}
            placeholder='username' />
          </div>
          <div className='mt-4'>
            <label className='text-yellow-100'>Password</label>
            <input type='password' className='w-full mt-2 p-3 rounded bg-zinc-700 text-yellow-100 focus:outline-none' 
             name='password'
             required
             value={Values.password}
             onChange={change}
            placeholder='password' />
          </div>
          <button type='button' className='w-full mt-6 bg-yellow-100 text-zinc-900 py-3 rounded font-semibold hover:bg-yellow-200' onClick={submit}>
            Login
          </button>
        {/* </form> */}
        <p className='text-zinc-300 text-center mt-4'>
          Don't have an account?
          <Link to='/Signup' className='text-yellow-100 font-semibold ml-1'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;  
