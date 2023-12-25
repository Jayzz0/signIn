
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '../config/firebaseConfig';  // นำ auth เข้ามา
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  // Import useNavigate มา
import { useAuth } from '../auth/AuthContext';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();  // สร้าง navigate function
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            alert('Login successful!');
            login(user);
            navigate('/home');
        } catch (error) {
            alert('Login failed', error.message);
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert('Login with Google successful!');
            login(user);
            navigate('/home');
        } catch (error) {
            alert('Login with Google failed', error.message);
        }
    };

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert('Login with Facebook successful!');
            login(user);
            navigate('/home');
        } catch (error) {
            alert('Login with Facebook failed', error.message);
        }
    };

    return (
        <Container className="login-container">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form >
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleLogin} className="login-button">
                            Login
                        </Button>
                        <br />
                        <Button variant="danger" type="button" className="google-login-button" onClick={signInWithGoogle}>
                            <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                            Login with Google
                        </Button>
                        <br />
                        <Button variant="info" type="button" className="facebook-login-button" onClick={signInWithFacebook}>
                            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
                            Login with Facebook
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
