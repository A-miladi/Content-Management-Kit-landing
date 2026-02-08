import Toast from '@/components/ui/Toast';
import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import 'react-loading-skeleton/dist/skeleton.css';

const iranSans = localFont({
	src: [
		{
			path: '../../public/assets/fonts/IranSans/IRANSansX-Regular.ttf',
			weight: '400',
		},
		{
			path: '../../public/assets/fonts/IranSans/IRANSansX-Medium.ttf',
			weight: '500',
		},
		{
			path: '../../public/assets/fonts/IranSans/IRANSansX-Bold.ttf',
			weight: '700',
		},
	],
	variable: '--font-iranSans',
});

const morabba = localFont({
	src: [
		{
			path: '../../public/assets/fonts/Morabba/Morabba-Medium.ttf',
			weight: '500',
		},
		{
			path: '../../public/assets/fonts/Morabba/Morabba-Bold.ttf',
			weight: '700',
		},
	],
	variable: '--font-morabba',
});

export const metadata: Metadata = {
	title: 'سایت ساز فروشگاهی میسان',
	description: 'سایت ساز فروشگاهی میسان',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fa"
			dir="rtl"
			className={`${iranSans.variable} ${morabba.variable} bg-neutral-950`}
		>
			<body>
				<Toast />
				{children}
			</body>
		</html>
	);
}
