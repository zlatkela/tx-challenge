package com.services.tx.challenge.controller;

import com.services.tx.challenge.model.Message;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {

  @GetMapping
  public List<Message> getMessages() {
//    TODO: implement method
    return new ArrayList<>();
  }

  @PostMapping
  public Message addMessage() {
//    TODO: implement method
    return null;
  }
}
