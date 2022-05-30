import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";


function LogIn() {
    const { signInWithGoogle } = useAuth();
    return (
        <div class="container">
        <div id="login" class="row my-5">
        <h2 class="mt-5"> Log in to your FireBridge account. </h2>
        
        <Form>
        {/* 
            <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        */}
            <Button onClick={signInWithGoogle}>Login with Google</Button>
        </Form>
		</div>
        </div>          
        
    );
}

export default LogIn;