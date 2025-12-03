import { Group, Text, Accordion } from "@mantine/core";

const charactersList = [
	{
		id: "unsw-grad-cert",
		label: "Graduate Certificate in Data Science",
		description: "UNSW | GPA: 7.00/7.00",
		content:
			"I'm currently working through a Graduate Certifcate of Data Science at while working full-time. I've learned about advanced statistics concepts, advanced SQL concepts and business intelligence with Tableau.",
	},

	{
		id: "adelaide-uni-cs",
		label: "Bachelor of Mathematical and Computer Sciences",
		description: "Adelaide University | GPA: 6.25/7.00",
		content:
			"I did a bachelor of Mathematical and Computer Science (majoring in Computer Science). I got to do lots of courses in Artifical Intelligence, Computer Vision and Statistical Machine Learning.",
	},

	{
		id: "adelaide-uni-eng",
		label: "Bachelor (Honours) of Mechanical Engineering",
		description: "Adelaide University | GPA: 6.25/7.00",
		content:
			"I did an Honours degree in Mechanical Engineering, with a research project in magnetostrictive energy harvesters. I was also on the Formula SAE, where I got to help out and build an electric formula-style race car.",
	},
];

interface AccordionLabelProps {
	label: string;
	description: string;
}

function AccordionLabel({ label, description }: AccordionLabelProps) {
	return (
		<Group>
			<div>
				<Text style={{ fontWeight: "bold" }}>{label}</Text>
				<Text size="sm" c="dimmed" fw={400}>
					{description}
				</Text>
			</div>
		</Group>
	);
}

export default function EducationAccordion() {
	const items = charactersList.map((item) => (
		<Accordion.Item
			value={item.id}
			key={item.label}
			style={{ border: "1px solid black" }}
			mb={"-1px"}
		>
			<Accordion.Control>
				<AccordionLabel {...item} />
			</Accordion.Control>
			<Accordion.Panel>
				<Text size="sm">{item.content}</Text>
			</Accordion.Panel>
		</Accordion.Item>
	));

	return (
		<>
			<Text>Degrees</Text>
			<Accordion chevronPosition="right" variant="contained">
				{items}
			</Accordion>
		</>
	);
}
