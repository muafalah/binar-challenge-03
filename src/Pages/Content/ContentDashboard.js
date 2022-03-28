import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"
import "./ContentDashboard.css";

export const ContentDashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="breadcrumb-content mt-3 mb-3">
                        <b>Dashboard</b> <img src={IconBreadcrumb} /> Dashboard
                    </Col>
                    <Col md={12} className="title-content mb-3">
                        Dashboard
                    </Col>
                    <Col md={12} className="ps-0 pe-0">
                        <Row>
                            <Col md={12} className="mb-md-3">
                                <div className="sub-title">List Order</div>
                            </Col>
                            <Col md={12}>
                                <Table striped bordered hover variant="light">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
