import { Button, Box } from "@chakra-ui/react"
import { useState } from "react"
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

function modelStudent(props) {
	const id = props.studentId;
	const [student, setData] = useState({ id: "", name: "", lastName: "", sidiCode: "", taxCode: "", classroom: { id: -2, name: "", grade: "" } })

	if (id !== null && id !== -1 && student.id === "") {
		fetch(`http://localhost:8080/classmanager/students/${id}`)
			.then((r) => r.json())
			.then((d) => setData(d));
	}

	return (
		<Modal isOpen={props.isOpenEdit} onClose={props.onCloseEdit}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Student</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Box>
						<b>{student.name} {student.lastName}</b>
						<p>{student.sidiCode}</p>
						<p>{student.taxCode}</p>
						<br />
						<p>{student.classroom.grade} {student.classroom.name}</p>
					</Box>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={props.onCloseEdit}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default modelStudent