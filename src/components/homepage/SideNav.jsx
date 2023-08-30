import React from 'react';
import "./SideNav.css";

function SideNav({ onDashboardClick, onAddProjectClick}) {

  return (
    <>
      <div className="side-nav-container">
        <div className="user-image">
          <img src="./Frame 33.png" alt="" />
          <h4>Hey Kehinde</h4>
        </div>
        <div className="side-nav-icon">
          <span className="dashboard-icon" onClick={onDashboardClick}>
            <box-icon type="solid" name="dashboard"></box-icon>
            Dashboard
          </span>

          <span className="project-icon" onClick={onAddProjectClick}>
            <box-icon name="plus"></box-icon>
            Add Project
          </span>
        </div>
      </div>
    </>
  );
}

export default SideNav
