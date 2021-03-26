package it.plansoft.classmanager.service.interfaces;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

/**
 * interfaccia per i servizi CRUD
 * @param <MODEL>
 * @param <ID>
 */
public interface ICrudService<MODEL, ID> {

    List<MODEL> findAll();

    Page<MODEL> findAll(Pageable page);

    Optional<MODEL> findById(ID id);

    MODEL save(MODEL model);

    void delete(MODEL model);

    void deleteById(ID id);

    MODEL update(MODEL model);

}