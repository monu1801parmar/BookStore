import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();
  const change = (e) =>{
    const { name, value } = e.target;
    setValues({...Values, [name]: value})
  }
  const submit = async () => {
    // e.preventDefault();
    try {
      if(Values.username === "" || 
        Values.email === "" ||
         Values.password === "" ||
          Values.address === "")
      {
        alert("All Fields are Required")
      }
      else{
        // console.log(Values)
        const response = await axios.post("http://localhost:1000/api/v1/sign-up", Values)
        alert(response.data.message)
        navigate("/Login")
      }
    
 
    } catch (error) {
      // console.log(error)
      // alert("Signup failed. Please try again.");
      alert(error.response.data.message)
    }
  }
  return (
    <div className='h-screen flex items-center justify-center bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-yellow-100 text-center'>
          Create an Account
        </h2>
        {/* <form className='mt-6'> */}
          <div className='mt-4'>
            <label className='text-yellow-100'>Name</label>
            <input type='text' className='w-full mt-2
             p-3 rounded bg-zinc-700 text-yellow-100 focus:outline-none' 
             placeholder='Enter your name' 
             name='username'
             required
             value={Values.username}
             onChange={change}
             />
          </div>
          <div className='mt-4'>
            <label className='text-yellow-100'>Email</label>
            <input type='email' className='w-full mt-2 p-3 rounded bg-zinc-700 text-yellow-100 focus:outline-none' 
            placeholder='Enter your email' 
            required
            name='email'
            value={Values.email}
            onChange={change}
            />
          </div>
          <div className='mt-4'>
            <label className='text-yellow-100'>Password</label>
            <input type='password' className='w-full mt-2 p-3 rounded bg-zinc-700 text-yellow-100 focus:outline-none' 
            placeholder='Enter your password' 
            required
            name='password'
            value={Values.password}
            onChange={change}
            />
          </div>
          <div className='mt-4'>
            <label className='text-yellow-100'>
              Address
            </label>
            <textarea   id="" className="w-full  mt-2 text-yellow-100 bg-zinc-700 p-2 outline-none"
            rows="5"
            placeholder='address'
            value={Values.address}
            onChange={change}
             name="address"
            required
            />
          </div>
          <button className='w-full mt-6 bg-yellow-100 text-zinc-900 py-3 rounded font-semibold hover:bg-yellow-200'
          type='button'
          onClick={submit}>
            Sign Up
          </button>
        {/* </form> */}
        <p className='text-zinc-300 text-center mt-4'>
          Already have an account?
          <Link to='/Login' className='text-yellow-100 font-semibold ml-1'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
