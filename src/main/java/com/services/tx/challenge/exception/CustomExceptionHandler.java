package com.services.tx.challenge.exception;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
@Slf4j
public class CustomExceptionHandler {

  private static final ExceptionMapping DEFAULT_ERROR = new ExceptionMapping(
      Constants.SERVER_ERROR_CODE,
      Constants.SERVER_ERROR_MESSAGE, HttpStatus.INTERNAL_SERVER_ERROR);

  private final Map<Class, ExceptionMapping> exceptionMappings = new HashMap<>();

  public CustomExceptionHandler() {
    registerMapping(MissingServletRequestParameterException.class, Constants.MISSING_PARAMETER_CODE,
        Constants.MISSING_PARAMETER_MESSAGE, HttpStatus.BAD_REQUEST);

    registerMapping(MethodArgumentTypeMismatchException.class,
        Constants.ARGUMENT_TYPE_MISMATCH_CODE,
        Constants.ARGUMENT_TYPE_MISMATCH_MESSAGE, HttpStatus.BAD_REQUEST);

    registerMapping(HttpRequestMethodNotSupportedException.class,
        Constants.METHOD_NOT_SUPPORTED_CODE,
        Constants.METHOD_NOT_SUPPORTED_MESSAGE, HttpStatus.METHOD_NOT_ALLOWED);

    registerMapping(ServletRequestBindingException.class, Constants.MISSING_HEADER_CODE,
        Constants.MISSING_HEADER_MESSAGE, HttpStatus.BAD_REQUEST);

  }

  @ExceptionHandler(Throwable.class)
  @ResponseBody
  public ErrorResponse handleThrowable(final Throwable ex, final HttpServletResponse response) {
    ExceptionMapping mapping = null;
    if (ex.getCause() != null) {
      mapping = exceptionMappings.get(ex.getCause().getClass());
    }

    if (mapping == null) {
      mapping = exceptionMappings.getOrDefault(ex.getClass(), DEFAULT_ERROR);
    }

    response.setStatus(mapping.getStatus().value());
    log.error("{} ({}): {}", mapping.getMessage(), mapping.getCode(), ex.getMessage());

    return new ErrorResponse(mapping.getCode(), mapping.getMessage(), ex.getMessage());
  }


  private void registerMapping(final Class<?> clazz, final String code, final String message, final
  HttpStatus status) {
    exceptionMappings.put(clazz, new ExceptionMapping(code, message, status));
  }

}
