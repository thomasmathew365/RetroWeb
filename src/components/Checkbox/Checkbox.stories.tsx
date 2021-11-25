import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Retro Web /XP/Checkbox",
  component: Checkbox,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Checkbox",
};
