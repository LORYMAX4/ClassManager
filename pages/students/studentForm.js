import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button
} from "@chakra-ui/react"
import { useState } from "react";


function studentForm(props) {
	const id = props.id;
	const [data, setData] = useState({ id: "", name: "", lastName: "", sidiCode: "", taxCode: "" })

	function handleChange(e) {
		//data[e.target.name] = e.target.value;
		setData((prevState) => {
			const newState = Object.assign({}, prevState);
			newState[e.target.name] = e.target.value;
			return newState;
		});
		console.log(data);
	}

	function submitData(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		let jsonObj = Object.fromEntries(formData);
		jsonObj.id = id;
		let json = JSON.stringify(jsonObj);

		console.log(json);
		
		fetch(`http://localhost:8080/classmanager/students/${id}`, {
			method: 'POST',
			body: json
		})
	}

	if (id !== null && data.id === "" && id !== -1) {
		const res = fetch(`http://localhost:8080/classmanager/students/${id}`).then((r) => {
			r.json().then((d) => {
				setData(d);
			});
		});
	}

	return (
		<form>
			<FormControl id="name">
				<FormLabel>Nome</FormLabel>
				<Input type="text" name="name" value={data.name} onChange={handleChange} />
			</FormControl>
			<FormControl id="lastName">
				<FormLabel>Cognome</FormLabel>
				<Input type="text" name="lastName" value={data.lastName} onChange={handleChange} />
			</FormControl>
			<FormControl id="sidiCode">
				<FormLabel>Codice SIDI</FormLabel>
				<Input type="text" name="sidiCode" value={data.sidiCode} onChange={handleChange} />
			</FormControl>
			<FormControl id="taxCode">
				<FormLabel>Codice fiscale</FormLabel>
				<Input type="text" name="taxCode" value={data.taxCode} onChange={handleChange} />
			</FormControl>
			<Button onSubmit={submitData}>
				Aggiorna
			</Button>
		</form>
	);
}




export default studentForm;