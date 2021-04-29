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

function modalClass(props) {
	const id = props.id
	const [data, setData] = useState([])

	if (id !== null && id !== -1 && data[0]?.classroom.id !== id) {
		console.log("fetc")
		fetch(`http://localhost:8080/classmanager/classroom/${id}/students`)
			.then((r) => r.json())
			.then((json) => {setData(json)});
	}
	
	console.log(data);
	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Students List</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					
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

export default modalClass;