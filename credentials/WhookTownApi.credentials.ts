import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WhookTownApi implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-uppercase-first-char
	name = 'WhookTownApi';
	displayName = 'WhookTown API';
	documentationUrl = 'https://api.whooktown.com/api-doc';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-authenticate-type-assertion
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{"Bearer " + $credentials.apiToken}}'
			}
		},
	} as IAuthenticateGeneric;
}
