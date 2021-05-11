package it.plansoft.classmanager.model;

import javax.persistence.*;

@Entity
@Table(name = "STUDENTS")
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

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Student other = (Student) obj;

		if (classroom == null && other.classroom != null) {
			return false;
		} else if (!classroom.equals(other.classroom))
			return false;

		if (id == null && other.id != null) {
			return false;
		} else if (!id.equals(other.id))
			return false;

		if (lastName == null && other.lastName != null) {
			return false;
		} else if (!lastName.equals(other.lastName))
			return false;

		if (name == null && other.name != null) {
			return false;
		} else if (!name.equals(other.name))
			return false;

		if (sidiCode == null && other.sidiCode != null) {
			return false;
		} else if (!sidiCode.equals(other.sidiCode))
			return false;

		if (taxCode == null && other.taxCode != null) {
			return false;
		} else if (!taxCode.equals(other.taxCode))
			return false;

		return true;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", lastName=" + lastName + ", sidiCode=" + sidiCode
				+ ", taxCode=" + taxCode + ", classroom=" + classroom + "]";
	}

}