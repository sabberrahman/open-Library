import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data);
    const dataInfo = {
      email:data.email ,
      password:data.password
    }
    await axios.post('https://openapi-94bu.onrender.com/user/login', dataInfo).then((res=>{
      console.log(res);
      console.log(res.data);
      if (res) {
        toast.success('Login Successfull');
        document.getElementById('my_modal_3').close();
        window.location.reload();
        window.location.href = '/';
      } 
      localStorage.setItem('user', JSON.stringify(res.data.user))
      console.log(res.data);
    })).catch((err)=>{
      console.log(err);
       if (err.response) {
        console.log(err);
      toast.error("error: "+ err.response.data);
       }
    })
      }
    return (
        <>
            <dialog id="my_modal_3" className="modal" >
  <div className="modal-box dark:text-white min-h-10">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
    <div>
    <label class="input input-bordered flex items-center gap-2 mt-4 mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" class="grow" placeholder="Email" 
  {...register("email", { required: true })} /> <br />
  {errors.email && <span className='text-sm text-red-600 '>This field is required</span>}
</label>
<label class="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="password" class="grow outline-none" placeholder="Password" 
  {...register("password", { required: true })}/> <br />
  {errors.password && <span className='text-sm text-red-600 '>This field is required</span>}
</label> 
    </div>

    <div className='flex justify-evenly mt-6 '>
        <form onSubmit={handleSubmit(onSubmit)}><button className='bg-indigo-500 shadow-lg shadow-indigo-500/50 btn text-white ' >Login</button></form>
        
        <p className=' m-2'>Not Registered? <Link to={"/signup"} className='underline cursor-pointer text-blue-500 '>SignUp</Link></p>
    </div>
  </div>
</dialog>
        </>
    );
};

export default Login;