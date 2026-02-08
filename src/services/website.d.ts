export interface IWebsiteResponse {
	data: ICreateWebsiteResponse[];
	message: string;
	status: number;
}

export interface IGetWebsitesResponse {
	data: ICreateWebsiteResponse;
	message: string;
	status: number;
}

export interface ICreateWebsiteResponse {
	id: string;
	name: string;
	slogan: string;
	logo: string;
	favIcon?: string | null;
	colors?: {
		primary: string;
		secondary: string;
		textColor: string;
		backgroundColor: string;
	};
	subdomain?: string;
	domain?: string | null;
	userId?: string;
	templateId?: string;
	websiteCategory?: string;
	businessCategoryId?: string;
	tenantId?: string;
	createdAt?: string;
	updatedAt?: string;
}
export interface IAddWebsite {
	id?: string;
	name: string;
	slogan?: string;
	logo?: string;
	businessCategoryId: string;
}
