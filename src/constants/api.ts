export const API_URL = {
	Auth: {
		SendOtp: '/auth/send-otp',
		VerifyOtp: '/auth/verify-otp',
		SignUp: '/auth/signup',
		sendOtpAdmin: '/auth/send-otp-admin',
	},
	User: {
		Users: '/users',
	},
	Sections: {
		Sections: '/sections',
	},
	templates: {
		Templates: '/templates',
	},

	BusinessCategory: '/business-category',
	Websites: { userWebsites: '/websites/user', websites: '/websites' },
	CloneWebsite: '/websites/apply-template',
	UploadLogo: '/media/upload',
	Pages: {
		page: '/pages',
		getByWebsiteId: '/pages/website',
		getByTemplateId: '/pages/template',
	},

	Owner: {
		create: 'owner/create',
	},
};
