import SectionHeader from "@/components/shared/SectionHeader";
import { NextPage } from "next";
import React from "react";
import projects from "@/data/projects";
import Tabs from "@/components/ui/Tabs";
import ProjectCard from "@/components/projects/ProjectCard";

const content = projects.map((project, i) => ({
  value: i,
  label: project.type,
  children: <ProjectCard key={project.title} project={project} />,
}));

const ProjectsPage: NextPage = async () => {
  return (
    <>
      <SectionHeader
        title="Projects"
        description="Check out the latest projects i was involved on or created by myself"
      />
      <Tabs tabsContent={content} />
    </>
  );
};

export default ProjectsPage;
