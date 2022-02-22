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
@Data  @AllArgsConstructor  @NoArgsConstructor
public class Item {
		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long itemId ;
		@Column(length = 50)
		private String itemName ;
		private float initialPrice ;
		private Long userId;
		/*@Fetch(value = FetchMode.SUBSELECT)
		@OneToMany(cascade = CascadeType.ALL , fetch=FetchType.EAGER)
		@JoinColumn(name="bidId")
		private List<Bid> bids = new ArrayList<Bid>();*/
		private Long categoryId;
		private Boolean isApprooved;
		private String title ;
		private String text ;		
}









