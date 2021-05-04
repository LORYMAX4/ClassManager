import { Text, Container, useDisclosure, Button } from "@chakra-ui/react"
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from "react"
import ModelForm from "./students/modelForm"
import StudentsList from "./students/studenstList";

const Students = (props) => {
	const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
	const [formId, setFormid] = useState(-1);

	return (
		<Container maxW="2xl" centerContent>
			<Text fontSize="2em" align="center">Students</Text>
			<Button onClick={() => { setFormid(-1); onOpenEdit(); }} leftIcon={<FaPlusCircle />} colorScheme="blue" variant="solid">
				Add student
			</Button>
			<StudentsList data={props.data} />
			<ModelForm isOpenEdit={isOpenEdit} onCloseEdit={onCloseEdit} studentId={formId} />
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
		props: { data }
	}
	
}

export default Students;
