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

  private static final ExceptionMapping DEFAULT_ERROR = new ExceptionMapping("SERVER_ERROR",
      "Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);

  private final Map<Class, ExceptionMapping> exceptionMappings = new HashMap<>();

  public CustomExceptionHandler() {
    registerMapping(MissingServletRequestParameterException.class, "MISSING_PARAMETER",
        "Missing request parameter", HttpStatus.BAD_REQUEST);

    registerMapping(MethodArgumentTypeMismatchException.class, "ARGUMENT_TYPE_MISMATCH",
        "Argument type mismatch", HttpStatus.BAD_REQUEST);

    registerMapping(HttpRequestMethodNotSupportedException.class, "METHOD_NOT_SUPPORTED",
        "HTTP method not supported", HttpStatus.METHOD_NOT_ALLOWED);

    registerMapping(ServletRequestBindingException.class, "MISSING_HEADER",
        "Missing header in request", HttpStatus.BAD_REQUEST);

    //TODO: refactor this to be constants

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
