import React from 'react'
import "./Sidebar.css";
import LogoDashboard from "../../Img/logo-dashboard.png"
import IconDashboard from "../../Img/icon-dashboard.png"
import IconCars from "../../Img/icon-cars.png"
import { Row, Col } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <div>
      <Row className="sidebar-box">
        <Col md={12} className="text-center pt-md-3 pb-md-3">
          <img src={LogoDashboard} />
        </Col>
        <Col md={12}>
          <a href="/dashboard" >
            <Row className="text-center pt-md-3 pb-md-3">
              <Col md={12} className="mb-md-2">
                <img src={IconDashboard} />
              </Col>
              <Col md={12} className="font-sidebar">
                Dashboard
              </Col>
            </Row>
          </a>
        </Col>
        <Col md={12}>
          <a href="/cars">
            <Row className="text-center pt-md-3 pb-md-3">
              <Col md={12} className="mb-md-2">
                <img src={IconCars} />
              </Col>
              <Col md={12} className="font-sidebar">
                Cars
              </Col>
            </Row>
          </a>
        </Col>
      </Row >
    </div >
  )
}
