'use client';
import Button from '@/components/ui/Button';
import { PageUrls } from '@/constants/PageUrls';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	return (
		<div>
			<main className="flex justify-center items-center h-screen  flex-col gap-8">
				<h1 className="text-2xl font-bold text-primary-300 font-serif">
					صفحه ی اصلی لندینگ میسان CMS
				</h1>
				<Button
					onClick={() => router.push(PageUrls.login)}
					className="flex text-white hover:bg-primary-950 py-2 px-4 bg-primary-600 text-xl items-center justify-center "
				>
					بزن بریم
				</Button>
			</main>
		</div>
	);
}
