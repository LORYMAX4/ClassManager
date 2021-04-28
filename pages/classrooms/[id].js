import { useRouter } from 'next/router'

const Classroom = (props) => {
	const router = useRouter()
	const { id } = router.query

	return (<>
		<p>Classroom id: {id}</p>
	</>)
}

export default Classroom