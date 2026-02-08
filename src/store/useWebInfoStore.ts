import { ICreateWebsiteResponse } from '@/services/website';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialWebInfo: ICreateWebsiteResponse = {
	id: '',
	name: '',
	slogan: '',
	logo: '',
	favIcon: '',
	colors: {
		primary: '',
		secondary: '',
		textColor: '',
		backgroundColor: '',
	},
	subdomain: '',
	domain: '',
	userId: '',
	templateId: '',
	websiteCategory: '',
	businessCategoryId: '',
	tenantId: '',
	createdAt: '',
	updatedAt: '',
};

interface IWebInfoStore {
	webInfo: ICreateWebsiteResponse;
	setWebInfo: (v: Partial<ICreateWebsiteResponse>) => void;
}
export const useWebInfoStore = create<IWebInfoStore>()(
	persist(
		(set) => ({
			webInfo: initialWebInfo,
			setWebInfo: (v) =>
				set((state) => ({ webInfo: { ...state.webInfo, ...v } })),
		}),
		{
			name: 'web-info',
		}
	)
);
