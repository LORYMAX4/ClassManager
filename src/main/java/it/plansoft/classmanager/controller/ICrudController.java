package it.plansoft.classmanager.controller;

import java.util.List;
import java.util.Optional;

public interface ICrudController<MODEL, ID> extends IController {

	public List<MODEL> getAll();
	
	public Optional<MODEL> getById(ID id);
	
	public MODEL update(MODEL model, ID id);
	
	public MODEL add(MODEL model);
	
	public void deleteById(ID id);
}