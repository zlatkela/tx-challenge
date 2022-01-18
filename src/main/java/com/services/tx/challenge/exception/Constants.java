package com.services.tx.challenge.exception;

import lombok.experimental.UtilityClass;

@UtilityClass
class Constants {

  final String SERVER_ERROR_CODE = "SERVER_ERROR";
  final String MISSING_PARAMETER_CODE = "MISSING_PARAMETER";
  final String ARGUMENT_TYPE_MISMATCH_CODE = "ARGUMENT_TYPE_MISMATCH";
  final String METHOD_NOT_SUPPORTED_CODE = "METHOD_NOT_SUPPORTED";
  final String MISSING_HEADER_CODE = "MISSING_HEADER";

  final String SERVER_ERROR_MESSAGE = "Internal server error";
  final String MISSING_PARAMETER_MESSAGE = "Missing request parameter";
  final String ARGUMENT_TYPE_MISMATCH_MESSAGE = "Argument type mismatch";
  final String METHOD_NOT_SUPPORTED_MESSAGE = "HTTP method not supported";
  final String MISSING_HEADER_MESSAGE = "Missing header in request";

}
