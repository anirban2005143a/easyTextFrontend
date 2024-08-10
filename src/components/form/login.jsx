import { React, useState } from 'react'
import '../../css/form.css'
import Navbar from '../navbar'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const login = () => {



  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', formData);
      console.log(response.data);
      alert('logged in succesfully');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };


  return (
    <>
      <Navbar search={() => { }} />
      <div id='loginForm' className='my-16 py-6 bg-black'>
        <div className="formContainer">
          <form onSubmit={handleSubmit} className="form p-10 " action="">
            <p className="title font-[500]">Welcome</p>
            <input placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} className="username input w-full" />
            <input placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="password input w-full" type="password" />
            <button className="btn font-[700]" type="submit">Login</button>
            <div className="text-sm leading-5 pt-7">
              <Link
                to="/forgot"
                className="font-medium text-base text-indigo-200  hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default login