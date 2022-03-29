import React from 'react'
import "./TableListOrder.css";
import { Col, DropdownButton, Pagination, Row, Table, Dropdown, Button, InputGroup } from 'react-bootstrap';

export const TableListOrder = ({ data }) => {
    return (
        <div>
            <Table hover>
                <thead className="thead-css text-center">
                    <tr>
                        <th>No</th>
                        <th>User Email</th>
                        <th>Car</th>
                        <th>Start Rent</th>
                        <th>Finish Rent</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="tbody-css text-center">
                    {
                        data.map((listorder) => {
                            return (
                                <tr>
                                    <td>{listorder.id}</td>
                                    <td>{listorder.userEmail}</td>
                                    <td>{listorder.car}</td>
                                    <td>{listorder.startRent}</td>
                                    <td>{listorder.finishRent}</td>
                                    <td>{listorder.price}</td>
                                    <td>{listorder.status}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <Row>
                <Col md={1}>
                    <div>Limit</div>
                    <DropdownButton
                        variant="outline-secondary"
                        title="10"
                        id="input-group-dropdown-1"
                        className="dropdown-limit"
                    >
                        <Dropdown.Item href="/dashboard">1</Dropdown.Item>
                        <Dropdown.Item href="/dashboard">2</Dropdown.Item>
                        <Dropdown.Item href="/dashboard">3</Dropdown.Item>
                        <Dropdown.Item href="/dashboard">4</Dropdown.Item>
                        <Dropdown.Item href="/dashboard">5</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col md={7}>
                    <div>Jump to page</div>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title="1"
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="/dashboard">1</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">2</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">3</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">4</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">5</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">6</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">7</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">8</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">9</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">10</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="primary">Go</Button>
                    </InputGroup>
                </Col>
                <Col md={4} className="d-flex justify-content-end my-auto">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{9}</Pagination.Item>
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </div >
    )
}
