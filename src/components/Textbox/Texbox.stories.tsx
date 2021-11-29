import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textbox } from "./Textbox";

export default {
  title: "Retro Web /XP/TextBox",
  component: Textbox,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => <Textbox {...args} />;

const defaultArgs = { label: "Text Label" };

export const Default = Template.bind({});
Default.args = defaultArgs;

export const StackedLabel = Template.bind({});
StackedLabel.args = {...defaultArgs, stacked: true}

export const TextArea = Template.bind({});
TextArea.args = {...defaultArgs, stacked: true, rows: 5}