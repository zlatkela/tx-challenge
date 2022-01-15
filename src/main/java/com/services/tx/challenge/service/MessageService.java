package com.services.tx.challenge.service;

import com.services.tx.challenge.model.Message;
import com.services.tx.challenge.store.MessageRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

  private final MessageRepository messageRepository;

  public Message addMessage(Message message) {
//    TODO: implement method
    return null;
  }

  public List<Message> getAllMessages() {
    //TODO: implement method
    return null;
  }
}
