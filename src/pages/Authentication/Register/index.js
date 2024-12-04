import React, { useState } from 'react';
import { Form, Typography, Row, Col, Input, Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'config/firebase';

const { Title } = Typography;

const initialState = { firstName: "", lastName: "", email: "", Password: "", confirmPassword: "" };

const Register = () => {
    const [state, setState] = useState(initialState);

    const handleSubmit = () => {
        let { firstName, lastName, email, Password, confirmPassword } = state;

        firstName = firstName.trim();

        if (firstName.length < 3) {
            return window.notify("Please Enter Your Name Correctly", "error");
        }

        if (lastName.length < 3) {
            return window.notify("Please Enter Your Last Name Correctly", "error");
        }

        if (!email) {
            return window.notify("Please Enter Your Email Correctly", "error");
        }

        if (Password.length < 5 || !Password) {
            return window.notify("Please Enter Your Password Correctly", "error");
        }

        if (confirmPassword !== Password) {
            return window.notify("Password Does Not Match", "error");
        }

        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                // const user = userCredential.user;
                return window.notify("User Profile Created Successfully", "success");
            })
            .catch((error) => {
                return window.notify(error.message, "error");
            })
            .finally(() => { });
    };

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    return (
        <main className='register p-md-4'>
            <div className="card p-md-4">
                <Title className='text-center text-white'>Register</Title>
                <Form layout='vertical'>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="First Name" required>
                                <Input size='large' type='text' placeholder='Enter Your First Name' name='firstName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Last Name" required>
                                <Input size='large' type='text' placeholder='Enter Your Last Name' name='lastName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Enter Your Email" required>
                                <Input size='large' type='email' placeholder='Enter Your Email' name='email' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Enter Your Password" required>
                                <Input.Password size='large' placeholder='Enter Your Password' name='Password' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Enter Your Password Again" required>
                                <Input.Password size='large' placeholder='Confirm Your Password' name='confirmPassword' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Col span={24}>
                        <Form.Item>
                            <Button type='primary' block htmlType='submit' onClick={handleSubmit}>Register</Button>
                        </Form.Item>
                    </Col>

                    <Row style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col>
                            <Form.Item>
                                <Link to="/register" className='text-light'>Forget Password</Link>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item>
                                <Link to="/authentication/login" className='text-light'>Login Account</Link>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify="center" className="d-flex">
                        <Col className="responsive-col">
                            <Link to="/" className="text-light">
                                <FontAwesomeIcon icon={faGoogle} size="2x" />
                            </Link>
                            <Link to="/" className="text-light ps-4">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </Link>
                            <Link to="/" className="text-light ps-4">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </Link>
                            <Link to="/" className="text-light ps-4">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </Link>
                            <Link to="/" className="text-light ps-4">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main>
    );
};

export default Register;
