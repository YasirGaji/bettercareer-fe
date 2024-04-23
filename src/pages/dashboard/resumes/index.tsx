import React from 'react';

import { DashboardLayout } from '@/features/dashboard/layout';
import { useUserStore } from '@/store/z-store/user';
import { DashboardResumes } from '@/features/dashboard/views/resumes';

const Resumes = () => {
	const { profile } = useUserStore();

	return (
		<DashboardLayout profile={profile}>
			<DashboardResumes />
		</DashboardLayout>
	);
};

export default Resumes;
