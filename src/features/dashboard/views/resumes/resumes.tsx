import React from 'react';
import { TextField } from '@radix-ui/themes';
import classNames from 'classnames';
import Link from 'next/link';

import { Flex, Heading, Text } from '@labs/components';
import ResumeIcon from '@labs/icons/dashboard/Page-Facing-Up.svg';
import FileIcon from '@labs/icons/dashboard/file.svg';
import { type UserData } from '@/queries/types/user';
import MagnifyingGlassIcon from '@labs/icons/dashboard/search.svg';
import MagnifyingBlueIcon from '@labs/icons/dashboard/search-blue.svg';
import AddResume from '@labs/icons/dashboard/add-resume.svg';

import styles from './resumes.module.scss';

export const DashboardResumes = () => {
	return (
		<>
			<Header />
			<ResumesGrid />
		</>
	);
};

function Header() {
	const [searchState, setSearchState] = React.useState<string>('');
	function searchResumes() {
		// Implement resume search here
	}
	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			className="flex-col mb-4 min-[900px]:flex-row "
		>
			<Flex.Column gap={6}>
				<Flex alignItems="center" gap={14}>
					<Heading.h3 weight={400} animate="slide">
						My Resumes
					</Heading.h3>
					<ResumeIcon />
				</Flex>

				<Text color="var(--text-gray-light)" animate="fade" className="mb-9">
					All Your Resumes in One Place: Manage and access resumes easily
				</Text>
			</Flex.Column>

			<div
				className={classNames(
					styles.DashboardResumesSearch,
					'bg-white rounded-2xl py-[10px] px-6'
				)}
			>
				<Flex gap={12}>
					<button
						className="  "
						title="Search"
						type="button"
						onClick={searchResumes}
					>
						<MagnifyingGlassIcon className="w-4 h-4" />
					</button>

					<label htmlFor="searchResumes" className="hidden">
						Search Resumes...
					</label>
					<input
						id="searchResumes"
						name="searchResumes"
						type="text"
						className="outline-none mr-4 w-[220px] md:mr-6 xl:mr-12"
						placeholder="Search Resumes..."
						value={searchState}
						onChange={(e) => setSearchState(e.target.value)}
					/>
				</Flex>

				<button
					className=" "
					title="Search"
					type="button"
					onClick={searchResumes}
				>
					<MagnifyingBlueIcon />
				</button>
			</div>
		</Flex>
	);
}

function ResumesGrid() {
	function AddResumes() {
		// adding resume
	}
	return (
		<Flex.Column gap={24} className={styles.Section}>
			<Flex fullWidth gap={32} flexWrap="wrap">
				<Link
					title="Search"
					type="button"
					onClick={AddResumes}
					className={styles.AddResume}
					href={'/dashboard/resume/build'}
				>
					<AddResume />
				</Link>

				<div className={styles.PastResume}>
					<div className={styles.PastResumeInfo}>
						<Heading.h6 weight={800} fontSize="16px">
							Adenekan_META_Resume
						</Heading.h6>
						<Flex gap={2} alignItems="center">
							<FileIcon />
							<Text size="sm" color="var(--text-gray-light)">
								Built Feb 23, 2024
							</Text>
						</Flex>{' '}
					</div>
				</div>
			</Flex>
		</Flex.Column>
	);
}
