package org.sid.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data  @AllArgsConstructor  @NoArgsConstructor
public class Notification {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idN ;
	private String title ;
	private String text ;
	private Long idU;
}
