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
	
	//@ManyToOne
	//@JoinColumn(name = "CLASS_ID")
	//private Class classId;
}
