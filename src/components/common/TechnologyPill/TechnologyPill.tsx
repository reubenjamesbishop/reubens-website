import { Box, Text } from "@mantine/core";
interface TechnologyPillProps {
  name: string;
}
export default function TechnologyPill({ name }: TechnologyPillProps) {
  return (
    <Box
      px={"lg"}
      py={"5px"}
      style={{
        border: "1px solid black",
        borderRadius: "100px",
      }}
    >
      <Text size="sm">{name}</Text>
    </Box>
  );
}
