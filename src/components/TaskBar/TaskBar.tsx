import React from "react";
import PropTypes from "prop-types";
import checkUndefined from "../../utils/undefinedCheck";
import './TaskBar.css';

export function TaskBar(props: any) {
  return (
    <div className="taskbar">
      <div className="main-section">
        {/* <input id="start-menu-active" type="checkbox" defaultChecked /> */}
        <label className="start-button" htmlFor="start-menu-active">
          start
        </label>
        <div className="task-button-container">
          {props.children}
        </div>
      </div>
    </div>
  );
}



