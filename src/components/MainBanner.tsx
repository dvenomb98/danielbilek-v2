import React, { FC } from "react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { URLS } from "@/lib/consts/urls";
import SectionHeader from "./shared/SectionHeader";

const MainBanner: FC = () => {
	return (
		<section className="flex flex-col gap-5">
			<SectionHeader
				title={
					<>
						Shaping Digital Futures <br className="sm:hidden" /> with Expert Front End Engineering
					</>
				}
				description="Utilizing modern coding standards and cutting-edge technologies, I develop efficient,
				robust, and accessible front end solutions, ensuring seamless user interactions and a solid
				digital foundation for your business."
			/>
			<div className="flex gap-2 items-center">
				<Button asChild className="w-40" size="lg">
					<Link href={URLS.PROJECTS}>Projects</Link>
				</Button>
				<Button asChild variant="outline"  size="lg" className="w-40">
					<Link href={URLS.CONTACT}>Contact me</Link>
				</Button>
			</div>
		</section>
	);
};

export default MainBanner;
