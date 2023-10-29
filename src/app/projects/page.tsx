import SectionHeader from "@/components/shared/SectionHeader";
import { NextPage } from "next";
import React from "react";
import projects from "@/data/projects";
import Tabs from "@/components/ui/Tabs";
import ProjectCard from "@/components/projects/ProjectCard";

const triggers = [
	{
		value: "featured",
		label: "Featured",
	},
	{ value: "main", label: "Main" },
	{ value: "secondary", label: "Secondary" },
];

const ProjectsPage: NextPage = async () => {
	const content = projects.map((pr) => ({
		value: pr.type,
		children: <ProjectCard key={pr.title} project={pr} />,
	}));
	return (
		<>
			<SectionHeader
				title="Projects"
				description="Check out the latest projects i was involved on or created by myself"
			/>
			<Tabs tabsTrigger={triggers} tabsContent={content} />
		</>
	);
};

export default ProjectsPage;
