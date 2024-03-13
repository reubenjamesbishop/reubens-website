import { Group, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./HeaderMenu.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/projects", label: "Projects" },
  { link: "/blog", label: "Blog" },
  { link: "/contact", label: "Contact" },
];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
