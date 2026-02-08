'use client';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/DropDown';
import FileUpload from '@/components/ui/FileUploader';
import Spinner from '@/components/ui/Spinner';
import TextInput from '@/components/ui/TextInput';
import { API_URL } from '@/constants/api';
import { PageUrls } from '@/constants/PageUrls';
import useFetch from '@/hooks/useFetch';
import usePost from '@/hooks/usePost';
import usePut from '@/hooks/usePut';
import { IAddWebsite, IGetWebsitesResponse } from '@/services/website';
import { useWebInfoStore } from '@/store/useWebInfoStore';
import { IBusinessCategory } from '@/types';
import { uploadFile } from '@/utils/Uploader';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useUserInfoStore } from '@/store/useUserInfo';
import API from '@/services';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required('نام وب سایت الزامی است'),
	slogan: yup.string().required('شعار وب سایت الزامی است'),
	businessCategoryId: yup.string().required('حوزه کاری الزامی است'),
	userName: yup
		.string()
		.required('نام کاربری الزامی است')
		.matches(/^[a-zA-Z0-9]+$/, 'نام کاربری باید فقط شامل حروف انگلیسی و اعداد باشد'),
	password: yup
		.string()
		.required('رمز عبور الزامی است')
		.min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

type FormData = yup.InferType<typeof schema>;

function WebInfo() {
	const router = useRouter();
	const { userInfo } = useUserInfoStore();

	const [logoFileState, setLogoFileState] = useState<File | null>(null);
	const { setWebInfo } = useWebInfoStore();
	const [logoUploading, setLogoUploading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty },
		setValue,
		watch,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			slogan: '',
			businessCategoryId: '',
			userName: '',
			password: '',
		},
		mode: 'onChange',
	});

	const { data: BusinessData, loading: loadCategories } =
		useFetch<IBusinessCategory | null>(API_URL.BusinessCategory);
	const businessData =
		BusinessData?.data.map((i) => ({ label: i.title, value: i.id })) || [];

	const { execute: executeUpdateWebsite, loading } = usePut<
		IGetWebsitesResponse,
		IAddWebsite
	>(`${API_URL.Websites.websites}/`, {
		onSuccess: async (res: IGetWebsitesResponse) => {
			setLogoUploading(false);
			toast.success('وب سایت با موفقیت ایجاد شد');

			const data = res?.data;
			setWebInfo({
				id: data?.id,
				logo: data?.logo,
				name: data?.name,
				slogan: data?.slogan,
				businessCategoryId: data?.businessCategoryId,
				createdAt: data?.createdAt,
				updatedAt: data?.updatedAt,
				subdomain: data?.subdomain,
				favIcon: data?.logo,
				colors: {
					primary: '',
					secondary: '',
					textColor: '',
					backgroundColor: '',
				},
				domain: '',
				userId: data?.userId,
				templateId: '',
				websiteCategory: data?.websiteCategory,
				tenantId: data?.tenantId,
			});

			// Create owner after website is created
			if (watch('userName') && userInfo.email && watch('password')) {
				try {
					await API.post<IGetWebsitesResponse>(
						`${API_URL.Owner.create}/${data?.id}`,
						{
							userName: watch('userName'),
							email: userInfo.email,
							password: watch('password'),
							name: userInfo.firstName,
							lastName: userInfo.lastName,
							role: 'ADMIN',
						}
					);
					toast.success('مدیر سایت با موفقیت ایجاد شد');
				} catch (error) {
					if (error instanceof AxiosError) {
						toast.error(
							error.response?.data?.message || 'خطا در ایجاد مدیر سایت'
						);
					} else {
						toast.error('خطا در ایجاد مدیر سایت');
					}
				}
			}
			router.push(PageUrls.themes);
		},
		onError: (error) => {
			toast.error(error);
		},
	});

	const { execute } = usePost<IGetWebsitesResponse, IAddWebsite>(
		API_URL.Websites.websites,
		{
			onSuccess: async (res: IGetWebsitesResponse) => {
				setLogoUploading(true);
				const data = res?.data;

				let logoUrl = '';
				if (logoFileState) {
					const resLogo = await uploadFile(logoFileState, data?.id);
					logoUrl = resLogo?.data?.key;
				}

				if (data?.businessCategoryId) {
					executeUpdateWebsite(
						{
							logo: logoUrl,
							name: watch('name'),
							slogan: watch('slogan'),
							businessCategoryId: data.businessCategoryId,
						},
						data?.id
					);
				}
			},
			onError: (error) => {
				setLogoUploading(false);
				toast.error(error);
			},
		}
	);

	const onSubmit = async (data: FormData) => {
		try {
			execute({
				name: data.name,
				slogan: data.slogan,
				businessCategoryId: data.businessCategoryId,
			});
		} catch {
			setLogoUploading(false);
			toast.error('خطایی رخ داد. لطفا دوباره تلاش کنید.');
		}
	};

	return (
		<section
			className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-950 bg-background bg-cover text-neutral-100 py-8 px-4"
			dir="rtl"
		>
			<div className="relative flex w-full max-w-4xl items-center justify-center">
				<div className="absolute z-10 h-full w-full skew-y-3 rounded-2xl bg-gradient-to-t from-primary-800 to-primary-500 p-[4px]">
					<div className="h-full w-full rounded-2xl bg-neutral-950" />
				</div>
				<div className="relative z-20 flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-state-200 p-8 shadow-xl">
					<h1 className="text-md font-medium text-white">
						مشخصات سایت خود را وارد کنید
					</h1>

					<form onSubmit={handleSubmit(onSubmit)} className="w-full gap-8 flex-col flex">
						<div className="flex w-full flex-col gap-4 md:flex-row md:items-start">
							<div className="w-full md:w-1/4">
								<FileUpload
									onFileSelect={(file: File) => setLogoFileState(file)}
									label="آپلود لوگو"
									accept="image/*"
								/>
							</div>
							<div className="w-full md:w-3/4 flex flex-col gap-4">
								<div className="flex w-full gap-4">
									<div className="w-1/2">
										<TextInput
											required
											label="نام وب سایت"
											labelClassName="text-neutral-600 mb-2 font-normal text-xs"
											className="h-10 w-full border border-neutral-400"
											placeholder="نام وب سایت"
											{...register('name')}
											errorMessage={errors.name?.message}
										/>
									</div>
									<div className="w-1/2">
										<TextInput
											required
											label="شعار وب سایت"
											labelClassName="text-neutral-600 mb-2 font-normal text-xs"
											className="h-10 w-full border border-neutral-400"
											placeholder="شعار وب سایت"
											{...register('slogan')}
											errorMessage={errors.slogan?.message}
										/>
									</div>
								</div>

								<Dropdown
									label="حوزه ی کاری خود را مشخص کنید"
									required
									className="h-10 w-full rounded-lg border border-neutral-400 bg-transparent"
									reverse="px-1"
									parent="flex flex-col"
									optionClassName="top-10 z-50"
									options={businessData}
									placeholder="دسته بندی"
									onChange={(value: string) =>
										setValue('businessCategoryId', value)
									}
									labelClassName="text-neutral-600 mb-3 font-normal text-xs"
									loading={loadCategories}
									errorMessage={errors.businessCategoryId?.message}
								/>
							</div>
						</div>

						<div className="flex w-full flex-col gap-4 md:flex-row">
							<div className="w-full md:w-1/2">
								<TextInput
									required
									label="(انگلیسی) نام کاربری مدیر ورود به سایت "
									labelClassName="text-neutral-600 mb-2 font-normal text-xs"
									className="h-10 w-full border border-neutral-400"
									placeholder="(انگلیسی) نام کاربری مدیر ورود به سایت"
									{...register('userName')}
									errorMessage={errors.userName?.message}
									dir="ltr"
								/>
							</div>
							<div className="w-full md:w-1/2">
								<TextInput
									required
									label="رمز عبور مدیر ورود به سایت"
									labelClassName="text-neutral-600 mb-2 font-normal text-xs"
									className="h-10 w-full border border-neutral-400"
									placeholder="رمز عبور مدیر"
									type="text"
									{...register('password')}
									errorMessage={errors.password?.message}
								/>
							</div>
						</div>

						<div className="w-full">
							<Button
								type="submit"
								className="flex h-10 w-full items-center justify-center bg-primary-700 hover:bg-primary-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={!isValid || !isDirty || loading || logoUploading}
							>
								{loading || logoUploading ? (
									<Spinner color="#03DC8E" />
								) : (
									'مرحله بعدی'
								)}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default WebInfo;
