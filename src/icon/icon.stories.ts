/* tslint:disable variable-name */


import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { IconModule, IconDirective } from "./";
import { IconDemo, ManyIconDemo } from "./stories";

export default {
	title: "Components/Icon",
	decorators: [
		moduleMetadata({
			declarations: [
				IconDemo,
				ManyIconDemo
			],
			imports: [
				IconModule,
				DocumentationModule
			]
		})
	],
	component: IconDirective
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<!-- app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/icon/stories/icon-demo.component.ts -->
		<app-demo-icon></app-demo-icon>
		<svg ibmIcon="accessibility" size="16" title="Hello!"></svg>
	`
});
export const Basic = Template.bind({});

const NonSVGRootTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/icon/stories/many-icons-demo.component.ts
		-->
		<app-demo-icon></app-demo-icon>
		<div ibmIcon="accessibility" size="16"></div>
	`
});
export const RootElement = NonSVGRootTemplate.bind({});
RootElement.storyName = "Non-svg root element";

const AllIconTemplate: Story = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-demo-many-icon></app-demo-many-icon>
	`
});
export const AllIcon = AllIconTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_icon.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
