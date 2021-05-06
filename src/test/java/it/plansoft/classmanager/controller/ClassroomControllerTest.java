package it.plansoft.classmanager.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import it.plansoft.classmanager.model.Classroom;
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
}
