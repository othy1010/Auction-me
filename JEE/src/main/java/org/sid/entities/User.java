package org.sid.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data  @AllArgsConstructor  @NoArgsConstructor
public class User {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idU ;
	private String token;
	@Column(length = 50)
	private String firstName;
	@Column(length = 50)
	private String secondName;
	private int sexe ;
	@Column(length = 50)
	private String country;
	@Column(length = 50)
	private String city;
	@Column(length = 200)
	private String address;
	@Temporal(TemporalType.DATE)
	private Date birthday ;
	@Column(length = 50)
	private String birthplace;
	@Column(length = 10)
	private String cin;
	private int phone ;
	@Column(length = 50)
	private String email;
	@Column(length = 50)
	private String password;
	@Column(length = 50)
	private String profil;
	/*@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idG")
	private Groupe groupe;*/
	private Long idG;
}
