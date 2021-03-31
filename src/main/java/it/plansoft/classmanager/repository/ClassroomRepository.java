package it.plansoft.classmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import it.plansoft.classmanager.model.Classroom;


@Repository

public interface ClassroomRepository extends JpaRepository<Classroom, Long>{

}