package it.plansoft.classmanager.service;

import org.springframework.stereotype.Service;

import it.plansoft.classmanager.model.Student;
import it.plansoft.classmanager.repository.StudentRepository;
import it.plansoft.classmanager.service.interfaces.IStudentService;

@Service
public class StudentService  extends BaseCrudService<StudentRepository, Student, Long> implements IStudentService<Student> {

	public StudentService(StudentRepository repository) {
		super(repository);
	}

}
