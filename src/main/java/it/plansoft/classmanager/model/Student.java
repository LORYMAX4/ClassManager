package it.plansoft.classmanager.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Students")
@Table(name = "students")
public class Student extends IDModel<Long> {

	@Id
	@Column(name = "student_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "sidi_code", nullable = false)
	private String sidiCode;

	@Column(name = "tax_code", nullable = false)
	private String taxCode;
	
	@ManyToOne
	@JoinColumn(name = "class_id")
	private Class classId;

}
