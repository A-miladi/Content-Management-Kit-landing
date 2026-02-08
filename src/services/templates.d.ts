import { ICreateWebsiteResponse } from './website';

export interface IGetTemplatesResponse {
	data: ITemplates[];
}

export interface ISelectedTemplateResponse {
	status: number;
	message: string;
	data: ICreateWebsiteResponse;
}

export interface ITemplates {
	id?: string;
	name: string;
	title: string;
	thumbnail: string;
	templatePages?: string[];
	websiteCategory: string[];
}

export interface ICloneTemplatePayload {
	websiteId: string;
	templateId: string;
}
