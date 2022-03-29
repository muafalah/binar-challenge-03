import React, { useState } from 'react'
import { Col, Container, Pagination, Row, Table } from 'react-bootstrap'
import { TableListCar } from '../../Assets/Components/TableList/TableListCar';
import { TableListOrder } from '../../Assets/Components/TableList/TableListOrder';
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"
import "./ContentDashboard.css";

export const ContentDashboard = () => {

    const [listOrder, setListOrder] = useState([
        {
            id: 1,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 2,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 3,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 4,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 5,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 6,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 7,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 8,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 9,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
        {
            id: 10,
            userEmail: "User Email",
            car: "Car",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            price: "Price",
            status: "Status"
        },
    ])

    const [listCar, setListCar] = useState([
        {
            id: 1,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "-",
            finishRent: "-",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 2,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 3,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 4,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 5,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "-",
            finishRent: "-",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 6,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 7,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 8,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 9,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
        {
            id: 10,
            name: "Name",
            category: "Category",
            price: "Price",
            startRent: "Start Rent",
            finishRent: "Finish Rent",
            createdAt: "Created at",
            updatedAt: "Updated at"
        },
    ])

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

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
                        <Row className="pb-4">
                            <Col md={12} className="mb-md-3">
                                <div className="sub-title">List Order</div>
                            </Col>
                            <Col md={12}>
                                <TableListOrder data={listOrder} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="ps-0 pe-0">
                        <Row className="pb-4">
                            <Col md={12} className="mb-md-3">
                                <div className="sub-title">List Car</div>
                            </Col>
                            <Col md={12}>
                                <TableListCar data={listCar} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
