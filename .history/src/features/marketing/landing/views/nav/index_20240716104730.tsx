import Image from 'next/image';
import Link from 'next/link';

import { LandingHeading } from '../../components';

import { CallToAction, Text } from '@labs/components';

import { navs } from './data';
import styles from './nav.module.scss';

export default function Nav() {
	return (
		<section
			className={`${styles.gradientBackground} flex items-center w-full py-[.5rem]`}
		>
			<div className="flex">
				<Image
					src=''
					alt='Logo'
					width="50"
					height="50"
					className="rounded-3xl mb-9 aspect-square"
				/>
			</div>
			<div className="flex justify-center mt-10 ">
				<CallToAction variant="clear" size="lg" className="!text-[#000] flex ">
					Sign in
				</CallToAction>

				<CallToAction
					variant="primary"
					size="lg"
					className="!text-[#fff] flex "
				>
					Get Started Now
				</CallToAction>
			</div>
		</section>
	);
}