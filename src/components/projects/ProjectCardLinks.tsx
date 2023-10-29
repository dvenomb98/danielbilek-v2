import { EyeIcon, GithubIcon } from "lucide-react";
import React, { FC } from "react";
import { Button } from "../ui/Button";

export enum IconType {
	GITHUB = "github",
	WEBSITE = "website",
}

const mapIconsToType = {
	[IconType.GITHUB]: GithubIcon,
	[IconType.WEBSITE]: EyeIcon,
};

interface ProjectCardLinksProps {
	linksWithIcons: {
		link: string;
		icon: IconType;
	}[];
}

const ProjectCardLinks: FC<ProjectCardLinksProps> = ({ linksWithIcons }) => {
	if (!linksWithIcons.length) return null;
	return (
		<div className="flex gap-2 p-2">
			{linksWithIcons.map(({ link, icon }) => {
				const CorrectIcon = mapIconsToType[icon];
				return (
					<>
						{!!link ? (
							<Button asChild variant="outline">
								<a href={link} target="_blank">
									<CorrectIcon className="w-4 h-4" />
								</a>
							</Button>
						) : (
							<Button disabled variant="outline">
								<CorrectIcon className="w-4 h-4" />
							</Button>
						)}
					</>
				);
			})}
		</div>
	);
};

export default ProjectCardLinks;
