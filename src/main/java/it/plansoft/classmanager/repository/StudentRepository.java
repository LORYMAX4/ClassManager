package it.plansoft.classmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.plansoft.classmanager.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
