import {createContext,useContext,useState} from 'react';
import axios from 'axios';
const AppContext = createContext(null)

export const AppProvider = ({children}) =>{


    // login 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [confirmPassword,setConfirmPassword]= useState('')
    const [username,setUsername] = useState('');

    const [privateData,setPrivateData] = useState('');

    const handleRegister  = (e,history)=>{
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        if(password !== confirmPassword){
            setPassword('')
            setConfirmPassword('')
            setTimeout(()=>{
                setError('')
            },5000);
            return setError("passwords does not match ..")
        }

            const handleAcync = async() =>{
                try{
            
            const { data } = await axios.post(
              "https://agile-fjord-24980.herokuapp.com/api/auth/register",
              { username, email, password },
              config
            );
            
            localStorage.setItem('authToken',data.token)
            setPrivateData(data.user)
            history.push('/dashboard')
                        }
                        catch(error){
                            setError(error.response.data.error);
                            setTimeout(()=>{
                                setError('')
                            },5000)
                        }

        }
        handleAcync();
     
    }


    const handleLogin  = (e,history)=>{
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const handleAcync = async() =>{
            try {
            const { data } = await axios.post(
              "https://agile-fjord-24980.herokuapp.com/api/auth/login",
              { email, password },
              config
            );
            
            localStorage.setItem('authToken',data.token)
            setPrivateData(data.user)
            console.log(data.user);
            history.push('/dashboard')
            }
            catch(error){
                setError(error.response.data.error);
            setTimeout(()=>{
                setError('')
            },5000)
            }
            
        }

        handleAcync();
        
    }
    
    

    return <AppContext.Provider value={{
        handleLogin,
        email,
        password,
        confirmPassword,
        username,
        error,
        privateData,
        setPrivateData,
        setEmail,
        setPassword,
        setError,
        handleRegister,
        setConfirmPassword,
        setUsername,
    }}>{children}</AppContext.Provider>
}

export const useUserContext = ()=>{
    return useContext(AppContext);
}