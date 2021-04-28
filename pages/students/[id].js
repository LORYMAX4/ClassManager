import { useRouter } from 'next/router'

//import { useDisclosure, Button } from "@chakra-ui/react"

const StudentUpdate = () => {

	const router = useRouter()
	const { id } = router.query

	return <div>ciao</div>
}

export default StudentUpdate;