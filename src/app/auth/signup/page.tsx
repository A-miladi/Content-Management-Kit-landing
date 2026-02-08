'use client';
import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import usePost from '@/hooks/usePost';
import { useUserInfoStore } from '@/store/useUserInfo';
import Spinner from '@/components/ui/Spinner';
import { API_URL } from '@/constants/api';
import toast from 'react-hot-toast';
import { signupEvent } from '@/types';
import { useRouter } from 'next/navigation';
import { useReducer } from 'react';
import { ISignUpPayload, IVerifyUserResponse } from '@/services/auth';
import { MISAN_CMS_TOKEN } from '@/services';
import { PageUrls } from '@/constants/PageUrls';

function SignUp() {
	const router = useRouter();
	const { userInfo, setUserInfo } = useUserInfoStore();
	const [event, updateEvent] = useReducer(
		(prev: signupEvent, next: signupEvent) => {
			return { ...prev, ...next };
		},
		{
			firstName: userInfo.firstName,
			lastName: userInfo.lastName,
			email: userInfo.email,
			phone: userInfo.phone,
		}
	);

	const { loading, execute } = usePost<IVerifyUserResponse, ISignUpPayload>(
		API_URL.Auth.SignUp,
		{
			onSuccess: (res) => {
				toast.success(res?.message);
				localStorage.setItem(MISAN_CMS_TOKEN, res?.data?.token);
				setUserInfo(res?.data?.user);
				router.push(PageUrls.webInfo);
			},
			onError: (error) => {
				toast.error(error);
			},
		}
	);
	const handleSubmit = () => {
		const { firstName, lastName, email, phone } = event;
		if (
			!firstName.trim() ||
			!lastName.trim() ||
			!email.trim() ||
			!phone.trim()
		) {
			toast.error('لطفاً تمامی فیلدها را پر کنید');
			return;
		}
		execute({
			phone,
			firstName,
			lastName,
			email,
		});
	};
	const formValid =
		event.firstName.trim() &&
		event.lastName.trim() &&
		event.email.trim() &&
		event.phone.trim();
	return (
		<section
			className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-neutral-950 bg-background bg-cover text-neutral-100"
			dir="rtl"
		>
			<div className="relative flex h-1/2 w-[95%] items-center justify-center md:w-[40%] ">
				<div className="absolute z-10 h-full w-full skew-y-3 rounded-2xl bg-gradient-to-t from-primary-800 to-primary-500 p-[4px]">
					<div className="h-full w-full rounded-xl bg-neutral-950" />
				</div>
				<div className="z-20 flex h-full w-[95%] flex-col items-center justify-center gap-6 rounded-xl bg-state-200 shadow-xl px-6">
					<h1 className="text-xl font-medium">ثبت نام</h1>
					<TextInput
						className="h-10 w-full border border-neutral-200"
						placeholder="نام"
						value={event.firstName}
						onChange={(e) => updateEvent({ firstName: e.target.value })}
					/>
					<TextInput
						className="h-10 w-full border border-neutral-200"
						placeholder="نام خانوادگی"
						value={event.lastName}
						onChange={(e) => updateEvent({ lastName: e.target.value })}
					/>
					<TextInput
						className="h-10 w-full border border-neutral-200"
						placeholder="آدرس ایمیل"
						value={event?.email}
						onChange={(e) => updateEvent({ email: e.target.value })}
					/>
					<Button
						onClick={handleSubmit}
						className={`flex h-9 w-4/5 items-center justify-center md:w-2/3 ${
							loading ? 'cursor-not-allowed opacity-50' : ''
						}`}
						disabled={!formValid || loading}
					>
						{loading ? <Spinner color="#2EFAB0" /> : 'ثبت نام'}
					</Button>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
