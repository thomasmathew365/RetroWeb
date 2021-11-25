import React from "react";
import PropTypes from "prop-types";

interface CheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div>
      <input
        type="checkbox"
        id="example1"
        checked={props.checked !== undefined ? props.checked : undefined}
        disabled={props.disabled !== undefined ? props.disabled : undefined}
      />
      <label htmlFor="example1">This is a checkbox</label>
    </div>
  );
}

Checkbox.PropTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  primary: false,
  onClick: undefined,
  disabled: false,
};
