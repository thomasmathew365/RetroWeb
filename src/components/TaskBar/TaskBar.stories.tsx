import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TaskBar } from "./TaskBar";
import { TaskButton } from "../TaskButton/TaskButton";

export default {
  title: "Retro Web /XP/TaskBar",
  component: TaskBar,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof TaskBar>;

const Template: ComponentStory<typeof TaskBar> = (args) => (
  <TaskBar {...args}>
    <TaskButton text="Resume" />
    <TaskButton text="Resume" />
    <TaskButton text="Resume" />
  </TaskBar>
);

const defaultArgs = {};

export const Default = Template.bind({});
Default.args = defaultArgs;
