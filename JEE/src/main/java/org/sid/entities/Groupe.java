package org.sid.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data  @AllArgsConstructor  @NoArgsConstructor 
public class Groupe {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_g")
	private Long idG;
	@Column(length=50)
	private String groupeName;
	private int numberOfU ;
	@OneToMany(cascade = CascadeType.ALL ,fetch=FetchType.EAGER) 
	@JoinColumn(name="idG")
	@Fetch(value = FetchMode.SUBSELECT)
	public List<User> users=new ArrayList<User>();
	@OneToMany(cascade = CascadeType.ALL , fetch=FetchType.EAGER)
	@JoinColumn(name="idG")
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Planning> plannings = new ArrayList<Planning>();
}
