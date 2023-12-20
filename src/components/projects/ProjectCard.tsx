import { Project } from "@/lib/types/general";
import React, { FC } from "react";
import { CheckIcon } from "lucide-react";
import ProjectCardLinks, { IconType } from "./ProjectCardLinks";
import Image from "next/image";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	const { github, website, title, description, image, features } = project;

	return (
		<div className="rounded-md border bg-card shadow-sm overflow-hidden relative">
			<ProjectCardLinks
				linksWithIcons={[
					{ link: github || "", icon: IconType.GITHUB },
					{ link: website || "", icon: IconType.WEBSITE },
				]}
			/>
			<div className="p-8 flex flex-col gap-5 ">
				<h3 className="h3 font-bold">{title}</h3>
				<p className="text-card-foreground">{description}</p>
				{!!features?.length && (
					<ul className="flex flex-col">
						{features.map((feature, index) => (
							<li key={index} className="inline-flex gap-2 items-center sm:items-start dark:text-muted-foreground text-card-foreground">
								<CheckIcon className="w-4 h-4 text-foreground sm:hidden " />
								<span className="lg:hidden">-</span>{feature}
							</li>
						))}
					</ul>
				)}
			</div>
			<a href={website} target="_blank">
				<Image
					alt={title}
					src={image}
					placeholder="blur"
					className="w-full h-auto rounded-b-md grayscale opacity-50 hover:opacity-100 transition-opacity ease-in-out"
					sizes="100vw"
					quality={100}
				/>
			</a>
		</div>
	);
};

export default ProjectCard;
