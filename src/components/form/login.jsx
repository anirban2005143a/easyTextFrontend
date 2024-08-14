import { React, useState, useContext } from 'react'
import ProjectContext from '../../context/projectContext'
import '../../css/form.css'
import Navbar from '../navbar'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const login = () => {

  const value = useContext(ProjectContext)
  const navigate = useNavigate()

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
    const currentTarget = e.currentTarget
    currentTarget.querySelector('button').disabled = true
    currentTarget.querySelector('button').innerHTML = "Please wait"
    try {
      const response = await axios.post(`${value.backendURL}/user/login`, formData);
      console.log(response.data);
      currentTarget.querySelector('button').disabled = false
      currentTarget.querySelector('button').innerHTML = "Login"
      navigate('/')
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
          </form>
        </div>
      </div>
    </>
  )
}

export default login