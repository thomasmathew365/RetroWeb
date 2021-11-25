import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
      <button disabled={props.disabled}>{props.label}</button>
  );
}

Button.PropTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
  disabled: false
};
