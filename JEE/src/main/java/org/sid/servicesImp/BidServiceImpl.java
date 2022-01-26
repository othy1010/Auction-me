package org.sid.servicesImp;

import java.util.List;

import javax.crypto.spec.SecretKeySpec;

import java.text.SimpleDateFormat;
import java.util.*;

import org.sid.dao.BidRepo;
import org.sid.dao.Token;
import org.sid.dao.UserRepo;
import org.sid.entities.Bid;
import org.sid.entities.User;
import org.sid.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.util.SendEmail;

@CrossOrigin(origins ="http://localhost:3000/")
@Service
@Transactional
@RestController
@RequestMapping("api/")
public class BidServiceImpl implements BidService {
	@Autowired
	private BidRepo bidRepo ;
	
	@GetMapping("bids")
	public List<Bid> getBids(){
		return this.bidRepo.findAll();
	}

	@Override
	@PostMapping("bids")
	public Bid saveBid(@RequestBody Bid bid) {
		return bidRepo.save(bid);
	}

	@Override
	@GetMapping("bids/maxPrice/{itemId}")
	public Bid maxPriceOfItem(@PathVariable Long itemId) {
		return bidRepo.findTopByItemIdOrderByPrice(itemId);
	}

	@Override
	@GetMapping("bids/userId/{userId}")
	public List<Bid> findAllByUserId(@PathVariable Long userId) {
		return bidRepo.findAllByUserId(userId);
	}

	
}
