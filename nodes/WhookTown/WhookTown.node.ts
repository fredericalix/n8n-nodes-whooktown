import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class WhookTown implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WhookTown',
		name: 'WhookTown',
		icon: 'file:whooktown.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get and Push data to WhookTown s API',
		defaults: {
			name: 'WhookTown',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'WhookTownApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.whooktown.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased, n8n-nodes-base/node-param-resource-with-plural-option
						name: 'Services',
						value: 'whooktownListAllServices',
					},
				],
				default: 'whooktownListAllServices',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'whooktownListAllServices',
						],
					},
				},
				options: [
					{
						name: 'List All Services',
						value: 'get',
						action: 'Get all services',
						description: 'Get all WhookTown services by API call',
						routing: {
							request: {
								method: 'GET',
								url: '/service',
							},
						},
					},
				],
				default: 'get',
			},
		]
	};
}
