export interface IPagesMandatory {
	title: string;
	link: string;
	websiteId: string;
}
export interface IWebsitePage {
	title: string;
	link: string;
	isTemplatePage: false;
	websiteId: string;
	meta: object;
	seo: object;
	scripts: object;
	sectionIds: [];
}
export interface ITemplatePage {
	title: string;
	link: string;
	isTemplatePage: true;
	templateId: string;
	meta: object;
	seo: object;
	scripts: object;
	sectionIds: [];
}
export interface IPagesWebsiteId {
	status: number;
	message: string;
	data: IWebsiteIdData[];
}
export interface IWebsiteIdData {
	id: string;
	title: string;
	slug: string;
	isHomePage: false;
	createdAt: string;
	updatedAt: string;
	meta: object;
	seo: object;
	websiteId: string;
	tenantId: string;
	sections: {
		id: string;
		name: string;
		type: string;
		data: object;
		styles: object;
		order: number;
		pageId: string;
	}[];
}
