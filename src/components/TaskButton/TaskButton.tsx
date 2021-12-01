import React from "react";
import PropTypes from "prop-types";
import checkUndefined from "../../utils/undefinedCheck";
import "./TaskButton.css";

export function TaskButton(props: any) {
  return <div className="taskbar-button">{props.text}</div>;
}
