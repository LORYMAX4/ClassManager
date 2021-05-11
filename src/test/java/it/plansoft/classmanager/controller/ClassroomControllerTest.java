package it.plansoft.classmanager.controller;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import it.plansoft.classmanager.model.Classroom;
import it.plansoft.classmanager.model.Student;
import it.plansoft.classmanager.service.ClassroomService;

@RunWith(SpringRunner.class)
@WebMvcTest(ClassroomController.class)
public class ClassroomControllerTest {

	@Autowired
	private MockMvc mvc;
	@MockBean
	ClassroomService service;

	@Test
	public void testGetById() throws Exception {
		final long classId = 1;
		Classroom classroom = new Classroom("name", 1);

		when(this.service.findById(classId)).thenReturn(Optional.of(classroom));
		mvc.perform(get("/classroom/" + classId)).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.name", is(classroom.getName())))
				.andExpect(jsonPath("$.grade", is(classroom.getGrade())));
	}

	@Test
	public void testGetByGradeName() throws Exception {
		final int grade = 1;
		final String name = "class";
		Classroom classroom = new Classroom(name, grade);

		when(this.service.findByGradeName(grade, name)).thenReturn(Optional.of(classroom));
		mvc.perform(get("/classroom/search?grade=" + grade + "&name=" + name)).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.name", is(classroom.getName())))
				.andExpect(jsonPath("$.grade", is(classroom.getGrade())));
	}

	@Test
	public void testGetAll() throws Exception {
		Classroom c1 = new Classroom("class1", 1);
		Classroom c2 = new Classroom("class2", 2);
		List<Classroom> expectedClasses = Arrays.asList(c1, c2);
		
		when(this.service.findAll()).thenReturn(expectedClasses);
		MvcResult mvcResult = mvc.perform(get("/classroom/")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE)).andReturn();

		String jsonString = mvcResult.getResponse().getContentAsString();
		List<Classroom> actualClasses = new ObjectMapper().readValue(jsonString, new TypeReference<List<Classroom>>() {});
		assertEquals(expectedClasses, actualClasses);
	}
	
	@Test
	public void testGetStudentsByClass() throws Exception {
		final Long id = 1L;
		Student s1 = new Student(1L, "AAA", "AAA", "sidi1", "tax1", null);
		Student s2 = new Student(2L, "UUU", "BBB", "sidi2", "tax2", null);
		Student s3 = new Student(3L, "CCC", "BBB", "sidi3", "tax3", null);
		List<Student> expectedStudents = Arrays.asList(s1, s3, s2);
		Classroom classroom = new Classroom();
		classroom.setStudents(new ArrayList<Student>(Arrays.asList(s1, s2, s3)));
		
		when(this.service.findById(id)).thenReturn(Optional.of(classroom));
		MvcResult mvcResult = mvc.perform(get("/classroom/" + id + "/students")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE)).andReturn();

		String jsonString = mvcResult.getResponse().getContentAsString();
		List<Student> actualStudents = new ObjectMapper().readValue(jsonString, new TypeReference<List<Student>>() {});
		assertEquals(expectedStudents, actualStudents);
	}
	
	@Test
	public void testGetStudentsByClassNoClassFoundThrow() throws Exception {
		final Long id = 1L;
		
		when(this.service.findById(id)).thenReturn(Optional.empty());
		assertThatThrownBy(() -> mvc.perform(get("/classroom/" + id + "/students"))).hasCause(new RuntimeException());
	}
}
