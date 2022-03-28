import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import "./ContentAddNewCars.css";
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"

export const ContentsAddNewCars = () => {
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
                    <Col md={12} className="form-add-new pt-3">
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                    Nama<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="name" placeholder="Placeholder" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                                <Form.Label column sm="2">
                                    Harga<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="price" placeholder="Placeholder" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formFileMultiple" className="mb-3">
                                <Form.Label column sm="2">
                                    Foto<span className="imp">*</span>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="file" multiple />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Start Rent
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Finish Rent
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Created at
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                                <Form.Label column sm="2">
                                    Updated at
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="-" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
