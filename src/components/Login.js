import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email: email,
            password: password,
            loggedIn: true
        }))
    }
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <h1>True VROOM</h1>
                        <div>Sign in to Webbi na Admin Console</div>
                        <span>ก้าวสู่โลกใหม่ของชีวิต พร้อมทำงาน พร้อมเรียนรู้ พร้อมชีวิตคุณภาพ ได้ทุกที่ ทุกเวลา</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form md={12} onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="mt-2 button-submit" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login