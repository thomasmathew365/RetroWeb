import React from "react";
import PropTypes from "prop-types";
import checkUndefined from "../../utils/undefinedCheck";
export interface OptionProps {
  id: string;
  label: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}

export function Option(props: OptionProps) {
    
  return (
    <>
      <input
        type="radio"
        id={checkUndefined(props.id)}
        name={checkUndefined(props.name)}
        checked={checkUndefined(props.checked)}
        disabled={checkUndefined(props.disabled)}
        onChange={checkUndefined(props.onChange)}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </>
  );
}

export const optionPropTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Option.PropTypes = optionPropTypes;

Option.defaultProps = {
  onClick: undefined,
  disabled: false,
  checked: false,
};
