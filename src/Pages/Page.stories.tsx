import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Page, PageProps } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const PageDefault = Template.bind({});