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
import { FaPencilAlt, FaPlusCircle, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { useState } from "react"
import Link from "next/link";
import DeleteAllert from "./students/deleteAllert";
import ModelStudent from "./students/modelStudent"

const Students = (props) => {
	const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
	const { isOpen: isOpenDel, onOpen: onOpenDel, onClose: onCloseDel } = useDisclosure()
	// Used as param for the Modal
	const [formId, setFormid] = useState(-1);
	let students = [];

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
						<IconButton bg="green.400" color="white" marginRight={3} aria-label="Update" icon={<FaPencilAlt />} onClick={() => { setFormid(student.id); onOpenEdit(); }} />
						<IconButton bg="red.400" color="white" aria-label="Delete" icon={<FaTimes />} onClick={() => { setFormid(student.id); onOpenDel(); }} />
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
			onCloseDel();
			setTimeout(() => {
				window.location.reload();
			}, 500);
		})
	}

	return (
		<Container maxW="2xl" centerContent>
			<Text fontSize="2em" align="center">Students</Text>

			<Button onClick={() => { setFormid(-1); onOpenEdit(); }} leftIcon={<FaPlusCircle />} colorScheme="blue" variant="solid">
				Add student
			</Button>

			<SimpleGrid columns={1} spacing={1}>
				{students}
			</SimpleGrid>

			<ModelStudent isOpenEdit={isOpenEdit} onCloseEdit={onCloseEdit} studentId={formId} />
			<DeleteAllert isOpenDel={isOpenDel} onCloseDel={onCloseDel} deleteStudent={deleteStudent} />
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
