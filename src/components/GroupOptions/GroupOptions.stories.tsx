import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupOptions } from "./GroupOptions";

export default {
  title: "Retro Web /XP/GroupOptions",
  component: GroupOptions,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof GroupOptions>;

const Template: ComponentStory<typeof GroupOptions> = (args) => (
  <GroupOptions {...args} />
);

const defaultArgs = {
  options: [
    { label: "Chunky-Monkey", checked: true, disabled: false },
    { label: "Cookies and Cream", checked: false, disabled: false },
    { label: "Strawberry CheeseCake", checked: true, disabled: true },
    { label: "Vanilla Manila", checked: false, disabled: true },
  ],
  id: "groupbox-1",
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithLabel = Template.bind({});
WithLabel.args = { ...defaultArgs, label: "Select: " };

export const WithTitle = Template.bind({});
WithTitle.args = { ...defaultArgs, title: "Favourite Ice Cream", label: "Select: " };
