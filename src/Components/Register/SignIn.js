import React, { useState } from 'react'
import logo from '../../assets/Image/logo.jpg';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Footer from '../RoutesComponents/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/panelSlice';


const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            email: '',
            password: '',
        })
        // dispatch(signIn(formData))
        navigate('/admin/dashboard')
    };

    return (
        <>
            <div className="bg-[#eef0f9ec] min-h-[700px] h-screen">
                <div className="bg-[#eef0f9ec]  h-[96%]  flex justify-center items-center signInMain">
                    <div className=' w-[30%] max-xl:w-[58%] max-md:w-[90%] h-[540px] bg-white flex flex-col justify-start items-center gap-4'>
                        <img className='h-[150px] w-[150px]' src={logo} alt="" />
                        <form onSubmit={handleSubmit} className='w-full' >
                            <div className="flex justify-around flex-col px-10  signInForm flex-wrap gap-5 ">
                                <span className='mt-4' ><strong className='text-lg'>Hello! let's get started
                                    Sign in to continue.</strong>
                                    <p className='font-thin'>Sign in to continue.
                                    </p></span>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='E-mail'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border border-gray-300 rounded p-2 w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="border border-gray-300 rounded p-2 w-full"
                                        />
                                        <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </span>
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#4B49AC] hover:bg-[#3a3870]  text-white font-bold py-2 px-4 rounded mt-4">
                                    SIGN IN
                                </button>
                                {/* <a href='/' className='text-sm hover:underline self-end'>Forgot Password?</a> */}
                            </div>
                        </form>
                    </div>
                </div >
                <Footer />
            </div>
        </>
    )
}

export default SignIn
