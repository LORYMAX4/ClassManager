package it.plansoft.classmanager.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.plansoft.classmanager.model.Student;
import it.plansoft.classmanager.service.StudentService;

@CrossOrigin
@RestController
@RequestMapping("/students")
public class StudentController extends BaseCrudController<StudentService, Student, Long> {

	public StudentController(StudentService service) {
		super(service);
	}
}