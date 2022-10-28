import React, {useState} from 'react'
import './Login.css'
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setEmail("");
        setPassword("");
    }

  return (
    <div className='content'>
        <form onSubmit={handleSubmit} className='main_form'>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Login