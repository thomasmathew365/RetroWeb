import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleBar, WindowBody } from "./TitleBar";

export default {
  title: "Retro Web /XP/Window/Window",
  component: TitleBar,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <div className="window" style={{ width: "300px" }}>
    <TitleBar {...args} />
    <WindowBody>
      <p>There's so much room for activities!</p>
    </WindowBody>
  </div>
);

const defaultArgs = {};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  text: 'New Window ',
  buttonsList: [
    {
      type: "min",
      onClick: () => console.warn("Minimize"),
    },
    {
      type: "max",
      onClick: () => console.warn("Maximize"),
    },
    {
      type: "close",
      onClick: () => console.warn("Close"),
    },
  ],
};
