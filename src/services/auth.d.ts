import { IUserInfo } from '@/types';

export interface IOtpSendResponse {
	message: string;
	status: number;
}

export interface IOtpSendPayload {
	phone: string;
}

export interface IVerifyOtpPayload {
	phone: string;
	otp: string;
}
export interface ISignUpPayload {
	phone: string;
	firstName: string;
	lastName: string;
	email: string;
}

export type IRole = 'ADMIN' | 'USER' | 'SUPER_ADMIN' | 'EDITOR';
export type IPlan = 'FREE' | 'PRO';

export interface IVerifyUserResponse {
	data: {
		token: string;
		phone?: string;
		isVerify: boolean;
		user: {
			id: string;
			firstName: string;
			lastName: string;
			phone: string;
			email: string;
			role: IRole;
			planId: string;
			tenantId: string;
			createdAt: string;
			updatedAt: string;
		};
	};
	status: number;
	message: string;
}

export interface IGetUsersResponse {
	statusCode: number;
	message: string;
	data: {
		users: IUserInfo[];
		totalPages: number;
		currentPage: number;
	};
}

export interface IBusinessCatInfo {
	id: string;
	title: string;
	name: string;
	createdAt: string;
	updatedAt: string;
}

export interface IGetBusinessCategoryResponse {
	data: businessCategoryData[];
}

export interface IPutUsersPayload {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
}
