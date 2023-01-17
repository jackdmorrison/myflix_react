import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useNavigate} from 'react-router-dom';
export default function Signup() {
    
    const [username,setUsername]= useState("");
    const [password, setPassword] = useState("");
    const [auth_token, setAuthToken] = useState({});
    
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    const handleSubmit= async (event)=> {
        event.preventDefault();
        await fetch('http://54.170.146.114/add',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'Email': username,'Password':password})
        }).then(response => response.json())
        .then(data =>setAuthToken(data) );
        if(auth_token!=null){
            localStorage.setItem('user', JSON.stringify(auth_token.auth_token));
        }
        if(JSON.parse(localStorage.getItem('user')).valid==="Yes"){
            
            window.location.href='/';
            
            
        }
        console.log(JSON.parse(localStorage.getItem('user')));
        //console.log(auth_token);
    }

    return (

        <div className="Signup">
            <main className="form-signin m-auto vertical-center container-fluid">
                <div className="container w-100 container-fluid ">
                    <div className="row col-5 align-self-center">
                        <form onSubmit = {handleSubmit} >
                            <div className="form-floating container">
                                <div className="row">
                                <div className="col-sm"><label>Username:</label></div>
                                <div className="col-sm"><input type="text" name="username" required value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
                                </div>
                            </div>
                            <div className="form-floating container">
                                <div className="row">
                                <div className="col-sm"><label>Password</label></div>
                                <div className="col-sm"><input type="password" required name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
                                </div>
                            </div>
                            <div className="form-floating container"><button type="submit" disabled={!validateForm()}>Sign up</button></div>
                            
                        </form>
                    </div>
                </div>
            </main>
        </div>

    );

}