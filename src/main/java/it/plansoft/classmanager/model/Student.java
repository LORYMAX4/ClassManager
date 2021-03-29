package it.plansoft.classmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student extends IDModel<Long> {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "NAME", nullable = false)
	private String name;

	@Column(name = "SURNAME", nullable = false)
	private String lastName;

	@Column(name = "SIDI_CODE", nullable = false)
	private String sidiCode;

	@Column(name = "TAX_CODE", nullable = false)
	private String taxCode;

	@ManyToOne()
	@JoinColumn(name = "CLASS_ID", nullable = false)
	private Classroom classroom;

	public Student() {
	}

	public Student(Long id, String name, String lastName, String sidiCode, String taxCode, Classroom classroom) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.sidiCode = sidiCode;
		this.taxCode = taxCode;
		this.classroom = classroom;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getLastName() {
		return lastName;
	}

	public String getSidiCode() {
		return sidiCode;
	}

	public String getTaxCode() {
		return taxCode;
	}

	public Classroom getClassroom() {
		return classroom;
	}
	
}