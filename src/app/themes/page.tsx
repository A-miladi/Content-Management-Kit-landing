'use client';
import Button from '@/components/ui/Button';
import { API_URL } from '@/constants/api';
import useFetch from '@/hooks/useFetch';
import usePost from '@/hooks/usePost';
import {
	ICloneTemplatePayload,
	IGetTemplatesResponse,
	ISelectedTemplateResponse,
} from '@/services/templates';
import { useWebInfoStore } from '@/store/useWebInfoStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type WebsiteCategoryTypes = 'ECOMMERCE' | 'COMPANY' | 'PORTFOLIO';

const Themes = () => {
	const router = useRouter();
	const [selectedTab, setSelectedTab] =
		useState<WebsiteCategoryTypes>('ECOMMERCE');
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const { webInfo } = useWebInfoStore();

	const { data, refetch } = useFetch<IGetTemplatesResponse>(
		`${API_URL?.templates?.Templates}`,
		{
			autoFetch: false,
		}
	);

	const { execute } = usePost<ISelectedTemplateResponse, ICloneTemplatePayload>(
		`${API_URL?.CloneWebsite}`,
		{
			onSuccess: (res) => {
				if (res?.data?.subdomain) {
					router.replace(
						`https://${res?.data?.subdomain}.${process.env.NEXT_PUBLIC_BASE_SITE_URL}/admin-login`
					);
				}
			},
		}
	);

	const handleTabChange = (tab: WebsiteCategoryTypes) => {
		setSelectedTab(tab);
	};

	const filteredTemplates = data?.data?.filter((tem) =>
		tem?.websiteCategory?.includes(selectedTab)
	);

	useEffect(() => {
		refetch();
	}, [selectedTab, refetch]);

	const handleHoverTemplate = (id: string) => {
		setHoveredId(id);
	};

	const handleSetTemplate = (templateId?: string) => {
		if (webInfo?.id && templateId) {
			execute({ websiteId: webInfo.id, templateId });
		}
	};

	return (
		<div className="w-full h-screen bg-neutral-950 flex flex-col items-center pt-10 ">
			<div className=" relative w-1/2 h-[50px] border-4 border-primary-600 rounded-lg ">
				<div className="w-full h-[50px] bg-state-100 absolute top-2 right-3 rounded-lg flex justify-center items-center">
					<h2 className="text-neutral-100 font-bold text-xs lg:text-lg xl:text-[32px]">
						قدم اول موفقیت: انتخاب قالب ایدآل
					</h2>
				</div>
			</div>

			<div className="lg:w-2/6 w-4/5 h-14 bg-state-100 border border-neutral-200 mt-14 rounded-xl flex justify-between">
				<Button
					className={`w-1/3 border-l rounded-none p-2 font-medium text-xs lg:text-sm xl:text-lg text-neutral-100 rounded-r-xl ${
						selectedTab === 'ECOMMERCE' ? 'bg-primary-700' : 'bg-transparent'
					}`}
					onClick={() => handleTabChange('ECOMMERCE')}
				>
					فروشگاهی
				</Button>

				<Button
					className={`w-1/3 border-l rounded-none p-2 font-medium text-xs lg:text-sm xl:text-lg text-neutral-100 ${
						selectedTab === 'COMPANY' ? 'bg-primary-700' : 'bg-transparent'
					}`}
					onClick={() => handleTabChange('COMPANY')}
				>
					شرکتی
				</Button>

				<Button
					className={`w-1/3 p-2 font-medium text-xs lg:text-sm xl:text-lg text-neutral-100 rounded-none rounded-l-xl ${
						selectedTab === 'PORTFOLIO' ? 'bg-primary-700' : 'bg-transparent'
					}`}
					onClick={() => handleTabChange('PORTFOLIO')}
				>
					شخصی
				</Button>
			</div>

			<div className="pt-8  w-full h-3/4  flex justify-center p-4  lg:justify-start  flex-wrap gap-4  overflow-auto">
				{filteredTemplates?.map((template) => (
					<div
						onMouseEnter={() => handleHoverTemplate(template?.id ?? '')}
						onMouseLeave={() => setHoveredId(null)}
						key={template.id}
						className="w-[250px] h-[250px] bg-state-100 rounded-xl flex flex-col "
					>
						<div className="relative w-full h-full">
							<Image
								alt={template?.name}
								width={800}
								height={800}
								src={template?.thumbnail}
								className="w-full h-full rounded-t-lg"
							/>
							{hoveredId === template.id && (
								<div className="absolute inset-0 flex flex-col justify-end items-center py-6 gap-2 rounded-t-lg bg-gradient-to-t from-black to-transparent transition-opacity duration-300">
									<Button
										onClick={() => handleSetTemplate(template?.id)}
										className="w-48 bg-primary-700 text-neutral-100 hover:bg-primary-900 py-2"
									>
										ساخت سایت با این قالب
									</Button>
									<Button className="w-48 bg-transparent border-2 border-primary-700 hover:border-primary-900 px-3 py-2">
										مشاهده قالب
									</Button>
								</div>
							)}
						</div>
						<div className="w-full h-full flex justify-center items-center bg-state-100 py-4  rounded-b-lg">
							<h3 className="text-white text-sm lg:text-lg font-medium">
								{template?.name}
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Themes;
