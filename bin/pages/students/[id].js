import { useRouter } from 'next/router'

const StudentUpdate = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>StudentUpdate: {id}</p>
}

export default StudentUpdate