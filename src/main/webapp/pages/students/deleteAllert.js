import { Button } from "@chakra-ui/react"
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from "@chakra-ui/react"

function DeleteAllert(props) {

	function deleteStudent() {
		fetch(`http://localhost:8080/classmanager/students/${props.studentId}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then((r) => {
			props.onCloseDel();
			setTimeout(() => {
				window.location.reload();
			}, 500);
		})
	}

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
						<Button colorScheme="red" onClick={deleteStudent} ml={3}>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}

export default DeleteAllert