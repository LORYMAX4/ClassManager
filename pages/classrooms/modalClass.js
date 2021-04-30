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

import { useState } from "react"
import Student from "../students";
import StudentsList from "../students/studenstList";

function ModalClass(props) {
	const id = props.id
	const [data, setData] = useState([])

	if (id !== null && id !== -1 && data.length === 0) {
		fetch(`http://localhost:8080/classmanager/classroom/${id}/students`)
			.then((r) => {
				if (!r.ok) throw new Error(r.statusText);
				return r.json()
			})
			.then((json) => { setData(json) });
	}

	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose} size="xl" scrollBehavior="inside">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Students List</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<StudentsList data={data} />
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={props.onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)



}

export default ModalClass;