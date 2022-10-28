import React, { useState } from 'react'
import './Login.css'
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div className='content'>
      <div className='content1'>
        <form onSubmit={handleSubmit} className='main_form'>
          <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Login