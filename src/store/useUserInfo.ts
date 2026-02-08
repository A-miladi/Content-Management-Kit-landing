import { IUserInfo } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialUserInfo: IUserInfo = {
	id: '',
	email: '',
	phone: '',
	firstName: '',
	lastName: '',
	role: '',
	createdAt: '',
	updatedAt: '',
	planId: '',
	tenantId: '',
};

interface IUserInfoStore {
	userInfo: IUserInfo;
	setUserInfo: (v: Partial<IUserInfo>) => void;
}
export const useUserInfoStore = create<IUserInfoStore>()(
	persist(
		(set) => ({
			userInfo: initialUserInfo,
			setUserInfo: (v) =>
				set((state) => ({ userInfo: { ...state.userInfo, ...v } })),
		}),
		{
			name: 'user-info',
		}
	)
);
