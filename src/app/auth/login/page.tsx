'use client';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
import TextInput from '@/components/ui/TextInput';
import { API_URL } from '@/constants/api';
import usePost from '@/hooks/usePost';
import { IOtpSendPayload, IOtpSendResponse } from '@/services/auth';
import { isNumber, isValidatePhone } from '@/utils';
import { toEnglishNumber } from '@/utils/addCommas';
import toPersianDigits from '@/utils/toPersianDigits';
import { useState } from 'react';
import toast from 'react-hot-toast';
import OTPVerify from './OTPVerify';

function Login() {
	const [otpVerify, setOtpVerify] = useState(false);
	const [phone, setPhone] = useState('');
	const { loading, execute } = usePost<IOtpSendResponse, IOtpSendPayload>(
		API_URL.Auth.SendOtp,
		{
			onSuccess: () => {
				setOtpVerify(true);
			},
			onError: (error) => {
				toast.error(error);
			},
		}
	);
	function handleVerifyPhone() {
		if (isValidatePhone(phone)) {
			execute({ phone });
		} else {
			toast.error('شماره تماس وارد شده صحیح نمی باشد');
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (isNumber(value)) {
			setPhone(toEnglishNumber(e.target.value));
		}
	};

	return (
		<section
			className="flex h-screen w-screen flex-col items-center justify-center gap-4  "
			dir="rtl"
		>
			<div className="relative flex h-auto items-center justify-center">
				<div className="absolute z-10  w-[310px] h-[280px] skew-y-3 rounded-2xl bg-gradient-to-t from-primary-800 to-primary-500 p-4">
					<div className="h-full w-full rounded-2xl bg-neutral-950" />
				</div>
				<div className="z-20 flex   flex-col items-center justify-center gap-6 p-6 w-[300px] h-[280px] rounded-xl bg-state-200 shadow-xl max-md:py-8 ">
					{!otpVerify ? (
						<>
							<h2 className="text-white">ورود و ثبت نام</h2>
							<TextInput
								className="h-10 w-full border border-neutral-200"
								placeholder="0912 XXX XX XX"
								dir="ltr"
								value={toPersianDigits(phone)}
								onChange={handleChange}
							/>
							<Button
								onClick={() => execute({ phone })}
								className={`flex h-9 w-4/5 items-center justify-center text-xs md:w-2/3 bg-primary-700 ${
									loading ? 'cursor-not-allowed opacity-50' : ''
								}`}
								disabled={loading || !phone}
							>
								{loading ? <Spinner color="#2EFAB0" /> : 'ارسال کد'}
							</Button>
						</>
					) : (
						<OTPVerify
							handleChangePhone={() => setOtpVerify(false)}
							phone={phone}
							handleResendCode={handleVerifyPhone}
						/>
					)}
				</div>
			</div>
		</section>
	);
}

export default Login;
