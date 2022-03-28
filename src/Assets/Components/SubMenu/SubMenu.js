import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./SubMenu.css";

export const SubMenu = ({ page }) => {

    if (page == "dashboard") {
        return (
            <div>
                <div className="m-0 p-0 side-menu">
                    <div className="p-3 sub-menu">
                        DASHBOARD
                    </div>
                    <div className="p-3 sub-sub-menu">
                        Dashboard
                    </div>
                </div>
            </div>
        )
    }

    if (page == "cars") {
        return (
            <div>
                <div className="m-0 p-0 side-menu">
                    <div className="p-3 sub-menu">
                        CARS
                    </div>
                    <div className="p-3 sub-sub-menu">
                        List Car
                    </div>
                </div>
            </div>
        )
    }

}
