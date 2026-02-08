import Button from '@/components/ui/Button';
import Profile from '@/components/ui/Icons/Profile';
import { useUserInfoStore } from '@/store/useUserInfo';
import { cn } from '@/utils';
import { FC } from 'react';
import ArrowUp from '../Icons/ArrowUp';
// import Premium from '../Icons/Premium';
interface IUserProfileProps {
	className?: string;
	unVisible?: boolean;
	hidden?: boolean;
}
const UserProfile: FC<IUserProfileProps> = ({ className }) => {
	const { userInfo } = useUserInfoStore();
	return (
		<div className={cn(' flex w-full items-center justify-end', className)}>
			<div
				onClick={() => {}}
				className="flex cursor-pointer items-center justify-start gap-2"
			>
				<Button className="bg-transparent">
					<ArrowUp color="#e7e7e7" size={12} className="rotate-180" />
				</Button>
				<p className="text-xs font-normal text-neutral-100">
					{userInfo?.firstName + ' ' + userInfo?.lastName}
				</p>
				<div className="rounded-full bg-gradient-to-tl from-primary-800 to-primary-600 p-0.5">
					<Button className="h-6 w-6 rounded-full bg-neutral-900 shadow-lg">
						<Profile color="#e7e7e7" size={16} />
					</Button>
				</div>
			</div>
			{/* {userInfo.plan === 'PRO' ? (
				<Button className={`flex gap-1 ${hidden === false && 'hidden'}`}>
					<Premium size={22} />
					<p className="text-sm font-thin">پلن حرفه ای</p>
				</Button>
			) : (
				<Button className={`flex gap-1 ${hidden === false && 'hidden'}`}>
					<p className="text-lg">😢</p>
					<p className="text-sm font-thin pb-1">پلن رایگان</p>
				</Button>
			)} */}
		</div>
	);
};

export default UserProfile;
