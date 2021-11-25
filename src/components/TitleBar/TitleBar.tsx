import React from "react";
import PropTypes from "prop-types";
import {
  MinButton,
  MaxButton,
  CloseButton,
  HelpButton,
} from "../TitleButtons/TitleButtons";

interface TitleBarProps {
  text?: string;
  buttonsList?: {
    type: string;
    onClick?: () => void;
  }[];
}

const BUTTON_MAP = {
  min: (onClick) => <MinButton onClick={onClick} />,
  max: (onClick) => <MaxButton onClick={onClick} />,
  close: (onClick) => <CloseButton onClick={onClick} />,
  help: (onClick) => <HelpButton onClick={onClick} />,
};

export function TitleBar(props: TitleBarProps) {
  return (
    <div className="title-bar">
      {props.text && <div className="title-bar-text">{props.text}</div>}
      {props.buttonsList && props.buttonsList.length && (
        <div className="title-bar-controls">
          {props.buttonsList.map((button, key) => (
            <span key={key}>{BUTTON_MAP[button.type](button.onClick)} </span>
          ))}
        </div>
      )}
    </div>
  );
}

TitleBar.PropTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
