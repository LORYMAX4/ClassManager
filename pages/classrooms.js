import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react"
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/layout";
import { FaTable, FaUsers } from "react-icons/fa";
import { useState } from "react"
import ModalClass from "./classrooms/modalClass"
import Link from "next/link";

function Classrooms(props) {
	let classrooms = [];
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [classId, setClassId] = useState(-1)

	for (let i = 0; i < props.data.length; i++) {
		let classroom = props.data[i];
		let classSection = classroom.section || classroom.name;
		let classGrade = classroom.year || classroom.section;
		classrooms.push((
			<Box key={i} className="card">
				<SimpleGrid columns={2} spacing={5}>
					<Box>
						<IconButton icon={<FaTable />} />
						<h3 style={{ marginLeft: '10px', display: 'inline-block' }}>{classGrade}{classSection}</h3>
						<p><small>{classroom.taxCode}</small></p>
					</Box>
					<Box style={{ textAlign: "right" }}>
						<IconButton bg="blue.400" color="white" marginRight={3} aria-label="Get" icon={<FaUsers />} onClick={() => { setClassId(classroom.id); onOpen(); }} />
					</Box>
				</SimpleGrid>
			</Box>
		));
	}

	return (
		<Container maxW="2xl" centerContent>
			<Text fontSize="2em" align="center">Classrooms</Text>
			<SimpleGrid columns={1} spacing={1}>
				{classrooms}
			</SimpleGrid>

			<ModalClass isOpen={isOpen} onClose={onClose} id={classId} />
		</Container>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`http://localhost:8080/classmanager/classroom/`)
	let data = await res.json()

	if (!data) {
		return {
			notFound: true,
		}
	}
	data = data;

	return {
		props: { data }, // will be passed to the page component as props
	}
}

export default Classrooms;
