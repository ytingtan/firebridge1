import { Form, Button } from "react-bootstrap";

function SignUp() {
    return (
        <div class="container">
        <div id="signup" class="row my-5">
        <h2 class="mt-5"> Sign Up for a FireBridge account. </h2>
            <Form>
            <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group controlId="username">
                <Form.Label>Your BBO User ID</Form.Label>
                <Form.Control type="username" placeholder="johndoe" />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit">Login</Button>
            </Form>
        </div>
        </div>
    );
}

export default SignUp;