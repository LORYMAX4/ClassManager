package it.plansoft.classmanager.model;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class IDModel<ID> {
	
	public abstract ID getId();
}