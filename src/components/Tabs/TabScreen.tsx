import React from "react";
import PropTypes from "prop-types";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

export function TabScreen(props: any) {
  return (
    <Tabs defaultSelected={2}>
      <TabList>
        {["Tab A", "Tab B", "Tab C"].map((text, key) => {
          return (
            <Tab key={key} keyValue={key + 1}>
              {text}
            </Tab>
          );
        })}
      </TabList>
      {[
        "This is Tab A Panel",
        "This is Tab B Panel",
        "This is Tab C Panel",
      ].map((text, key) => {
        return <TabPanel key={key} keyValue={key + 1}>{text}</TabPanel>;
      })}
    </Tabs>
  );
}
