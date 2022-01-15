package com.services.tx.challenge.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ExceptionMapping {

  private final String code;
  private final String message;
  private final HttpStatus status;
}
