package com.example.BidZone.dto;

import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuctionDTO implements Serializable {

    private Long id;
    private String action_name;
    private String description;
    private ItemDTO item;
    private LocalDateTime closingTime;
    private Long createdById;
    private String Image;
    private BidDTO currentHighestBid;
    private boolean isClosed;
}

