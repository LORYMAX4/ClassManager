package it.plansoft.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class Student extends IDModel<Long> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "last_name", nullable = false)
	private String lastName;
	
	@Column(name = "sidi_code", nullable = false)
	private String sidiCode;
	
	@Column(name = "tax_code", nullable = false)
	private String taxCode;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Long classId;
	
}
