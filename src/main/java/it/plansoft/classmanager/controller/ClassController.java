package it.plansoft.classmanager.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.plansoft.classmanager.service.ClassService;
import it.plansoft.classmanager.model.Class;

@RestController
@RequestMapping("/course")
public class ClassController extends BaseCrudController<ClassService, Class, Long> {


	@Autowired
	public ClassController(ClassService service) {
		super(service);
	}
}
