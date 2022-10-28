import React, { useState } from 'react'
import { api } from './../api/api'
import './Signup.css'
function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let content = {
            email: email,
            password: password,
            name: name,
            address: address,
            phone: phone
        }
        setEmail("");
        setPassword("");
        setName("");
        setAddress("");
        setPhone("");
    }

    return (
        < div className='Signup'>
            <div className='content1'>
                <form onSubmit={handleSubmit} className='main_form'>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                    <input type="text" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} required />
                    <input type="text" placeholder="Phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div >
    )
}

export default Signup