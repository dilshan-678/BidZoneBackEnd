package com.example.BidZone.repostry;

import com.example.BidZone.entity.BiddingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BiddingItemRepostory extends JpaRepository<BiddingItem,Long> {
}
