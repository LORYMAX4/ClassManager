import { IconButton, Container, useDisclosure } from "@chakra-ui/react"
import { SimpleGrid, Box } from "@chakra-ui/react"
import { FaPencilAlt, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { useState } from "react"
import DeleteAllert from "./deleteAllert";
import ModelStudent from "./modelStudent"
import ModelForm from "./modelForm"

const StudentsList = (props) => {
	const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
	const { isOpen: isOpenDel, onOpen: onOpenDel, onClose: onCloseDel } = useDisclosure()
	const { isOpen: isOpenShow, onOpen: onOpenShow, onClose: onCloseShow } = useDisclosure()
	const [formId, setFormid] = useState(-1);
	let students = [];

	const maxLength = props.data.length > 50 ? 50 : props.data.length;
	for (let i = 0; i < maxLength; i++) {
		let student = props.data[i];
		students.push((
			<Box key={i} className="card">
				<SimpleGrid columns={2} spacing={5}>
					<Box>
						<p> {student.name} {student.lastName}</p>
						<p> <small>{student.taxCode}</small></p>
					</Box>
					<Box style={{ textAlign: "right" }}>
						<IconButton bg="blue.400" color="white" marginRight={3} aria-label="Get" icon={<FaSearch />} onClick={() => { setFormid(student.id); onOpenShow(); }} />
						<IconButton bg="green.400" color="white" marginRight={3} aria-label="Update" icon={<FaPencilAlt />} onClick={() => { setFormid(student.id); onOpenEdit(); }} />
						<IconButton bg="red.400" color="white" aria-label="Delete" icon={<FaTimes />} onClick={() => { setFormid(student.id); onOpenDel(); }} />
					</Box>
				</SimpleGrid>
			</Box>
		));
	}

	return (
		<Container maxW="2xl" centerContent>
			<SimpleGrid columns={1} spacing={1}>
				{students}
			</SimpleGrid>

			<ModelForm isOpenEdit={isOpenEdit} onCloseEdit={onCloseEdit} studentId={formId} />
			<DeleteAllert isOpenDel={isOpenDel} onCloseDel={onCloseDel} studentId={formId} />
			<ModelStudent isOpenEdit={isOpenShow} onCloseEdit={onCloseShow} studentId={formId} />
		</Container>
	);
}

export default StudentsList;

