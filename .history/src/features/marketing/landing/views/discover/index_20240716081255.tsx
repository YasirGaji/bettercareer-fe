import { Heading, Text, CallToAction } from '@labs/components';

import styles from './discover.module.scss';

export default function Discover() {
	return (
		<div className={styles.ElevateCTAWrapper}>
			<div className="">
				<Heading
					weight={500}
					fontSize="40px"
					color="white"
					className="cta-header"
				>
					Ready to Elevate Your Career?
				</Heading>
			</div>

			<CallToAction variant="secondary" size="md" className="!text-[#3F4C58]">
				Learn More
			</CallToAction>
		</div>
	);
}