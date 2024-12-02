import React, { useState } from 'react';
import { Form, Typography, Row, Col, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const initialState = { email: "", Password: "" };

const Login = () => {
    const [state, setState] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        let { email, Password } = state;

        if (!email) {
            return window.notify("Please Enter Your Email Correctly", "error");
        }

        if (!Password || Password.length < 5) {
            return window.notify("Please Enter Your Password Correctly", "error");
        }

        window.notify("User Profile Created Successfully", "success");
    };

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }));
    };

    return (
        <main className='login p-3 p-md-4'>
            <div className="card p-3 p-md-4">
                <Title className='text-center mb-5 text-white'>Login</Title>
                <Form layout='vertical'>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Enter Your Email" required>
                                <Input
                                    size='large'
                                    type='email'
                                    placeholder='Enter Your Email'
                                    name='email'
                                    onChange={handleChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Enter Your Password" required>
                                <Input.Password
                                    size='large'
                                    placeholder='Enter Your Password'
                                    name='Password'
                                    onChange={handleChange}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>

                        <Col span={24}>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    block
                                    htmlType='submit'
                                    onClick={handleSubmit}
                                >
                                    Login
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{display:"flex",justifyContent:"space-between"}}>

                        <Col >
                            <Form.Item >
                                <Link to="/register" type='primary ' size="large" className='text-light'>Forget Password
                                </Link>
                              
                            </Form.Item>
                        </Col>
                        <Col >
                            <Form.Item >
                            <Link to="/authentication/register" type='primary ' size="large" className='text-light'>Register Account
                            </Link>
                            </Form.Item>
                        </Col>

                       
                    </Row>

                    <Row justify="center">
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

export default Login;
