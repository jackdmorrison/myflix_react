import React, { useState } from "react";


export default function Login() {

    const [username,setUsername]= useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

    }

    return (

        <div className="Login">

            <form onSubmit={handleSubmit}>


                <label>Username</label>

                <control autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />


                <label>Password</label>

                <control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button form type="submit" disabled={!validateForm()}>

                Login

            </button>

            </form>

        </div>

    );

}