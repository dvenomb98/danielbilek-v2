import React, { FC, ReactNode } from "react";

interface SectionHeaderProps {
	title: string | ReactNode;
	description: string | ReactNode;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="h1">{title}</h1>
			<h4 className="h4 text-gray">{description}</h4>
		</div>
	);
};

export default SectionHeader;
