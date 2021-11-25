import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  Button } from './Button';

export default {
    title: "Retro Web /XP/Button",
    component: Button,
    decorators: [story => <div style={{padding: '3em', background: "#ebe9d8"}}>{story()}</div>]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',

};