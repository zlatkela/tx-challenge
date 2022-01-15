package com.services.tx.challenge.exception;

import lombok.Data;

@Data
public class ErrorResponse {

  private final String code;
  private final String message;
  private final String debugInfo;

}
