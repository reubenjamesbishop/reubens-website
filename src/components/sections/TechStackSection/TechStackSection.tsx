import { Text, Group } from "@mantine/core";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import TechnologyPill from "../../common/TechnologyPill/TechnologyPill";
import { technologies } from "../../../data/technologies";

export default function TechStackSection() {
  return (
    <>
      <SectionTitle title="My Favourite Tech" image={""} />
      {technologies.map((category) => (
        <div key={category.category}>
          <Text c="dimmed">{category.category}</Text>
          <Group gap={"xs"}>
            {category.technologies.map((tech) => (
              <TechnologyPill key={tech} name={tech} />
            ))}
          </Group>
        </div>
      ))}
    </>
  );
}

