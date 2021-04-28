import {
	Text, IconButton, Container, useDisclosure, Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogOverlay,
} from "@chakra-ui/react"
import { SimpleGrid, Box } from "@chakra-ui/react"
import Link from "next/link";
import { FaPencilAlt, FaPlusCircle, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import modelStudent from "./students/modelStudent"
import StudentForm from "./students/studentForm";
import { useState } from "react"


const Students = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	let students = [];

	const [formId, setstate] = useState(-1);
	const [deleteOpen, setopen] = useState(false);

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
						<IconButton bg="red.400" color="white" aria-label="Delete" icon={<FaTimes />} onClick={() => { setstate(student.id); setopen(true); }} />
					</Box>
				</SimpleGrid>
			</Box>
		));
	}


	function deleteStudent() {
		fetch(`http://localhost:8080/classmanager/students/${formId}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then((r) => {
			setopen(false);
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		})
	}

	return (
		<Container maxW="2xl" centerContent>
			<Text fontSize="2em" align="center">Students</Text>

			<Button onClick={() => { setstate(-1); onOpen(); }} leftIcon={<FaPlusCircle />} colorScheme="blue" variant="solid">
				Add student
			</Button>

			<SimpleGrid columns={1} spacing={1}>
				{students}
			</SimpleGrid>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Student</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<StudentForm id={formId} />
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
            			</Button>
						{/* <Button variant="ghost">Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
			<AlertDialog isOpen={deleteOpen} onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button onClick={() => { setopen(false); }}>
								Cancel
							</Button>
							<Button colorScheme="red" onClick={deleteStudent} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
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
