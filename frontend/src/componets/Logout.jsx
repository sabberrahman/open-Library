import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null}
            )
            localStorage.removeItem("user")
            toast.success("Logout succesfull")
            window.location.reload()
        } catch (error) {
            console.log("error in logout" + error);
        }
    }
    return (
        <div>
            <button className='btn b bg-violet-400 text-black px-3 py-2 rounded-md hover:bg-slate-500 duration-300 cursor-pointer' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;