package org.sid.services;

import java.util.List;

import org.sid.entities.Bid;
/*import org.sid.entities.Group;*/
import org.sid.entities.User;

public interface BidService {
	Bid saveBid(Bid bid);

	Bid maxPriceOfItem(Long itemId);

	List<Bid> findAllByUserId(Long userId);
}
