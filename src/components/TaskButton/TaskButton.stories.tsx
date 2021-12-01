import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TaskButton } from "./TaskButton";

export default {
  title: "Retro Web /XP/TaskButton",
  component: TaskButton,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof TaskButton>;

const Template: ComponentStory<typeof TaskButton> = (args) => <TaskButton {...args} />;

const defaultArgs = { text: 'Resume' };

export const Default = Template.bind({});
Default.args = defaultArgs;