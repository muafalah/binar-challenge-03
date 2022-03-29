import React from 'react'
import "./Cars.css";
import { Sidebar } from "../../Assets/Components/Sidebar/Sidebar";
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SubMenu } from "../../Assets/Components/SubMenu/SubMenu";
import { ContentCars } from '../Content/ContentCars';
import { ContentsAddNewCars } from '../Content/ContentsAddNewCars';
import { ContentEditCars } from '../Content/ContentEditCars';
import { ContentCarsSuccess } from '../Content/ContentCarsSuccess';
import { ContentCarsDelete } from '../Content/ContentCarsDelete';

export const Cars = ({ page }) => {

  const pageCars = () => {
    if (page == "list cars") {
      return <ContentCars />
    }

    if (page == "add new cars") {
      return <ContentsAddNewCars />
    }

    if (page == "edit cars") {
      return <ContentEditCars />
    }

    if (page == "success cars") {
      return <ContentCarsSuccess />
    }

    if (page == "delete cars") {
      return <ContentCarsDelete />
    }

  }

  return (
    <div className="d-flex box-cars">
      <div className="sidebar-cars">
        <Sidebar />
      </div>
      <div className="content-cars">
        <div>
          <div className="col-md-12">
            <NavbarDefault />
          </div>
          <div className="col-md-12">
            <div className="d-flex">
              <div className="col-md-2 sub-menu-cars">
                <SubMenu page={"cars"} />
              </div>
              <div className="col-md-10 p-4">
                {pageCars()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
