import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Login() {

    const [username,setUsername]= useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit= (event)=> {
        event.preventDefault();
        fetch('http://3.248.195.118/validate',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'Email': username,'Password':password})
        }).then(()=>{console.log("done")})
    }

    return (

        <div className="Login">
            
            <form onSubmit = {handleSubmit} >
                <label>Username</label>
                <input type="text" name="username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Password</label>
                <input type="password" required name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" disabled={!validateForm()}>Login</button>

            </form>

        </div>

    );

}