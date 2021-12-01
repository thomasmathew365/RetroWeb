import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

const MOCK_TABS = ["Tab A", "Tab B", "Tab C"];

export function TabScreen(props: any) {
  return (
    <Tabs defaultSelected={2}>
      <TabList>
        {MOCK_TABS.map((text, key) => {
          return (
            <Tab key={key} keyValue={key + 1}>
              {text}
            </Tab>
          );
        })}
      </TabList>
      {MOCK_TABS.map((text, key) => {
        return (
          <TabPanel
            key={key}
            keyValue={key + 1}
          >{`This is ${text} Panel.`}</TabPanel>
        );
      })}
    </Tabs>
  );
}
