import { Toaster } from 'react-hot-toast';

const TOAST_COLORS = {
	background: '#232323',
	success: '#0E9F6E',
	error: '#F05252',
};

const Toast = () => {
	return (
		<Toaster
			position="bottom-right"
			toastOptions={{
				duration: 3000,
				style: {
					marginLeft: 16,
					marginBottom: 28,
					direction: 'rtl',
					backgroundColor: TOAST_COLORS.background,
				},
				error: {
					style: {
						border: `1px solid ${TOAST_COLORS.error} `,
						color: TOAST_COLORS.error,
					},
				},
				success: {
					style: {
						border: `1px solid ${TOAST_COLORS.success}`,
						color: TOAST_COLORS.success,
					},
				},
			}}
		/>
	);
};

export default Toast;
