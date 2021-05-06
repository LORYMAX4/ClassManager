package it.plansoft.classmanager.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.plansoft.classmanager.model.Classroom;
import it.plansoft.classmanager.model.Student;
import it.plansoft.classmanager.service.ClassroomService;

@RestController
@CrossOrigin
@RequestMapping("/classroom")
public class ClassroomController {

	@Autowired
	private ClassroomService service;

	@GetMapping("/")
	public List<Classroom> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public Optional<Classroom> getById(@PathVariable Long id) {
		return service.findById(id);
	}

	@GetMapping("/{id}/students")
	public List<Student> getStudentsByClass(@PathVariable Long id) {
		Classroom c = service.findById(id).orElseThrow(() -> new RuntimeException());
		return c.getStudents().stream()
				.sorted((a,b)-> a.getLastName().compareTo(b.getLastName()))
				.collect(Collectors.toList());
	}

	@GetMapping("/search")
	public Optional<Classroom> getByGradeName(@RequestParam int grade, @RequestParam String name) {
		return service.findByGradeName(grade, name);
	}
}
