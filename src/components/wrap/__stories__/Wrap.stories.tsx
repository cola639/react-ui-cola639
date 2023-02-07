import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Wrap } from '../index';

export default {
	title: 'Components/Wrap',
	component: Wrap,
} as ComponentMeta<typeof Wrap>;

const Template: ComponentStory<typeof Wrap> = (args) => <Wrap {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<p style={{ background: 'beige', padding: '20px' }}>
			max-width default is 1024px.
		</p>
	),
};
