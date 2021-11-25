import React from "react";
import PropTypes from "prop-types";
import checkUndefined from "../../utils/undefinedCheck";

interface OptionProps {
  id: string;
  label: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: () => void;
}



export function Option(props: OptionProps) {
    console.log(checkUndefined(props.checked));
    
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

Option.PropTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Option.defaultProps = {
  onClick: undefined,
  disabled: false,
  checked: false,
};
