package it.plansoft.classmanager.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

import it.plansoft.classmanager.model.Classroom;
import it.plansoft.classmanager.repository.ClassroomRepository;

@EnableSpringDataWebSupport
@RunWith(MockitoJUnitRunner.class)
public class ClassroomServiceTest {

	@Mock
	ClassroomRepository repository;
	@InjectMocks
	ClassroomService service;

	final Long id = 12L;
	final int grade = 1;
	final String name = "myClass";

	@Test
	public void testFindByGradeName() {
		Optional<Classroom> testClassroom = Optional.of(new Classroom(name, grade));
		Optional<Classroom> expectedClassroom = Optional.of(new Classroom(name, grade));
		when(repository.findByNameAndGrade(name, grade)).thenReturn(testClassroom);

		assertEquals(expectedClassroom, service.findByGradeName(grade, name));
	}

	@Test
	public void testFindById() {
		Optional<Classroom> testClassroom = Optional.of(new Classroom(name, grade));
		Optional<Classroom> expectedClassroom = Optional.of(new Classroom(name, grade));
		when(repository.findById(id)).thenReturn(testClassroom);

		assertEquals(expectedClassroom, service.findById(id));
	}

	@Test
	public void testFindAll() {
		Classroom c1 = new Classroom("class1", 1);
		Classroom c2 = new Classroom("class2", 2);
		List<Classroom> expectedClasses = Arrays.asList(c1, c2);
		when(repository.findAll()).thenReturn(Arrays.asList(c1, c2));

		List<Classroom> actualClasses = service.findAll();

		assertEquals(expectedClasses, actualClasses);
	}

	@Test
	public void testFindAllPage() {
		Classroom c1 = new Classroom("class1", 1);
		Classroom c2 = new Classroom("class2", 2);
		List<Classroom> classes = Arrays.asList(c1, c2);
		Page<Classroom> expectedPageClasses = new PageImpl<Classroom>(classes);
		Pageable pageable = PageRequest.of(0, 2);
		when(repository.findAll(pageable)).thenReturn(new PageImpl<Classroom>(classes));

		Page<Classroom> actualPageClasses = service.findAll(pageable);

		assertEquals(expectedPageClasses, actualPageClasses);
	}

	@Test
	public void testSaveOrder() {
		Classroom testClassroom = new Classroom(name, grade);
		when(repository.save(testClassroom)).thenReturn(testClassroom);

		assertEquals(testClassroom, service.save(testClassroom));
	}

	@Test
	public void testDeleteById() {
		service.deleteById(id);

		verify(repository).deleteById(id);
	}

	@Test
	public void testDelete() {
		Classroom testClassroom = new Classroom(name, grade);

		service.delete(testClassroom);

		verify(repository).delete(testClassroom);
	}

}
