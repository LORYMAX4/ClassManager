import { Button } from "@chakra-ui/react"
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
  } from "@chakra-ui/react"
import StudentForm from "./studentForm";

function deleteAllert(props) {
	return (
		<AlertDialog isOpen={props.isOpenDel} onClose={props.onCloseDel}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Customer
						</AlertDialogHeader>
					<AlertDialogBody>
						Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={props.onCloseDel}>
							Cancel
						</Button>
						<Button colorScheme="red" onClick={props.deleteStudent} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

export default deleteAllert