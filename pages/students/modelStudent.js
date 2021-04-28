import { useDisclosure, Button } from "@chakra-ui/react"

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
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Modal isOpen={props.ms.isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
					<ModalBody>
						Ciao
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
            			</Button>
					{/* <Button variant="ghost">Secondary Action</Button> */}
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default modelStudent