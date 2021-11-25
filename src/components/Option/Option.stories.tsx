import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Option } from "./Option";

export default {
  title: "Retro Web /XP/OptionButton",
  component: Option,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

const defaultArgs = { name: "option", label: "Option", id: "option" };

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Checked = Template.bind({});
Checked.args = {
  ...defaultArgs,
  checked: true,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  ...defaultArgs,
  checked: false,
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  ...defaultArgs,
  checked: true,
  disabled: true,
};
