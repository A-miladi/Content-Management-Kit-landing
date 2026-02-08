declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elem: string]: React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	children: React.ReactNode;
	color?: 'primary' | 'secondary';
	variant?: 'contained' | 'outlined';
	size?: 'sm' | 'lg';
	loading?: boolean;
	[rest: string];
};
export interface IconProps {
	size?: number;
	color?: string;
	className?: string;
	style?: string;
	rotate?: boolean;
}

export interface IUserInfo {
	id: string;
	email: string;
	phone: string;
	firstName: string;
	lastName: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	planId: string;
	tenantId: string;
}

export interface IAddItemBox {
	idx?: number;
	title: string;
	description: string;
	link: string;
}
export interface CheckboxProps {
	label?: string;
	size?: 'small' | 'medium' | 'large';
	disabled?: boolean;
	value?: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export type IWebsiteCategory = 'ECOMMERCE' | 'COMPANY' | 'PORTFOLIO';

export interface IBusinessCategory {
	status: number;
	message: string;
	data: IBusinessCategoryData[];
}
export interface IBusinessCategoryData {
	id: string;
	title: string;
	name: string;
	createdAt: string;
	updatedAt: string;
}

type signupEvent = omit<
	IUserInfo,
	| 'id'
	| 'isVerified'
	| 'role'
	| 'plan'
	| 'planExpiry'
	| 'createdAt'
	| 'updatedAt'
>;
