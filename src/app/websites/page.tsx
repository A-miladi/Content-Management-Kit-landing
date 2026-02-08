'use client';

import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
import { API_URL } from '@/constants/api';
import { PageUrls } from '@/constants/PageUrls';
import useFetch from '@/hooks/useFetch';
import { ICreateWebsiteResponse, IWebsiteResponse } from '@/services/website';
import { useWebInfoStore } from '@/store/useWebInfoStore';
import { useRouter } from 'next/navigation';

function Websites() {
	const router = useRouter();
	const { data, loading } = useFetch<IWebsiteResponse>(
		`${API_URL.Websites.userWebsites}`
	);
	const { setWebInfo } = useWebInfoStore();

	const handleNavigateWebsite = (website: ICreateWebsiteResponse) => {
		setWebInfo(website);

		if (website.templateId) {
			router.replace(
				`http://${website?.subdomain}.${process.env.NEXT_PUBLIC_BASE_SITE_URL}:3002/admin-login`
			);
		} else {
			router.push(PageUrls.themes);
		}
	};

	return (
		<section className="flex h-screen flex-col gap-4 p-16">
			<h1 className="text-primary-300">سایت های شما</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className=" flex gap-8 mt-8 flex-wrap">
					{data?.data?.map((i, idx) => (
						<div
							className="relative flex  h-auto items-center justify-center gap-8"
							key={idx}
						>
							<div className="absolute z-10  w-[260px] h-[200px] skew-y-3 rounded-2xl bg-gradient-to-t from-primary-800 to-primary-500 p-4">
								<div className="h-full w-full rounded-2xl bg-neutral-950" />
							</div>
							<div className="z-20 flex   flex-col items-center justify-center gap-2 p-6 w-[250px] h-[200px]  rounded-xl bg-state-200 shadow-xl max-md:py-8 ">
								<h1 className="text-primary-300">{i?.name}</h1>
								<p className="text-neutral-600 text-xs">{i?.slogan}</p>
								<p className="text-primary-300 text-xs">{i?.subdomain}</p>
								<Button
									onClick={() => handleNavigateWebsite(i)}
									className={`flex h-9 w-4/5 items-center justify-center text-xs md:w-2/3 bg-primary-700 ${
										loading ? 'cursor-not-allowed opacity-50' : ''
									}`}
								>
									مدیریت سایت
								</Button>
							</div>
						</div>
					))}
					<div
						className="relative flex h-auto items-center justify-center cursor-pointer"
						onClick={() => router.push(PageUrls.webInfo)}
					>
						<div className="z-20 flex   flex-col items-center justify-center gap-6 p-6 w-[250px] h-[200px]  rounded-xl bg-state-200 shadow-xl max-md:py-8 ">
							<h1 className="text-primary-300">+ وب سایت جدید بسازید</h1>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Websites;
