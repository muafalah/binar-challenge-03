import React from 'react'
import { Col, DropdownButton, InputGroup, Pagination, Row, Table, Dropdown, Button } from 'react-bootstrap';

export const TableListCar = ({ data }) => {
    return (
        <div>
            <Table hover>
                <thead className="thead-css text-center">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Start Rent</th>
                        <th>Finish Rent</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                    </tr>
                </thead>
                <tbody className="tbody-css text-center">
                    {
                        data.map((listcar) => {
                            return (
                                <tr>
                                    <td>{listcar.id}</td>
                                    <td>{listcar.name}</td>
                                    <td>{listcar.category}</td>
                                    <td>{listcar.price}</td>
                                    <td>{listcar.startRent}</td>
                                    <td>{listcar.finishRent}</td>
                                    <td>{listcar.createdAt}</td>
                                    <td>{listcar.updatedAt}</td>
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
        </div>
    )
}
