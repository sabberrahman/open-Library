import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

const Signup = () => {
  // const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    const dataInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    try {
      const response = await axios.post('https://openapi-94bu.onrender.com/user/signup', dataInfo);
      console.log(response);
      console.log(response.data);
      toast.success('Signup Successful');
      window.location.href = '/course';
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data);
      } else {
        toast.error("Network Error"); // Handle generic network errors
      }
    }
  }
    return (
        <>
           
           
            <div id="" className="flex h-screen justify-center items-center flex-col ">
              <div className='flex justify-center items-center mb-2 text-xl md:text-2xl'>
            <h1>To access all premium Book Please <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-3xl md:mb-6'>SignUp</span></h1>
           </div>
  <div className="modal-box dark:text-white w md:w-[600px] ">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
   
    <h3 className="font-bold text-lg">Register</h3>
    <div className=''>

    <label className="input input-bordered flex items-center gap-2 mt-4 mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
   <br />
  {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
</label>

<label className="input input-bordered flex items-center gap-2 mt-4 mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" 
  {...register("fullname", { required: true })}/>
  {errors.fullname && <span className='text-sm text-red-600 '>This field is required</span>}
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow"  placeholder='Password'
   {...register("password", { required: true })} />
   {errors.password && <span className='text-sm text-red-600 '>This field is required</span>}
</label>

    </div>

    <div className='flex justify-evenly mt-6 md:text-xl'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button className='bg-indigo-500 shadow-lg shadow-indigo-500/50 btn text-white font-semibold md:text-xl'>Signup</button>
      </form>
        
        <p className=' m-2'>Already Registered? <a className='underline cursor-pointer text-blue-500 font-semibold '  onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a></p>
        <Login/>
    </div>
  </div>
</div>

            
        </>
    );
};

export default Signup;