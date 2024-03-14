import { Box, Text } from "@mantine/core";

interface TechnologyPillProps {
  thing: string;
}

export default function TechnologyPill(props: TechnologyPillProps) {
  return (
    <Box
      px={"lg"}
      py={"5px"}
      style={{
        border: "1px solid black",
        borderRadius: "100px",
      }}
    >
      <Text size="sm">{props.thing}</Text>
    </Box>
  );
}
