import React, {useState} from 'react'

const Signup = () => {
  const [formStatus, setFormStatus] = useState(false);
    const initialValues = {username : '', email : '', password : '', number : '', address : ''}
    const [formData,setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});


    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        console.log(event.target.name);
        setFormData({...formData,[event.target.name] : event.target.value})
        // ...formData : it means we are getting old value present in form data.
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        // console.log('FormData', username, email, password);
        console.log('FormData Submitted...', formData);
        const errorRet = validateForm(formData);
        setFormErrors(errorRet);
        if(Object.keys(errorRet).length == 0) {
            setFormStatus(true);

            setFormData(initialValues);
        }
        
    }

    

    const validateForm = (form_Data) => {
        let error = {};
        if(!formData.username) {   // username is blank
            error.username = 'please enter your username...'
        }
        if(!formData.email) {    // email is blank
            error.email = 'please enter your email...'
        }
        if(!formData.password) {    // password is blank
            error.password = 'please enter your password...'
        }
        // regex
        if(formData.password.length < 8) {    
            error.password = 'please enter atleast 8 character...'
        }
        if(!formData.username.match(/[A-Za-z]/)) {   
            error.username = 'please enter non-digit character...'
        }
        if(formData.number.length < 10) {    
            error.number = 'please enter 10 digit number'
        }
        return error;
    };

  return (
    <>
        <h2 className='text-center'>Registration Form</h2>
            <br></br>
            <form>
                Name:
                <input type="text" name='username' onChange = {handleChange} value={formData.username}/>
                <div className='text-danger'>{formErrors.username}</div>
                <br></br>
                Email:
                <input type="email" name='email' onChange = {handleChange} value={formData.email}/>
                <div className='text-danger'>{formErrors.email}</div>
                <br></br>
                Password:
                <input type="password" name='password' onChange = {handleChange} value={formData.password}/>
                <div className='text-danger'>{formErrors.password}</div>
                <br></br>
                Mobile Number:
                <input type="number" name='number' onChange = {handleChange} value={formData.number}/>
                <div className='text-danger'>{formErrors.number}</div>
                <br></br>
                Address:
                <input type="text" name='address' onChange = {handleChange} value={formData.address}/>
                <div className='text-danger'>{formErrors.address}</div>
                <br></br>
                <button type = "submit" onClick={handleSubmit}>Register</button>
                <br></br>
            </form>
            <br></br>
            {formStatus && <div>Form Successfully Submited</div>}
    </>
  )
}

export default Signup