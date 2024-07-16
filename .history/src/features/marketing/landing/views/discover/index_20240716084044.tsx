import Image from 'next/image';

import { Heading, CallToAction } from '@labs/components';

import styles from './discover.module.scss';

import { LandingHeading } from '../../components';

export default function Discover() {
	return (
		<div className={styles.ElevateCTAWrapper}>
			<div className="">
				<LandingHeading
					mainText="Discover Your Dream Job and Access Thousands of Top Companies"
					color="white"
				/>
				<Heading
					weight={500}
					fontSize="50px"
					color="white"
					className="cta-header w-[856px] gap-4 "
				></Heading>
				<Image
					src="/images/landing/Frame 1000001675.png"
					alt="icon"
					width={1872}
					height={104}
					className=""
				/>
				<Image
					src="/images/landing/Frame 1000001676.png"
					alt="icon"
					width={1865}
					height={104}
					className=""
				/>
				<CallToAction
					variant="secondary"
					size="md"
					className="!text-[#3F4C58] flex "
				>
					Learn More
				</CallToAction>
			</div>
		</div>
	);
}