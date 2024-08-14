import { React, useState, useContext } from 'react'
import ProjectContext from '../../context/projectContext'
import { useNavigate } from 'react-router-dom'
import '../../css/form.css'
import Navbar from '../navbar'
import axios from 'axios'
const signup = () => {

  const value = useContext(ProjectContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget
    currentTarget.querySelector('button').disabled = true
    currentTarget.querySelector('button').innerHTML = "Creating"
    try {
      const response = await axios.post(`${value.backendURL}/user/register`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      currentTarget.querySelector('button').disabled = false
      currentTarget.querySelector('button').innerHTML = "Create"
      navigate('/')
      alert('user registered succesfully')
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <Navbar search={() => { }} />
      <div id='signupForm' className='my-16 py-6 bg-black'>
        <div className="formContainer">
          <form onSubmit={handleSubmit} className="form p-10 " action="">
            <p className="title font-[500]">Create Account</p>
            <input type="text" onChange={handleChange} name="username" placeholder="Username" value={formData.username} className="username input w-full" />
            <input type='email' onChange={handleChange} name="email" placeholder="Enter email" value={formData.email} className="username input w-full" />
            <input type="password" onChange={handleChange} name="password" placeholder="Password" value={formData.password} className="password input w-full" />
            <button className="btn font-[700]" type="submit">Create</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default signup