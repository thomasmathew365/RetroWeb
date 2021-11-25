import React from "react";

interface ButtonProps {
  onClick?: () => void;
}

export function MinButton({ onClick }: ButtonProps) {
  return <button aria-label="Minimize" onClick={onClick}></button>;
}
export function MaxButton({ onClick }: ButtonProps) {
  return <button aria-label="Maximize" onClick={onClick}></button>;
}
export function CloseButton({ onClick }: ButtonProps) {
  return <button aria-label="Close" onClick={onClick}></button>;
}
export function HelpButton({ onClick }: ButtonProps) {
  return <button aria-label="Help" onClick={onClick}></button>;
}
