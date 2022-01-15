package com.services.tx.challenge.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MessageDTO {

  private long id;
  private long createdAt;
  private String author;
  private String text;

}
