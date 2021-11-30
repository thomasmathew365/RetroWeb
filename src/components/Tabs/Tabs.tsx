import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./Context.js";

interface ReactChildrenProp {
  children: React.ReactNode;
}

interface TabProps extends ReactChildrenProp {
  selected?: boolean;
  onClick?: () => void;
  keyValue: number;
}

interface TabsProps extends ReactChildrenProp{
  defaultSelected: number;
}

interface TabPanel extends ReactChildrenProp {
  keyValue: number;
}

export function Tabs(props: TabsProps) {
  const [context, setContext] = useState(props.defaultSelected);

  return (
    <Context.Provider value={[context, setContext]}>
      <section className="tabs">{props.children}</section>
    </Context.Provider>
  );
}

export function TabList(props: ReactChildrenProp) {
  return <menu role="tablist">{props.children}</menu>;
}

export function Tab(props: TabProps) {
  const [context, setContext] = useContext(Context);
  return (
    <button
      role="tab"
      aria-selected={props.keyValue === context}
      aria-controls={`tab-${props.keyValue}`}
      onClick={() => {
        props.onClick && props.onClick();
        setContext(props.keyValue);
      }}
    >
      {props.children}
    </button>
  );
}

export function TabPanel(props: TabPanel) {
  const [context, setContext] = useContext(Context);
  return (
    <article
      role="tabpanel"
      id={`tab-${props.keyValue}`}
      hidden={props.keyValue !== context ? true : undefined}
    >
      {props.children}
    </article>
  );
}

