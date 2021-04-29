import { Button } from "@chakra-ui/react"
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import StudentForm from "./studentForm";

function modelStudent(props) {
	return (
		<Modal isOpen={props.isOpenEdit} onClose={props.onCloseEdit}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Student</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<StudentForm id={props.studentId} />
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