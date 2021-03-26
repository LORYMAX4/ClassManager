package it.plansoft.classmanager.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import it.plansoft.classmanager.service.BaseCrudService;
import it.plansoft.model.IDModel;

public abstract class BaseCrudController<SERVICE extends BaseCrudService, MODEL extends IDModel<ID>, ID>
		implements ICrudController<MODEL, ID> {

	protected SERVICE service;

	public BaseCrudController(SERVICE service) {
		this.service = service;
	}

	@Override
	@GetMapping("/")
	public List<MODEL> getAll() {
		return service.findAll();
	}

	@Override
	@GetMapping("/{id}")
	public Optional<MODEL> getById(@PathVariable ID id) {
		return service.findById(id);
	}

	@Override
	@PostMapping("/")
	public MODEL add(@RequestBody MODEL model) {
		return (MODEL) service.save(model);
	}

	@Override
	@PutMapping("/{id}")
	public MODEL update(@RequestBody MODEL model, @PathVariable ID id) {
		return (MODEL) service.update(model);
	}

	@Override
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable ID id) {
		service.deleteById(id);
	}
}