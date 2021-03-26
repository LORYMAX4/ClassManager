*package it.plansoft.classmanager.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class IDModel<ID> {
	
	@Id
	@GeneratedValue
	protected ID id;

	public IDModel() {
	}

	public IDModel(ID id) {
		this.id = id;
	}

	public ID getId() {
		return id;
	}

	public void setId(ID id) {
		this.id = id;
	}
}