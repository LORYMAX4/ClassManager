package it.plansoft.classmanager.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "CLASSES")
public class Classroom extends IDModel<Long> {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "NAME", nullable = false)
	private String name;
	@Column(name = "GRADE", nullable = false)
	private int grade;
	
	@JsonIgnore
	@OneToMany(mappedBy = "classroom")
	private Set<Student> students;

	public Classroom() {
	}

	public Classroom(String name, int grade) {
		this.name = name;
		this.grade = grade;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getGrade() {
		return grade;
	}

	public Set<Student> getStudents() {
		return students;
	}

	public void setStudents(Set<Student> students) {
		this.students = students;
	}
}