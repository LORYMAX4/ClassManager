import { Text, IconButton, Container } from "@chakra-ui/react"
import { SimpleGrid, Box } from "@chakra-ui/react"
import Link from "next/link";
import { FaPencilAlt, FaSearch, FaTimes, FaUser } from 'react-icons/fa';

function Students(props) {
  let students = [];

  for (let i = 0; i < props.data.length; i++) {
    let student = props.data[i];
    students.push((
      <Box className="card">
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <IconButton icon={<FaUser />} />
            <h3 style={{marginLeft: '10px', display: 'inline-block'}}>{student.name} {student.surname}</h3>
            <p><small>{student.taxCode}</small></p>
          </Box>
          <Box style={{textAlign: "right"}}>
            <Link href={"/students/" + student.id}>
              <IconButton bg="blue.400" color="white" marginRight={3} aria-label="Get" icon={<FaSearch />} />
            </Link>
            <IconButton bg="green.400" color="white" marginRight={3} aria-label="Update" icon={<FaPencilAlt />} />
            <IconButton bg="red.400" color="white" aria-label="Delete" icon={<FaTimes />} />
          </Box>
        </SimpleGrid>
      </Box>
    ));
  }

  return (
      <Container maxW="2xl" centerContent>
        <Text fontSize="2em" align="center">Students</Text>
        <SimpleGrid columns={1} spacing={1}>
          {students}
        </SimpleGrid>
      </Container>
    );
  }
  
export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:8080/classmanager/classrooms/1`)
  let data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  data = data.students || data;

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Students;
