import React from "react";
import PropTypes from "prop-types";
import { Option, OptionProps, optionPropTypes } from "../Option/Option";

interface CustomOptionProps extends Omit<OptionProps, 'id'> {
  id?: string;
}

interface GroupOptionsProps {
  options: CustomOptionProps[];
  id: string;
  label?: string;
  title?: string;
}

export function GroupOptions(props: GroupOptionsProps) {
  return (
    <fieldset>
      {props.title && <legend>{props.title}</legend>}
      {props.label && <div className="field-row">{props.label}</div>}
      {props.options.map((option, key) => (
        <div className="field-row">
          <Option
            checked={option.checked}
            disabled={option.disabled}
            id={`${props.id}-${key}`}
            label={option.label}
            name={`${props.id}-${key}`}
            onChange={option.onChange}
          />
        </div>
      ))}
    </fieldset>
  );
}

GroupOptions.PropTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(optionPropTypes)).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
};
