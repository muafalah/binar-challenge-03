import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import Logo from "../../Assets/Img/logo.png"
import ImageSignIn from "../../Assets/Img/image-signin.png"

export const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertStatus, setAlertStatus] = useState(false)

    let Navigate = useNavigate()

    const changeEmail =(e)=> {
        setEmail(e.target.value);
    }

    const changePassword =(e)=> {
        setPassword(e.target.value);
    }

    const validation =()=> {
        let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (regexEmail.test(email) && regexPassword.test(password)) {
            return Navigate("../dashboard", {replace:true})
        } else {
            return setAlertStatus(true)
        }
    }

  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={7} className="image-signin">
                    
                </Col>
                <Col md={5} className="box-signin">
                    <Row className="ms-md-5 me-md-5 form-signin d-flex align-content-center">
                        <Col md={12}>
                            <img src={Logo} className="mb-4" />
                        </Col>
                        <Col md={12}>
                            <h2 className="mb-4">Welcome, Admin BCR</h2>
                        </Col>
                        {alertStatus? <Col md={12}>
                            <Alert variant="danger">
                                <p className="mb-0">
                                Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                                </p>
                            </Alert>
                        </Col> : null}
                        <Col md={12}>
                            <Form className="d-grid gap-2">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" onChange={changeEmail}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="6+ karakter" onChange={changePassword}/>
                                </Form.Group>
                                <Button variant="primary" onClick={validation}>
                                    Sign In
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
