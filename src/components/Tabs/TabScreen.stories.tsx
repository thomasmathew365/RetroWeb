import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel, TabScreen, MOCK_TABS } from "./Tabs";

export default {
  title: "Retro Web /XP/Tabs/Tab Screen",
  component: TabScreen,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof TabScreen>;

const Template: ComponentStory<typeof TabScreen> = (args) => (
  <Tabs defaultSelected={2} {...args}>
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

const defaultArgs = {};

export const Default = Template.bind({});
Default.args = defaultArgs;
