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

            <Form onSubmit={handleSubmit}>

            <Form.Group controlId="Username">

                <Form.Label>Username</Form.Label>

                <Form.Control autoFocus type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            </Form.Group>

            <Form.Group  controlId="password">

                <Form.Label>Password</Form.Label>

                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            </Form.Group>

            <Button form type="submit" disabled={!validateForm()}>

                Login

            </Button>

            </Form>

        </div>

    );

}