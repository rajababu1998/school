import React, {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './common/DataApp'

const Login = () => {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const loginDetails = useContext(DataAppContext);
    console.log(loginDetails);

    const updateUserNameFn = (event) => {
        setUserName(event.target.value);
    }

    const loginFn = () => {
        // api call
        // if verified - update on context.

        loginDetails.setLogin(true);
        loginDetails.setUserName(userName);

        // redirecting
        navigate('/misc',{state:{userName:userName}});
    }
  return (
    <>
        <input type="text" onChange={updateUserNameFn} value={userName} placeholder='Enter User Name'/>
        <button onClick={loginFn}>Login</button>
    </>
  )
}

export default Login