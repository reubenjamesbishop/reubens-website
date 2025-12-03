import { Space } from "@mantine/core";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import ProjectCard from "../../common/ProjectCard/ProjectCard";
import { projects } from "../../../data/projects";
import projectsImage from "../../../assets/oc-growing.svg";

export default function ProjectsSection() {
  return (
    <>
      <SectionTitle
        title="My projects"
        image={projectsImage}
        subtitle="A couple of interesting things i've worked on"
      />
      {projects.map((project, index) => (
        <div key={project.title}>
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            link={project.link}
          />
          {index < projects.length - 1 && <Space h="xl" />}
        </div>
      ))}
    </>
  );
}

