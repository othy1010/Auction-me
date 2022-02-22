package org.sid.entities;

import java.util.ArrayList;
import java.util.Date;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	@Column(length = 50)
	private String username;
	private String token;
	@Column(length = 50)
	private String firstName;
	@Column(length = 50)
	private String secondName;
	private int sexe;
	@Column(length = 50)
	private String country;
	@Column(length = 50)
	private String city;
	@Column(length = 200)
	private String address;
	@Temporal(TemporalType.DATE)
	private Date birthday;
	@Column(length = 50)
	private String birthplace;
	@Column(length = 10)
	private int phone;
	@Column(length = 50)
	private String email;
	@Column(length = 50)
	private String password;
	private Boolean isAdmin;
	private Boolean isConfirmed;
	@Column(length = 50)
	private String paymentAccount;
	@Fetch(value = FetchMode.SUBSELECT)
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "bidId")
	private List<Bid> bids = new ArrayList<Bid>();
	@Fetch(value = FetchMode.SUBSELECT)
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "paymentId")
	private List<Payment> payments = new ArrayList<Payment>();

	/*
	 * @ManyToOne(fetch = FetchType.LAZY)
	 * 
	 * @JoinColumn(name = "idG")
	 * private Groupe groupe;
	 */

}
