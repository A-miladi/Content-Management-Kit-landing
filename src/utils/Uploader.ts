import { API_URL } from '@/constants/api';
import API, { MISAN_CMS_TOKEN } from '@/services';
import toast from 'react-hot-toast';

export interface IUploadResponse {
	status: number;
	message: string;
	data: {
		key: string;
		message: string;
	};
}
export const uploadFile = async (
	file: File,
	websiteId: string
): Promise<IUploadResponse> => {
	const token = localStorage.getItem(MISAN_CMS_TOKEN);
	try {
		const formData = new FormData();
		formData.append('image', file);
		const response = await API.post(
			`${API_URL.UploadLogo}/${websiteId}`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: token ? `Bearer ${token}` : '',
				},
			}
		);

		return response?.data;
	} catch {
		toast.error('خطا در آپلود لوگو');
		return {
			status: 500,
			message: 'خطا در آپلود لوگو',
			data: {
				key: '',
				message: 'خطا در آپلود لوگو',
			},
		};
	}
};
