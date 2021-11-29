import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TabScreen } from "./TabScreen";

export default {
  title: "Retro Web /XP/Tabs/Tab Screen",
  component: TabScreen,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof TabScreen>;

const Template: ComponentStory<typeof TabScreen> = (args) => <TabScreen {...args} />;

const defaultArgs = { };

export const Default = Template.bind({});
Default.args = defaultArgs;