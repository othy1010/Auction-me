package org.sid.entities;

import java.util.Date;

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
public class Planning {
		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long idP ;
		@Temporal(TemporalType.DATE)
		private Date startDate ;
		@Temporal(TemporalType.DATE)
		private Date endDate ;
		private Long idG;
}
