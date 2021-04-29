import { useState } from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react"
import {
	FormControl,
	FormLabel,
	Input,
	Button
} from "@chakra-ui/react"

function studentForm(props) {
	const id = props.id;
	const [data, setData] = useState({ id: "", name: "", lastName: "", sidiCode: "", taxCode: "", classroom: { id: -2, name: "", grade: "" } })

	if (id !== null && id !== -1 && data.id === "") {
		const res = fetch(`http://localhost:8080/classmanager/students/${id}`).then((r) => {
			r.json().then((d) => {
				setData(d);
			});
		});
	}

	function handleChange(e) {
		setData((prevState) => {
			const newState = Object.assign({}, prevState);
			const key = e.target.name;
			console.log(key);
			if(key.includes("classroom")){
				const fields = key.split('.');
				newState[fields[0]][fields[1]] = e.target.value;
			} else {
				newState[key] = e.target.value;
			}
			return newState;
		});
	}

	function submitData(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		let jsonObj = Object.fromEntries(formData);
		jsonObj.id = id;
		jsonObj.classroom = data.classroom;
		const json = JSON.stringify(jsonObj);

		fetch(`http://localhost:8080/classmanager/students/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: json
		}).then((r) => {
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		})
	}

	return (
		<form onSubmit={submitData}>
			<VStack spacing={5} >
				<FormControl id="name">
					<FormLabel>Name</FormLabel>
					<Input type="text" name="name" value={data.name} onChange={handleChange} />
				</FormControl>
				<FormControl id="lastName">
					<FormLabel>Lastname</FormLabel>
					<Input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
				</FormControl>
				<FormControl id="sidiCode">
					<FormLabel>SIDI</FormLabel>
					<Input type="text" name="sidiCode" value={data.sidiCode} onChange={handleChange} />
				</FormControl>
				<FormControl id="taxCode">
					<FormLabel>Tax Code</FormLabel>
					<Input type="text" name="taxCode" value={data.taxCode} onChange={handleChange} />
				</FormControl>
				<FormControl id="name">
					<FormLabel>Class</FormLabel>
					<Input type="text" name="classroom.name" value={data.classroom.name} onChange={handleChange} />
				</FormControl>
				<FormControl id="grade">
					<FormLabel>Grade</FormLabel>
					<Input type="text" name="classroom.grade" value={data.classroom.grade} onChange={handleChange} />
				</FormControl>
				<Button type="submit">
					Update
				</Button>
			</VStack>
		</form>
	);
}

export default studentForm;