import { useRouter } from 'next/router'

const Classroom = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Classroom: {id}</p>
}

export default Classroom