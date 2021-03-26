package it.plansoft.classmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import it.plansoft.classmanager.service.interfaces.ICrudService;


public class BaseCrudService<REPOSITORY extends JpaRepository<MODEL, ID>, MODEL, ID> implements ICrudService<MODEL, ID> {

	@Autowired
    protected REPOSITORY repository;

    public BaseCrudService(REPOSITORY repository) {
		this.repository = repository;
	}

	@Override
    public List<MODEL> findAll() {
        return repository.findAll();
    }

    @Override
    public Page<MODEL> findAll(Pageable page) {
        return repository.findAll(page);
    }

    @Override
    public Optional<MODEL> findById(ID id) {
        return repository.findById(id);
    }

    @Override
    public MODEL save(MODEL model) {
        return repository.save(model);
    }

    @Override
    public void delete(MODEL model) {
        repository.delete(model);
    }

    @Override
    public void deleteById(ID id) {
        repository.deleteById(id);
    }

    @Override
    public MODEL update(MODEL model) {
        return repository.save(model);
    }
}