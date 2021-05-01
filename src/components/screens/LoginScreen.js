import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import './LoginScreen.css';
import {useUserContext} from '../../UserContext';


const LoginScreen = ({history})=> {

    const {handleLogin,email,password,error,setEmail,setPassword} = useUserContext();

    

    useEffect(()=>{
        if(localStorage.getItem('authToken')) {
            history.push("/dashboard")
        }
    },[history])

    

    return (
        <div className='login-screen'>
            <form onSubmit={(e)=>handleLogin(e,history)} className='login-screen__form'>
                <h3 className='login-screen__title'>Login</h3>
                {error && <span className='error-message' >{error}</span>}
                <div className='form-group'>
                     <label htmlFor='email'>EMAIL </label>
                    <input type='email' required id='email' 
                    placeholder='Enter Email ..'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     />
                </div>
                <div className='form-group'>
                     <label htmlFor='password'>PASSWORD: </label>
                    <input type='password' required id='password' 
                    placeholder='Enter Password ..'
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>
                <button type='submit' className="btn btn-primary">Login</button>
                {/* <span className='register-screen__subtext'>Don't have an account ? <Link className='redirect-link' to='/register'>Register now</Link></span> */}
                <span className='register-screen__subtext'>Forgot password? <Link className='redirect-link' to='/forgotpassword'>Reset Password</Link></span>
            </form>
            
        </div>
    )
}

export default LoginScreen

