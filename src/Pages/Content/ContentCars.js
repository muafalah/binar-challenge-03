import React from 'react'
import "./ContentCars.css";
import { Col, Container, Row, Button } from 'react-bootstrap'
import IconAddNewCars from "../../Assets/Img/icon-addnew-car.png"
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"
import { CardCars } from '../../Assets/Components/CardCars.js/CardCars';

export const ContentCars = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="breadcrumb-content mt-3 mb-3">
                        <b>Cars</b> <img src={IconBreadcrumb} /> List Cars
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={9} className="title-content mb-3">
                                List Cars
                            </Col>
                            <Col md={3} className="btn-cars">
                                <a href="/cars/add"><Button variant="primary"><img src={IconAddNewCars} /> Add New Car</Button></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="ps-0 pe-0">
                        <Row>
                            <Col md={12} className="mb-md-3">

                            </Col>
                            <Col md={12}>
                                <Row className="mt-2 mb-3">
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                </Row>
                                <Row className="mt-2 mb-3">
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                </Row>
                                <Row className="mt-2 mb-3">
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
