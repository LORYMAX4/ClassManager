import {
	Text, IconButton, Container, useDisclosure, Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react"
import { SimpleGrid, Box } from "@chakra-ui/react"
import Link from "next/link";
import { FaPencilAlt, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import modelStudent from "./students/modelStudent"
import StudentForm from "./students/studentForm";
import {useState} from "react"


const Students = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	let students = [];
	let ms = { isOpen: false };

	const [formId, setstate] = useState(-1)

	//let formId = -1;

	for (let i = 0; i < 50; i++) {
		let student = props.data[i];
		students.push((
			<Box key={i} className="card">
				<SimpleGrid columns={2} spacing={5}>
					<Box>
						<IconButton icon={<FaUser />} />
						<h3 style={{ marginLeft: '10px', display: 'inline-block' }}>{student.name} {student.surname}</h3>
						<p><small>{student.taxCode}</small></p>
					</Box>
					<Box style={{ textAlign: "right" }}>
						<Link href={"/students/" + student.id}>
							<IconButton bg="blue.400" color="white" marginRight={3} aria-label="Get" icon={<FaSearch />} />
						</Link>
						<IconButton bg="green.400" color="white" marginRight={3} aria-label="Update" icon={<FaPencilAlt />} onClick={() => { setstate(student.id); onOpen(); }} />
						<IconButton bg="red.400" color="white" aria-label="Delete" icon={<FaTimes />} />
					</Box>
				</SimpleGrid>
			</Box>
		));
	}

	return (
		<Container maxW="2xl" centerContent>
			<Text fontSize="2em" align="center">Students</Text>
			<SimpleGrid columns={1} spacing={1}>
				{students}
			</SimpleGrid>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<StudentForm id={formId} />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
            			</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Container>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`http://localhost:8080/classmanager/students/`)
	let data = await res.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	data = data.students || data;
	return {
		props: { data }, // will be passed to the page component as props
	}
}

export default Students;
