package it.plansoft.classmanager.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.plansoft.classmanager.repository.ClassroomRepository;
import it.plansoft.classmanager.model.Classroom;

@Service
public class ClassroomService extends BaseCrudService<ClassroomRepository, Classroom, Long>{

	@Autowired
	public ClassroomService(ClassroomRepository classRepository) {
		super(classRepository);
	}

	public Optional<Classroom> findByGradeName(int grade, String name) {
		return repository.findByNameAndGrade(name, grade);
	}
}