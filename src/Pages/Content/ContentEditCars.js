import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import "./ContentEditCars.css";
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"

export const ContentEditCars = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="breadcrumb-content mt-3 mb-3">
                        <b>Cars</b> <img src={IconBreadcrumb} /> <b>List Cars</b> <img src={IconBreadcrumb} /> Add New Cars
                    </Col>
                    <Col md={12} className="title-content mb-3">
                        Add New Cars
                    </Col>
                    <Col md={12} className="form-add-new ">
                        <Form className="pt-4 ps-3 pe-3">
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                    Nama<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="name" placeholder="Placeholder" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                                <Form.Label column sm="2">
                                    Harga<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="price" placeholder="Placeholder" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formFileMultiple" className="mb-3">
                                <Form.Label column sm="2">
                                    Foto<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="file" className="form-add-new-cars" multiple />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Start Rent
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Finish Rent
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Created at
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Updated at
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" className="form-add-new-cars" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={12} className="mt-5">
                        <a href="/cars"><Button variant="outline-primary" type="cancel" className="me-2">
                            Cancel
                        </Button></a>
                        <a href="/cars/success"><Button variant="primary" type="submit">
                            Save
                        </Button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
