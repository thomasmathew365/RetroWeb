import React from "react";
import PropTypes from "prop-types";
import checkUndefined from "../../utils/undefinedCheck";

interface TextboxProps {
  text?: string;
  label?: string;
  stacked?: boolean;
  id?: string;
  rows?: number;
}

export function Textbox(props: TextboxProps) {
  const { text, label, stacked, id, rows } = props;
  return (
    <div className={stacked ? "field-row-stacked" : "field-row"}>
      <label htmlFor={checkUndefined(id)}>{checkUndefined(label)}</label>
      {rows ? (
        <textarea id={checkUndefined(id)} rows={rows}></textarea>
      ) : (
        <input
          id={checkUndefined(id)}
          type="text"
          value={checkUndefined(text)}
        />
      )}
    </div>
  );
}

Textbox.PropTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  stacked: PropTypes.bool,
  id: PropTypes.string,
};
