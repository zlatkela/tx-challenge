package com.services.tx.challenge.dto;

import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MessageDTO {

  private Long id;
  private Instant createdAt;
  private String author;
  private String text;

}
