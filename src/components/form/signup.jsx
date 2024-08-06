import {React,useState} from 'react'
import '../../css/form.css'
import Navbar from '../navbar'
import axios from 'axios'
const signup = () => {



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
    try {
      const response = await axios.post('http://localhost:3000/user/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
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
                        <input type="text" onChange={handleChange} name ="username" placeholder="username" value={formData.username} className="username input w-full" />
                        <input type='email' onChange={handleChange} name ="email" placeholder="Enter email" value={formData.email} className="username input w-full" />
                        <input type="password" onChange={handleChange} name = "password" placeholder="Password" value ={formData.password} className="password input w-full" />
                        <button className="btn font-[700]" type="submit">Create</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default signup