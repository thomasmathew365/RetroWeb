import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleBar } from "./TitleBar";

export default {
  title: "Retro Web /XP/TitleBar",
  component: TitleBar,
  decorators: [
    (story) => (
      <div style={{ padding: "3em", background: "#ebe9d8" }}>{story()}</div>
    ),
  ],
} as ComponentMeta<typeof TitleBar>;

const Template: ComponentStory<typeof TitleBar> = (args) => <TitleBar {...args} />;

const defaultArgs = { text: 'The Best Title Bar' };

export const Default = Template.bind({});
Default.args = defaultArgs;

export const WithDefaultButtons = Template.bind({});
WithDefaultButtons.args = {
    ...defaultArgs,
    buttonsList: [{
        type: 'min',
        onClick: () => console.warn('Minimize')
    },
    {
        type: 'max',
        onClick: () => console.warn('Maximize')
    },
    {
        type: 'close',
        onClick: () => console.warn('Close')
    }]
}

export const WithHelpButton = Template.bind({});
WithHelpButton.args = {
    text: 'The Most Helpful Title Bar',
    buttonsList: [{
        type: 'help',
        onClick: () => console.warn('Help')
    },
    {
        type: 'close',
        onClick: () => console.warn('Close')
    }]
}

export const window = Template.bind({});
window.args = {
    text: 'Window',
    buttonsList: [{
        type: 'help',
        onClick: () => console.warn('Help')
    },
    {
        type: 'close',
        onClick: () => console.warn('Close')
    }]
}