import {useState} from 'react';
import axios from 'axios';
import './ForgotPasswordScreen.css';
import './RegisterScreen.css'


const ForgotPasswordScreen = ()=> {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');


    const handleForgotPassword = (e)=>{
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const handleAcync = async() =>{
            const {data} = await axios.post('/api/auth/forgotpassword',{email},config)

            setSuccess(data.data)
        }
        try {
            handleAcync();
        } catch (error) {
            setError(error.response.data.error);
            setEmail('')
            setTimeout(()=>{
                setError('')
            },5000)
            
        }
    }

    return (
        <div className='forgotpassword-screen'>
            <form onSubmit={handleForgotPassword} className='forgotpassword-screen__form'>
                <h3 className='forgotpassword-screen__title'>Forgot Password</h3>
                {error && <span className='error-message' >{error}</span>}
                {success && <span className='success-message' >{success}</span>}
                <div className='form-group'>
                    <p className='forgotpassword-screen__subtext'>
                        Please enter the email you registered with, 
                        we will send you a resetpassword confirmation to this email
                    </p>
                     <label htmlFor='email'>Email </label>
                    <input type='email' required id='email' 
                    placeholder='Enter Email ..'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     />
                </div>
                <button type='submit' className="btn btn-primary">Send email</button>
            </form>
            
        </div>
    )
}

export default ForgotPasswordScreen

