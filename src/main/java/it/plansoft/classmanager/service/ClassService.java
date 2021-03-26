package it.plansoft.classmanager.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.plansoft.classmanager.repository.ClassRepository;
import it.plansoft.classmanager.model.Class;

@Service
public class ClassService extends BaseCrudService<ClassRepository, Class, Long>{

	@Autowired
	public ClassService(ClassRepository classRepository) {
		super(classRepository);
	}
}