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
            <form >
                <label>Username</label>
                <input type="text" name="username"/>


                <label>Password</label>
                <input type="text" name="password"/>
            <div></div>
            <button form type="submit" disabled={!validateForm()}>Login</button>

            </form>

        </div>

    );

}