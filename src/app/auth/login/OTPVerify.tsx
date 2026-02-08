'use client';
import { IVerifyOtpPayload, IVerifyUserResponse } from '@/services/auth';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
import TextInput from '@/components/ui/TextInput';
import { API_URL } from '@/constants/api';
import usePost from '@/hooks/usePost';
import { useUserInfoStore } from '@/store/useUserInfo';
import toPersianDigits from '@/utils/toPersianDigits';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { PageUrls } from '@/constants/PageUrls';
import { MISAN_CMS_TOKEN } from '@/services';
import { useRouter } from 'next/navigation';

interface otpProps {
	handleResendCode: () => void;
	handleChangePhone: () => void;
	phone: string;
}

const OTPVerify: FC<otpProps> = ({
	handleResendCode,
	handleChangePhone,
	phone,
}) => {
	const [isTimerActive, setIsTimerActive] = useState(true);
	const [time, setTime] = useState(120);
	const [otp, setOtp] = useState('');
	const router = useRouter();

	const { setUserInfo } = useUserInfoStore();

	useEffect(() => {
		if (time <= 0) {
			setIsTimerActive(false);
			return;
		}
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	const { loading, execute } = usePost<IVerifyUserResponse, IVerifyOtpPayload>(
		API_URL.Auth.VerifyOtp,
		{
			onSuccess: (res) => {
				toast.success(res?.message);
				if (res?.data?.isVerify) {
					localStorage.setItem(MISAN_CMS_TOKEN, res?.data?.token);
					setUserInfo(res?.data?.user);
					router.push(PageUrls.websites);
				} else {
					setUserInfo({ ...res?.data?.user, phone: res?.data?.phone });
					router.push(PageUrls.signUp);
				}
			},
			onError: (error) => {
				toast.error(error);
			},
		}
	);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<div className="flex w-full flex-col  justify-center">
			<h2 className="mb-2 self-center text-white">کد تایید</h2>
			<div className="flex w-full flex-col items-center justify-center px-6">
				<p className="text-xs text-neutral-300 self-start">{`کد تایید به شماره ${toPersianDigits(
					phone
				)} ارسال شد`}</p>
				<TextInput
					autoFocus
					className="no-spinner h-10 my-2 w-full border border-neutral-200"
					placeholder="کد تایید را وارد کنید"
					value={otp}
					dir="ltr"
					onChange={(e) => {
						const value = e.target.value;
						if (/^\d*$/.test(value) && value.length <= 6) {
							setOtp(value);
						}
					}}
				/>
				<div className="flex w-full items-center justify-between my-4">
					{isTimerActive ? (
						<p className="font-light text-primary-500">{formatTime(time)}</p>
					) : (
						<button
							onClick={() => {
								handleResendCode();
								setTime(120);
								setIsTimerActive(true);
							}}
							className="flex h-full items-center text-xs text-neutral-300  "
							disabled={isTimerActive}
						>
							ارسال مجدد کد
						</button>
					)}

					<Button
						onClick={handleChangePhone}
						className="flex h-full items-center bg-transparent text-xs font-light text-neutral-300 "
					>
						تغییر شماره تلفن
					</Button>
				</div>
				<Button
					onClick={() => execute({ phone, otp })}
					className={`mt-1 flex h-10 w-4/5 items-center bg-primary-700 justify-center font-light text-white md:w-2/3 ${
						loading ? 'cursor-not-allowed opacity-50' : ''
					}`}
					disabled={loading || !otp.trim()}
				>
					{loading ? <Spinner color="#2EFAB0" /> : 'تایید کد'}
				</Button>
			</div>
		</div>
	);
};

export default OTPVerify;
